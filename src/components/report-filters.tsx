"use client";

import Select from "@/components/select";

export default function ReportFilters() {
  return (
    <div className="flex py-2 gap-2">
      <div className="grow">
        <Select
          id="timeFrame"
          name="timeFrame"
          label="Time Frame"
          defaultValue="Last 7 days"
          option={[
            "Last 7 days",
            "Last 30 days",
            "Last 90 days",
            "Last 1 year",
          ]}
        />
      </div>
      <div className="grow">
        <Select
          id="people"
          name="people"
          label="People"
          defaultValue="All"
          option={["All", "People 1", "People 2", "People 3"]}
        />
      </div>
      <div className="grow">
        <Select
          id="topic"
          name="topic"
          label="Topic"
          defaultValue="All"
          option={["All", "Topic 1", "Topic 2", "Topic 3"]}
        />
      </div>
    </div>
  );
}
