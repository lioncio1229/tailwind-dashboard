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
import { ForwardRefExoticComponent, createElement } from "react";

function SidebarItem({
  icon,
  label,
  href,
}: {
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 p-2 dark:text-gray-500 rounded-lg text-white font-medium"
    >
      {createElement(icon)}
      {label}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="h-screen w-70 p-10 shadow-lg">
      <div className="flex flex-col gap-5 mb-10">
        <Image src={Logo} alt="Logo" width={180} />
        <div className="flex flex-col gap-2">
          <SidebarItem icon={ChartBar} label="Reports" href="#" />
          <SidebarItem icon={Zap} label="Library" href="/library" />
          <SidebarItem icon={Users} label="People" href="/people" />
          <SidebarItem
            icon={ListChecks}
            label="Activities"
            href="/activities"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="dark:text-gray-400 text-lg font-medium">Support</h1>
        <SidebarItem icon={Lightbulb} label="Get Started" href="/get-started" />
        <SidebarItem icon={Settings} label="Settings" href="/settings" />
      </div>
    </div>
  );
}
