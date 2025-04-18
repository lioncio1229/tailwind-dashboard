import Sidebar from "@/components/side-bar";

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
        {children}
      </div>
    </div>
  );
}
