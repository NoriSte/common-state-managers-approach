import './styles.css'
import { BooksSection } from './components/books/BooksSection'
import { SongsSection } from './components/songs/SongsSection'

export default function App() {
  return (
    <div className="App">
      <h1>State Managers</h1>
      <p>
        This is an example of a common approach to manage different State Managers.
        <br />
        <br />
        <i>Books</i> and <i>Sections</i> are connected to two different State Managers (a React
        Context and Recoil) but their implementation look 100% the same.
        <br />
        <br />
        The State Managers-related implementation is hidden inside the <i>src/states</i> directory.
        <br />
        <br />
        Please refer to the <i>README.md</i> for additional info.
      </p>

      <BooksSection />
      <SongsSection />
    </div>
  )
}
