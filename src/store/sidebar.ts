import { entity } from 'simpler-state'

// initial state

const initialState = {
  dropDownMenuIsOpen: false,
}

// entity

export const sidebar = entity(initialState)

// entity updaters

export const setSidebarIsOpen = (payload = true) => {
  return sidebar.set((currentState) => ({
    ...currentState,
    dropDownMenuIsOpen: payload,
  }))
}

export const toggleSidebar = () => {
  return sidebar.set((currentState) => ({
    ...currentState,
    dropDownMenuIsOpen: !currentState.dropDownMenuIsOpen,
  }))
}

export const openSidebar = () => setSidebarIsOpen()

export const closeSidebar = () => setSidebarIsOpen(false)
