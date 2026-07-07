import Link from "next/link"

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/accomplishments", label: "Accomplishments" },
  { href: "/education", label: "Education" },
  { href: "/boards", label: "Boards" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  return (
    <nav className="border-b border-zinc-800 bg-zinc-950">
      <div className="mx-auto flex max-w-4xl flex-wrap gap-4 px-6 py-4 text-sm">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-zinc-400 transition hover:text-cyan-400"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
