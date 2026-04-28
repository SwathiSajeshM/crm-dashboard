// export default function Sidebar() {
//   return (
//     <div className="w-64 h-screen bg-gray-900 text-white p-4">
//       <h1 className="text-xl font-bold mb-6">CRM</h1>

//       <ul className="space-y-3">
//         <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
//         <li className="hover:text-gray-300 cursor-pointer">Leads</li>
//         <li className="hover:text-gray-300 cursor-pointer">Customers</li>
//         <li className="hover:text-gray-300 cursor-pointer">Settings</li>
//       </ul>
//     </div>
//   );
// }

type Props = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: Props) {
  return (
    <>
      {/* Overlay (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          fixed md:static z-50
          w-64 h-full bg-gray-900 text-white p-4
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <h1 className="text-xl font-bold mb-6">CRM</h1>

        <ul className="space-y-3">
          <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
          <li className="hover:text-gray-300 cursor-pointer">Leads</li>
          <li className="hover:text-gray-300 cursor-pointer">Customers</li>
          <li className="hover:text-gray-300 cursor-pointer">Settings</li>
        </ul>
      </div>
    </>
  );
}