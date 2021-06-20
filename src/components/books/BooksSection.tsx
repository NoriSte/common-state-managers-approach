import { BooksRoot } from '../../states/books'

import { FetchBooks } from './FetchBooks'
import { BooksList } from './BooksList'

/**
 * Render the whole books' section.
 */
export function BooksSection() {
  return (
    <BooksRoot>
      <>
        <h2>Books</h2>
        <FetchBooks />
        <BooksList />
      </>
    </BooksRoot>
  )
}
