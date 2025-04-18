import Button from "@/components/button"
import { LucideDownload } from "lucide-react"
import ReportFilters from "@/components/report-filters"
import Paper from "@/components/paper"
import SummaryCard from "@/components/summary-card"

export default function Page() {
    return (
        <div className="flex flex-col gap-3 w-full px-5">
            <div className="position flex justify-between items-center p-5 border-b-1 border-gray-200 dark:border-gray-700">
                <span className="font-bold text-2xl">Reports</span>
                <Button label="Download" icon={<LucideDownload size={16} />} />
            </div>
           <ReportFilters />
           <div className="grid grid-cols-2 gap-4">
                <div className="h-80">
                    <div className="h-full w-full">
                        <div className="h-full grid grid-cols-3 gap-3">
                            <SummaryCard title="Active Users" value="27/80" />
                            <SummaryCard title="Questions Answered" value="3,298" />
                            <SummaryCard title="Av. Session Length" value="2m 34s" />
                            <SummaryCard title="Starting Knowledge" value="64%" />
                            <SummaryCard title="Current Knowledge" value="86%" />
                            <SummaryCard title="Knowledge Gain" value="+34%" />
                        </div>
                    </div>
                </div>
                <div className="h-80">
                    <Paper className="h-full w-full"></Paper>
                </div>
                <div className="h-80">
                    <Paper className="h-full w-full"></Paper>
                </div>
                <div className="h-80">
                    <Paper className="h-full w-full"></Paper>
                </div>
                <div className="h-80">
                    <Paper className="h-full w-full"></Paper>
                </div>
                <div className="h-80">
                    <Paper className="h-full w-full"></Paper>
                </div>
            </div>
        </div>
    )
}