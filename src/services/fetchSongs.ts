import type { Song } from '../states/songs'

/**
 * Simulate fetching songs from a remote source
 */
export function fetchSongs() {
  return Promise.resolve<Song[]>([
    {
      id: 0,
      title: 'Stairway to Heaven',
      author: 'Led Zeppelin',
    },
    {
      id: 1,
      title: 'The Show Must Go On',
      author: 'Qeen',
    },
  ])
}
