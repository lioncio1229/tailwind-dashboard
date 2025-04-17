import { LucideProps } from "lucide-react";
import { ReactElement } from "react";

export default function Button({
  label,
  icon,
}: {
  label: string;
  icon?: ReactElement<LucideProps>;
}) {
  return (
    <button className=" text-gray-600 dark:text-white hover:text-gray-500 dark:hover:text-gray-200 dark:active:text-gray-400 active:text-gray-400 cursor-pointer p-2 font-medium">
      <div className="flex gap-2 items-center">
        <div>{icon}</div>
        <span>{label}</span>
      </div>
    </button>
  );
}
