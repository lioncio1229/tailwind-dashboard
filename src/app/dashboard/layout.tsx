import Sidebar from "@/components/side-bar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
}
