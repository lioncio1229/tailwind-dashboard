import { LucideDownload } from "lucide-react";
import Button from "@/components/button";
import Sidebar from "@/components/side-bar";
import DarkmodeToggle from "@/components/darkmode-toggle";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>
      <div className="h-screen w-full overflow-auto">
        <div className="sticky min-w-xl top-0 flex justify-between items-center bg-white dark:bg-slate-800 p-5 border-b-1 border-gray-200 dark:border-gray-700 mb-4">
          <span className="font-bold text-2xl">Reports</span>
          <div className="flex items-center gap-2">
            <Button label="Download" icon={<LucideDownload size={16} />} />
            <DarkmodeToggle />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
