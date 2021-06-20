import { useBooks } from '../../states/books'
import { BookDetail } from './BookDetail'

/**
 * Render all the books.
 */
export function BooksList() {
  const books = useBooks()

  return (
    <>
      {books.map(book => (
        <BookDetail key={book.id} book={book} />
      ))}
    </>
  )
}
