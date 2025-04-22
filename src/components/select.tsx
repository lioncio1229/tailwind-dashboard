"use client";

import { createPortal } from "react-dom";
import { useState, useRef, useLayoutEffect, useEffect, memo } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

type Target = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  height?: number;
  width?: number;
};

type Position = {
  x: number;
  y: number;
};

const Popper = memo(function Popper({
  target,
  flip,
  children,
}: {
  target: Target;
  flip?: (hasFlip: boolean) => void;
  children?: React.ReactNode;
}) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [fliptted, setFlippted] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (menuRef.current) {
      const height = menuRef.current.getBoundingClientRect().height;

      let x = 0;
      let y = 0;
      let isFlipped = false;

      if (target !== null) {
        x = target.left;
        if (target.bottom + height > window.innerHeight) {
          y = target.top - height;
          isFlipped = true;
        } else {
          y = target.bottom - 1;
          isFlipped = false;
        }
      }

      if (x !== position.x || y !== position.y) {
        setPosition({ x, y });
        setFlippted(isFlipped);
      }

      if (fliptted !== isFlipped) {
        flip?.(isFlipped);
      }
    }
  }, [target]);

  useEffect(() => {
    return () => {
      flip?.(false); // Reset flip state when component unmounts
    };
  }, []);

  return (
    <div
      ref={menuRef}
      role="listbox"
      aria-expanded={true}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: target.width,
        zIndex: 1000,
      }}
    >
      {children}
    </div>
  );
});

export default function Select({
  id,
  name,
  label,
  option,
  value,
  onChange,
}: {
  id: string;
  name: string;
  label?: string;
  option: string[];
  value?: string;
  onChange?: (value: string) => void;
}) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [target, setTarget] = useState<Target | null>(null);
  const [fliptted, setFlippted] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const open = Boolean(target);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (target) {
      setTarget(null);
      return;
    }

    const targetRect = e.currentTarget.getBoundingClientRect();
    setTarget({
      left: targetRect.left,
      top: targetRect.top,
      right: targetRect.right,
      bottom: targetRect.bottom,
      height: targetRect.height,
      width: targetRect.width,
    });
  };

  const handleFlip = (hasFlip: boolean) => {
    setFlippted(hasFlip);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) {
      if (e.key === "Enter") {
        const targetRect = targetRef.current?.getBoundingClientRect();
        if (targetRect) {
          setTarget({
            left: targetRect.left,
            top: targetRect.top,
            right: targetRect.right,
            bottom: targetRect.bottom,
            height: targetRect.height,
            width: targetRect.width,
          });
        }
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        setFocusedIndex((prev) =>
          prev === null ? 0 : Math.min(prev + 1, option.length - 1)
        );
        break;
      case "ArrowUp":
        setFocusedIndex((prev) =>
          prev === null ? option.length - 1 : Math.max(prev - 1, 0)
        );
        break;
      case "Enter":
        if (focusedIndex !== null) {
          const selectedItem = option[focusedIndex];
          if (onChange) {
            onChange(selectedItem);
          } else {
            inputRef.current!.value = selectedItem;
          }
          setTarget(null); // Close the popup after selection
        }
        break;
      case "Escape":
        setTarget(null);
        break;
    }
  };

  useEffect(() => {
    if (!open) return;

    const handleResize = () => {
      const targetRect = targetRef.current?.getBoundingClientRect();
      if (targetRect) {
        setTarget({
          left: targetRect.left,
          top: targetRect.top,
          right: targetRect.right,
          bottom: targetRect.bottom,
          height: targetRect.height,
          width: targetRect.width,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, [open]);

  return (
    <>
      <div
        aria-describedby={id}
        aria-expanded={open}
        aria-haspopup="listbox"
        ref={targetRef}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className={clsx(
          "group flex justify-between items-center p-2 border-1 border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 rounded-lg cursor-pointer select-none outline-none focus:dark:bg-slate-950",
          { "border-b-0 rounded-b-none": open && !fliptted },
          { "border-t-0 rounded-t-none": open && fliptted }
        )}
      >
        <div>
          <label className="text-gray-500 dark:text-gray-400">
            {`${label}:`}
          </label>
          <input
            id={id}
            ref={inputRef}
            type="text"
            className="outline-none ml-2 text-gray-700 font-medium dark:text-white dark:font-normal select-none"
            readOnly
            aria-hidden="true"
            tabIndex={-1}
            {...(value && { value })}
          />
        </div>
        <ChevronDown
          className={clsx(
            "text-gray-400 transition-transform duration-200 ease-out",
            { "rotate-180": open },
            { "rotate-0": !open }
          )}
        />
      </div>

      {
        target &&
          createPortal(
            <div
              className="fixed top-0 left-0 right-0 bottom-0 z-50"
              onClick={() => setTarget(null)}
            >
              <Popper target={target} flip={handleFlip}>
                <ul
                  role="listbox"
                  aria-labelledby={id}
                  className={clsx(
                    "p-2 bg-white dark:bg-slate-900 border-1 border-gray-200 dark:border-gray-700 rounded-lg",
                    { "rounded-t-none": !fliptted },
                    { "rounded-b-none": fliptted }
                  )}
                >
                  {option.map((item, index) => (
                    <li
                      key={index}
                      role="option"
                      aria-selected={focusedIndex === index}
                      className={clsx(
                        "p-2 text-gray-700 hover:bg-blue-100 active:bg-blue-50 dark:text-white dark:hover:bg-gray-800 dark:active:bg-gray-700 rounded-lg cursor-pointer",
                        {
                          "bg-blue-100 dark:bg-gray-800":
                            focusedIndex === index,
                        }
                      )}
                      onClick={() => {
                        if (onChange) {
                          onChange(item);
                        } else {
                          inputRef.current!.value = item;
                        }
                        setTarget(null);
                      }}
                      onMouseEnter={() => setFocusedIndex(index)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Popper>
            </div>,
            document.body
          ) // Append to body
      }
    </>
  );
}
