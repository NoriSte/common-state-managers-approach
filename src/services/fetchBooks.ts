import type { Book } from '../states/books'

/**
 * Simulate fetching books from a remote source
 */
export function fetchBooks() {
  return Promise.resolve<Book[]>([
    {
      id: 0,
      title: "The Hitchhiker's Guide to the Galaxy",
      author: 'Douglas Adams',
    },
    {
      id: 1,
      title: `Harry Potter and the Sorcerer's Stone`,
      author: 'J.K. Rowling',
    },
  ])
}
