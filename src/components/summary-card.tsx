"use client";

import Image from 'next/image';
import Paper from "./paper";
import Graph from '@/app/graph.svg';

export default function SummaryCard({
  title,
  value,
  showGraph,
}: {
  title: string;
  value: string;
  showGraph?: boolean;
}) {
  return (
    <Paper className="p-5">
      <span className="text-sm mb-1 text-gray-600 dark:text-gray-400 block">
        {title}
      </span>
      <span className="text-2xl font-bold dark:font-medium text-gray-700 dark:text-white block">
        {value}
      </span>
      <div className='h-10'>
        {
          showGraph &&
          <Image 
            src={Graph}
            alt="Graph"
            className='w-full h-auto'
          />
        }
      </div>
    </Paper>
  );
}
