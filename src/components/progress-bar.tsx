
export type ProgresBarColors = "orange" | "green" | "blue" | "red";

export default function ProgressBar({
  id = "",
  value = 0,
  color = "orange"
}: {
  id?: string;
  value?: number;
  max?: number;
  color?: ProgresBarColors;
}) {

  const linearGradient = {
    orange: "from-orange-300 to-orange-600",
    green: "from-green-300 to-green-600",
    blue: "from-blue-300 to-blue-600",
    red: "from-red-300 to-red-600"
  }

  const darkLinearGradient = {
    orange: "dark:from-orange-200 dark:to-orange-300",
    green: "dark:from-green-200 dark:to-green-300",
    blue: "dark:from-blue-200 dark:to-blue-300",
    red: "dark:from-red-200 dark:to-red-300"
  }

  return (
    <div id={id} className="w-full bg-gray-200 rounded-full h-3 @max-[400px]:h-2.5 dark:bg-gray-700">
      <div className={`bg-linear-to-r h-full rounded-full ${linearGradient[color]} ${darkLinearGradient[color]}`} style={{ width: `${value}%` }}></div>
    </div>
  );
}
