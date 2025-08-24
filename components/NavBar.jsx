import Link from "next/link";

export default function NavBar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/races", label: "Races" },
    { href: "/standings", label: "Standings" },
    { href: "/teams", label: "Teams" },
    { href: "/circuits", label: "Circuits" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0C0C0C]">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-[#E10600] text-xl font-extrabold hover:opacity-80">
          FormulaBoard
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[#ffffff] text-lg font-bold hover:bg-red-900 px-4 py-2 rounded transition focus:ring-2 focus:ring-red-600"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
