import BookGrid from "@/components/BookGrid"
import PageBanner from "@/components/PageBanner"
import { books } from "@/data/books"

export default function BooksPage() {
  return (
    <div>
      <PageBanner title="Books" focusY="85%" />
      <BookGrid items={books} />
    </div>
  )
}
