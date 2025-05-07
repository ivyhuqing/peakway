import NavBar from './NavBar'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}
