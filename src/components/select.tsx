export default function Select({
  id,
  name,
  label,
  option,
}: {
  id: string;
  name: string;
  label?: string;
  option: string[];
}) {
  return (
    <div>
      <select
        id={id}
        name={name}
        className="bg-white dark:bg-slate-900 p-3 rounded-md border-1 border-gray-200 dark:border-gray-700 block w-full focus:outline-2 focus:outline-red-700 dark:focus:outline-white dark:focus:outline-1 appearance-none bg-no-repeat bg-position-[right_0.7rem_top_50%] bg-size-[0.65rem_auto] bg-[url(@/app/arrow-down.svg)] dark:bg-[url(@/app/arrow-down-white.svg)]"
      >
        {option.map((opt) => (
          <option key={opt} value={opt}>
            <span>{opt}</span>
          </option>
        ))}
      </select>
    </div>
  );
}
