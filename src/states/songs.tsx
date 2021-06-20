import type { ReactElement } from 'react'

import { atom, RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

// -----------------------------------------------
// TYPES
export type Song = {
  id: number
  author: string
  title: string
}

// -----------------------------------------------
// APIS

const songsState = atom<Song[]>({
  key: 'songs',
  default: [],
})

// Every consumer of the songs' state must be wrapped inside a `SongsRoot` component
export function SongsRoot(props: { children: ReactElement }) {
  return <RecoilRoot>{props.children}</RecoilRoot>
}

// Expose both the songs and their setter. When the state updates, the component must be re-rendered
export function useSongsState() {
  return useRecoilState(songsState)
}

// Expose the songs. When the state updates, the component must be re-rendered
export function useSongs() {
  return useRecoilValue(songsState)
}

// Expose just the songs' setter.
export function useSetSongs() {
  return useSetRecoilState(songsState)
}
