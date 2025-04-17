import Button from "@/components/button"
import { LucideDownload } from "lucide-react"
import Select from "@/components/select"

export default function Page() {
    return (
        <div className="flex flex-col gap-3 w-full px-5">
            <div className="flex justify-between items-center p-5 border-b-1 border-gray-200 dark:border-gray-700">
                <span className="font-bold text-2xl">Reports</span>
                <Button label="Download" icon={<LucideDownload size={16} />} />
            </div>
            <div className="flex py-2 gap-2">
                <div className="grow">
                    <Select 
                        id="timeFrame" 
                        name="timeFrame"
                        label="Time Frame"
                        option={["Last 7 days", "Last 30 days", "Last 90 days", "Last 1 year"]}
                    />
                </div>
                <div className="grow">
                    <Select 
                        id="people" 
                        name="people"
                        label="People"
                        option={["All", "People 1", "People 2", "People 3"]}
                    />
                </div>
                <div className="grow">
                    <Select 
                        id="topic" 
                        name="topic"
                        label="Topic"
                        option={["All", "Topic 1", "Topic 2", "Topic 3"]}
                    />
                </div>
            </div>
        </div>
    )
}