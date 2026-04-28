// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <div className="flex">
//       <Sidebar />

//       <div className="flex-1">
//         <Navbar />
//         <main className="p-6 bg-gray-100 min-h-screen">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <Navbar setIsOpen={setIsOpen} />

        <main className="flex-1 p-4 md:p-6 bg-gray-100 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}