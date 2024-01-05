import { Outlet } from 'react-router-dom'
import NavBar from './Nav'
import Footer from './Footer'

function Layout() {
  return (
    <div>
      <NavBar />
      <div className='grid grid-rows-[auto_1fr_auto] min-h-screen'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
