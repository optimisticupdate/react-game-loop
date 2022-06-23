// Resources
// https://blog.saeloun.com/2021/12/30/react-18-usesyncexternalstore-api
// https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore

import { useCallback, useSyncExternalStore } from 'react'

type StoreListener = () => void

interface Store<T> {
  getState: () => T
  setState: (fn: (state: T) => T) => void
  subscribe: (listener: StoreListener) => () => boolean
}

export const createStore = <T>(initialState: T): Store<T> => {
  let state = initialState
  const getState = () => state
  const listeners = new Set<StoreListener>()
  const setState = (fn: (state: T) => T) => {
    state = fn(state)
    listeners.forEach((l) => l())
  }
  const subscribe = (listener: StoreListener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }
  return { getState, setState, subscribe }
}

const useStore = <R, T>(s: Store<T>, selector: (state: T) => R) => {
  return useSyncExternalStore(
    s.subscribe,
    useCallback(() => selector(s.getState()), [s, selector]),
  )
}

export const useSelect = <R, T>(store: Store<T>, selector: (state: T) => R) =>
  useStore<R, T>(store, useCallback(selector, []))

export const useUpdate = <T>(store: Store<T>, updater: (state: T) => T) => store.setState(updater)
