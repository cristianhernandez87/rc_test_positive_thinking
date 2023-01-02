import { Outlet } from 'react-router-dom'
import Logo from '../assets/img/Butterfly.svg'

function Layout() {
  return (
    <div className="bg-teal-600 min-h-screen flex">
        <div className="w-16 bg-teal-800 p-2 min-h-screen">
            <span className="block p-2 bg-teal-300 rounded">
                <img src={Logo} alt="logo" className="img w-full" />
            </span>
        </div>
        <Outlet />
    </div>
  )
}

export default Layout