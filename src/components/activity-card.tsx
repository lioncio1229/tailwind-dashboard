"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Paper from "./paper";
import VerticalBar from "@/app/vertical-bar.svg";

export default function ActivityCard() {
  return (
    <Paper className="p-5">
      <div className="w-full flex justify-between align-middle pb-3 border-b-1 text-gray-600 dark:text-white border-gray-200 dark:border-gray-700">
        <div className="text-sm">Activity</div>
        <div className="text-sm cursor-pointer">
          <span className="font-medium mr-1">Month</span>
          <ChevronDown size={20} className="h-full inline-block align-middle" />
        </div>
      </div>
      <div className="flex justify-center pt-2">
        <Image
          src={VerticalBar}
          alt="Vertical Bar Chart"
          className="h-full w-auto"
        />
      </div>
    </Paper>
  );
}
