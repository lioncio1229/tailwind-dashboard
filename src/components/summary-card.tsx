import Paper from "./paper";

export default function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
    return (
        <Paper className="p-5">
            <span className="text-sm mb-3 dark:text-gray-400 block">{title}</span>
            <span className="text-2xl dark:text-white block">{value}</span>
        </Paper>
    )
}
