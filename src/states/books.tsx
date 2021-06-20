import type { ReactElement } from 'react'

import { createContext, useState, useContext } from 'react'

// -----------------------------------------------
// TYPES
export type Book = {
  id: number
  author: string
  title: string
}

type BooksState = {
  books: Book[]
  setBooks: (books: Book[]) => void
}

// -----------------------------------------------
// APIS

// The Context Provider is NOT exposed. The consumer is unaware of the state manager used
const BooksContext = createContext<BooksState>({
  books: [],
  setBooks: () => {
    throw new Error('The component must be rendered inside a <BooksRoot />')
  },
})

// Every consumer of the books' state must be wrapped inside a `BooksRoot` component
export function BooksRoot(props: { children: ReactElement }) {
  const [books, setBooks] = useState<Book[]>([])

  return <BooksContext.Provider value={{ books, setBooks }}>{props.children}</BooksContext.Provider>
}

// Expose both the books and their setter. When the state updates, the component must be re-rendered
export function useBooksState() {
  return useContext(BooksContext)
}

// Expose the books. When the state updates, the component must be re-rendered
export function useBooks() {
  return useContext(BooksContext).books
}

// Expose just the books' setter. Please note: since it's based on React Context, it makes the
// consumers re-render even when the `books` update.
export function useSetBooks() {
  return useContext(BooksContext).setBooks
}
