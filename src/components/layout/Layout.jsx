import React from 'react'
import { Header } from '../Header/Header'

export const Layout = ({children}) => {
  return (
    <>
    <Header /> 
    {children}
    </>
  )
}
