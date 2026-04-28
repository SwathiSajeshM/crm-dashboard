// export default function Navbar() {
//   return (
//     <div className="h-16 bg-white shadow flex items-center justify-between px-6">
//       <h2 className="text-lg font-semibold text-gray-400">Dashboard</h2>

//       <div>
//         <span className="text-sm">User</span>
//       </div>
//     </div>
//   );
// }

type Props = { setIsOpen: (val: boolean) => void; };
export default function Navbar({ setIsOpen }: Props) {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-4 md:px-6"> 
      {/* Left */}
      <div className="flex items-center gap-3">     
        {/* Menu button (mobile only) */}
        <button className="md:hidden text-xl" onClick={() => setIsOpen(true)}> ☰ </button>
        <h2 className="text-lg font-semibold text-gray-600">Dashboard</h2>
      </div>
      {/* Right */}
      <div><span className="text-sm">User</span></div>
    </div>
  );
}