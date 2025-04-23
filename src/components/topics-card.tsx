import { useId } from "react";
import Paper from "./paper";
import Image, { StaticImageData } from "next/image";
import ProgressBar, { type ProgresBarColors } from "./progress-bar";

export type Topic = {
  name: string;
  image: StaticImageData;
  value: number;
};

function TopicItem({
  topic,
  color,
}: {
  topic: Topic;
  color?: ProgresBarColors;
}) {
  const id = useId();

  return (
    <div className="@container flex gap-3 justify-between items-end">
      <Image
        src={topic.image}
        alt="Food"
        width={50}
        height={50}
        className="w-16 h-auto rounded-lg"
      />

      <div className="grow">
        <label htmlFor={id} className="block pb-2 font-medium dark:font-normal">
          {topic.name}
        </label>
        <ProgressBar id={id} value={topic.value * 100} color={color} />
      </div>
      <span className="font-medium text-gray-700 dark:text-white">
        {topic.value * 100}%
      </span>
      <span className="text-gray-400 dark:text-gray-300">Correct</span>
    </div>
  );
}

export default function TopicsCard({
  title,
  topics = [],
  color = "orange",
}: {
  title?: string;
  topics?: Topic[];
  color?: ProgresBarColors;
}) {
  return (
    <Paper className="p-5 pb-8">
      <div className="w-full flex justify-between align-middle pb-3 text-gray-600 dark:text-white ">
        <div className="text-sm">{title}</div>
      </div>
      <div className="flex flex-col gap-6 pt-4">
        {topics.map((topic) => (
          <TopicItem key={topic.name} topic={topic} color={color} />
        ))}
      </div>
    </Paper>
  );
}
