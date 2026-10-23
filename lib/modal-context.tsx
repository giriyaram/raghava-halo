'use client'
import { createContext, useContext, useState } from 'react'

interface ModalCtx {
  open: boolean
  source: string
  openModal: (source?: string) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalCtx>({
  open: false,
  source: 'unspecified',
  openModal: () => {},
  closeModal: () => {},
})

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState('unspecified')
  return (
    <ModalContext.Provider
      value={{
        open,
        source,
        openModal: (src = 'unspecified') => { setSource(src); setOpen(true) },
        closeModal: () => setOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext)
