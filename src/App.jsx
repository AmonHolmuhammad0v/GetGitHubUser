
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchUser from './components/SeacrhUser/SearchUser'
import AboutUser from './components/AboutUser/AboutUser'
import Sorting from './components/Sorting/Sorting'
import UsersInfo from './components/UsersInfo/UsersInfo'
// import './assets/css/style.scss'

const App = () => {
  return (
    <>
    <Navbar/>
    <SearchUser/>
    <AboutUser/>
    <Sorting/>
    <UsersInfo/>
    </>
    )
}

export default App