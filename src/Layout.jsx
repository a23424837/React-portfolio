import React from 'react'
import Navebar from './components/Navebar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'

export default function Layout() {
  return (
    <>
    <Navebar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
