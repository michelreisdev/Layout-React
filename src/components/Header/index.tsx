import React from 'react'
import { Link } from 'react-router-dom'
import { PATH } from '../../constants/paths'
interface MenuItem {
  id: number
  title: string
  link: string
}

const menuItems: MenuItem[] = [
  { id: 1, title: 'Home', link: PATH.HOME },
  { id: 2, title: 'Sobre', link: PATH.SOBRE },
  { id: 3, title: 'Contato', link: PATH.CONTATO },
  { id: 3, title: 'Login', link: PATH.LOGIN }
]

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-slate-700 overflow-auto col-span-full ">
      <div className="ml-3 bg-orange-500 h-max mt-6 mb-6">LOGO</div>
      <div className="mt-6 mb-6"></div>
      <div className="text-zinc-200 mt-6 mb-6 col-span-6">
        <ul className="flex">
        {menuItems.map((item) => (
        <li key={item.id} className="mr-6">
            <Link className=" text-neutral-200 hover:text-neutral-50 " to={item.link}>{item.title}</Link>
          </li>
        ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
