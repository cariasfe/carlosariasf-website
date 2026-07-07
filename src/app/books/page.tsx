import BookGrid from "@/components/BookGrid"
import { books } from "@/data/books"

export default function BooksPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-zinc-100">Books</h1>
      <BookGrid items={books} />
    </div>
  )
}
