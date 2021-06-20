import { useEffect } from 'react'
import { useSetSongs } from '../../states/songs'
import { fetchSongs } from '../../services/fetchSongs'

/**
 * Get the songs from the server when mounted.
 */
export function FetchSongs() {
  const setSongs = useSetSongs()

  useEffect(() => {
    fetchSongs().then(response => setSongs(response))
  }, [
    // PLEASE NOTE: setSongs is a stable function, its reference doesn't change
    setSongs,
  ])

  return null
}
