import Image from "next/image"
import type { Book } from "@/data/books"

export default function BookGrid({ items }: { items: Book[] }) {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {items.map((book) => (
        <li key={book.title} className="space-y-2">
          <Image
            src={book.cover}
            alt={book.title}
            width={169}
            height={246}
            className="w-full rounded border border-zinc-800 object-cover"
          />
          <p className="text-sm font-semibold text-zinc-100">{book.title}</p>
          <p className="text-xs text-zinc-500">{book.author}</p>
        </li>
      ))}
    </ul>
  )
}
