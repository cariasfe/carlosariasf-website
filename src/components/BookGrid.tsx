import type { Book } from "@/data/books"

export default function BookGrid({ items }: { items: Book[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((book) => (
        <li
          key={book.title}
          className="rounded border border-zinc-800 p-4"
        >
          <p className="font-semibold text-zinc-100">{book.title}</p>
          <p className="text-sm text-zinc-500">{book.author}</p>
        </li>
      ))}
    </ul>
  )
}
