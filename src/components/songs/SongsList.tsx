import { useSongs } from '../../states/songs'
import { SongDetail } from './SongDetail'

/**
 * Render all the songs.
 */
export function SongsList() {
  const songs = useSongs()

  return (
    <>
      {songs.map(song => (
        <SongDetail key={song.id} song={song} />
      ))}
    </>
  )
}
