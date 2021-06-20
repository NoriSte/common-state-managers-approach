import { SongsRoot } from '../../states/songs'

import { FetchSongs } from './FetchSongs'
import { SongsList } from './SongsList'

/**
 * Render the whole songs' section.
 */
export function SongsSection() {
  return (
    <SongsRoot>
      <>
        <h2>Songs</h2>
        <FetchSongs />
        <SongsList />
      </>
    </SongsRoot>
  )
}
