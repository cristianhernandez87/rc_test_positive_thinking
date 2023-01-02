import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/img/Butterfly.svg'
import result from '../assets/img/Result.svg'

function Layout() {
  return (
    <div className="bg-teal-600 h-screen flex">
        <div className="w-16 bg-teal-800 p-2 min-h-screen flex flex-wrap content-between">
            <Link 
              to="/" 
              className="p-2 bg-teal-300 rounded w-100 m-0">
                <img src={logo} alt="logo" className="img w-12" />
            </Link>
            <Link
              to="/answers" 
              className="p-2 bg-teal-300 rounded w-100 m-0">
                <img src={result} alt="result" className="img w-12" />
            </Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Layout