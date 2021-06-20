import type { Song } from '../../states/songs'

type Props = {
  song: Song
}

/**
 * Render the song' details.
 */
export function SongDetail(props: Props) {
  const song = props.song

  return (
    <p>
      Title: {song.title}, author: {song.author}
    </p>
  )
}
