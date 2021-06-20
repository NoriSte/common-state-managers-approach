import { useEffect } from 'react'
import { useSetBooks } from '../../states/books'
import { fetchBooks } from '../../services/fetchBooks'

/**
 * Get the books from the server when mounted.
 */
export function FetchBooks() {
  const setBooks = useSetBooks()

  useEffect(() => {
    fetchBooks().then(response => setBooks(response))
  }, [
    // PLEASE NOTE: setBooks is a stable function, its reference doesn't change
    setBooks,
  ])

  return null
}
