import ReportFilters from "@/components/report-filters";
import SummaryCard from "@/components/summary-card";
import ActivityCard from "@/components/activity-card";
import TopicsCard, { type Topic } from "@/components/topics-card";
import LeaderboardCard, {
  type Leaderboard,
} from "@/components/leaderboard-card";

import Food from "@/app/food.jpeg";
import Medicine from "@/app/medicine.jpg";
import Networking from "@/app/networking.jpg";
import CovidDoctor from "@/app/covid-doctor.jpg";
import CyberSecurity from "@/app/cyber-security.jpg";
import SocialMedia from "@/app/social-media.jpg";
import Alpha from "@/app/alpha.png";
import Aswang from "@/app/aswang.avif";
import Cute from "@/app/cute.jpg";

export default function Page() {
  const weakestTopics: Topic[] = [
    {
      name: "Food Safety",
      image: Food,
      value: 0.8,
    },
    {
      name: "Compliance Basics Procedures",
      image: Medicine,
      value: 0.52,
    },
    {
      name: "Compliance Basics Procedures",
      image: Networking,
      value: 0.36,
    },
  ];

  const strongestTopics: Topic[] = [
    {
      name: "Covid Protocols",
      image: CovidDoctor,
      value: 0.95,
    },
    {
      name: "Cyber Security Basics",
      image: CyberSecurity,
      value: 0.92,
    },
    {
      name: "Social Media Policies",
      image: SocialMedia,
      value: 0.89,
    },
  ];

  const userLeaderboard: Leaderboard[] = [
    {
      name: "Jesse Thomas",
      image: Alpha,
      value: "1",
      positive: true,
      secondaryValue: "637 Points - 98% Correct",
    },
    {
      name: "Jane Smith",
      image: Aswang,
      value: "2",
      positive: false,
      secondaryValue: "630 Points - 89% Correct",
    },
    {
      name: "Bob Johnson",
      image: Cute,
      value: "3",
      positive: true,
      secondaryValue: "700 Points - 100% Correct",
    },
  ];

  const groupLeaderboard: Leaderboard[] = [
    {
      name: "Houston Facility",
      value: "1",
      positive: true,
      secondaryValue: "700 Points - 100% Correct",
    },
    {
      name: "Test Group",
      value: "2",
      positive: false,
      secondaryValue: "700 Points - 100% Correct",
    },
    {
      name: "Sales Leadership",
      value: "3",
      positive: true,
      secondaryValue: "700 Points - 100% Correct",
    },
    {
      name: "Northeast Region",
      value: "4",
      positive: true,
      secondaryValue: "700 Points - 100% Correct",
    },
  ];

  return (
    <div className="flex flex-col gap-3 w-full px-5 mb-8">
      <ReportFilters />
      <div className="grid grid-cols-2 gap-4">
        <div className="h-80 overflow-hidden">
          <div className="grid grid-cols-3 gap-3 h-full">
            <SummaryCard title="Active Users" value="27/80" />
            <SummaryCard title="Questions Answered" value="3,298" />
            <SummaryCard title="Av. Session Length" value="2m 34s" />
            <SummaryCard title="Starting Knowledge" value="64%" showGraph />
            <SummaryCard title="Current Knowledge" value="86%" showGraph />
            <SummaryCard title="Knowledge Gain" value="+34%" showGraph />
          </div>
        </div>
        <div className="h-80">
          <ActivityCard />
        </div>
        <TopicsCard title="Weakest Topics" topics={weakestTopics} />
        <TopicsCard
          title="Weakest Topics"
          topics={strongestTopics}
          color="green"
        />
        <LeaderboardCard
          title="User Leaderboard"
          leaderboards={userLeaderboard}
        />
        <LeaderboardCard
          title="Groups Leaderboard"
          leaderboards={groupLeaderboard}
        />
      </div>
    </div>
  );
}
