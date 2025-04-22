import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

import Paper from "@/components/paper";

export type Leaderboard = {
  name: string;
  image?: StaticImageData;
  value: string;
  positive: boolean;
  secondaryValue?: string;
};

function LeaderboardItem({ leaderboard }: { leaderboard: Leaderboard }) {
  return (
    <div className="flex gap-3 justify-between items-center">
      {leaderboard.image && (
        <Image
          src={leaderboard.image}
          alt="Food"
          width={50}
          height={50}
          className="w-12 h-12 rounded-full"
        />
      )}

      <div className="flex flex-col grow">
        <span className="font-medium">{leaderboard.name}</span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {leaderboard.secondaryValue}
        </span>
      </div>
      <span
        className={clsx(
          "text-lg font-medium relative pr-8 after:absolute after:left-5 after:border-10",
          {
            "after:border-green-400 after:border-l-transparent after:border-t-transparent after:border-r-transparent after:top-0":
              leaderboard.positive,
          },
          {
            "after:border-red-500 after:border-l-transparent after:border-b-transparent after:border-r-transparent after:top-2.5":
              !leaderboard.positive,
          }
        )}
      >
        {leaderboard.value}
      </span>
    </div>
  );
}

export default function LeaderboardCard({
  leaderboards = [],
}: {
  leaderboards: Leaderboard[];
}) {
  return (
    <Paper className="p-5 pb-8">
      <div className="w-full flex justify-between align-middle pb-3 text-gray-600 dark:text-white ">
        <div className="text-sm">User Leaderboard</div>
      </div>
      <div className="flex flex-col gap-6 pt-4">
        {leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.name} leaderboard={leaderboard} />
        ))}
      </div>
    </Paper>
  );
}
