import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/logo.svg";
import {
  ChartBar,
  Zap,
  Users,
  ListChecks,
  Lightbulb,
  Settings,
  LucideProps,
} from "lucide-react";
import { ReactElement, createElement } from "react";

function SidebarItem({
  icon,
  label,
  href,
}: {
  icon: ReactElement<LucideProps>;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 p-3 px-4 text-gray-600 dark:text-white hover:bg-blue-100 hover:text-blue-700 rounded-lg dark:hover:bg-gray-800 dark:hover:text-white font-medium"
    >
      {icon}
      {label}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="h-full w-70 p-10 px-8 shadow-lg bg-white dark:bg-slate-900">
      <div className="flex flex-col gap-5 mb-10">
        <Image src={Logo} alt="Logo" width={180} />
        <div className="flex flex-col gap-2">
          <SidebarItem icon={<ChartBar />} label="Reports" href="#" />
          <SidebarItem icon={<Zap />} label="Library" href="/library" />
          <SidebarItem icon={<Users />} label="People" href="/people" />
          <SidebarItem
            icon={<ListChecks />}
            label="Activities"
            href="/activities"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-400 dark:text-gray-300 text-lg font-medium">
          Support
        </h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            icon={createElement(Lightbulb)}
            label="Get Started"
            href="/get-started"
          />
          <SidebarItem
            icon={createElement(Settings)}
            label="Settings"
            href="/settings"
          />
        </div>
      </div>
    </div>
  );
}
