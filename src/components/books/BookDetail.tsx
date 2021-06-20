import type { Book } from '../../states/books'

type Props = {
  book: Book
}

/**
 * Render the book' details.
 */
export function BookDetail(props: Props) {
  const book = props.book

  return (
    <p>
      Title: {book.title}, author: {book.author}
    </p>
  )
}
