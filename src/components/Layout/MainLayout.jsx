import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const MainLayout = () => {
  return (
    <>
      <div className='h-16'>
        <Navbar />
      </div>
      <div className='min-h-[calc(100vh-117px)]'>
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  )
}

export default MainLayout