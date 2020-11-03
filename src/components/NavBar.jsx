import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './NavBar.scss'

const NavBar = () => {
    const Tabs =[
      
        {route:'/Login',text:'Login'},
        {route:'/Signup',text:'Signup'}
    ]

    const [activeTab, setActiveTab] = useState('')

    return (
        <nav className="NavBar flex h-12 px-2 font-bold items-center bg-indigo-400 text-white">
            <Link className="brand-logo font-extrabold text-xl" to='/'>Anonymously</Link>
            <spacer className="flex-grow" />
            {
                Tabs.map(({route,text},routeIndex) => <Link onClick={() => setActiveTab(text)} to={route} className={`tab mr-5 hover:text-indigo-700 ${activeTab===text? 'selected' : ""}`} key={`navbar-route${routeIndex}`}>
                    {text}
                </Link>
                )
            }    
        </nav>
    )
}

export default NavBar
