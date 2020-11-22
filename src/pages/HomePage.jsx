import React from 'react'
import Default from '../layouts/Default'
import {Link} from 'react-router-dom'

import './HomePage.scss'

const HomePage = () => {
    const buttons =[
      
        {route:'/Login',text:'Login'},
        {route:'/Signup',text:'Signup'}
    ]

    return (
        <Default>
            <div className="wrapper flex flex-col w-64 h-64 mx-auto mt-32 text-center text-white">
                <p className="heading select-none font-extrabold text-center text-5xl mb-5">Welcome to Anonymously</p>
                <div>
                {
                    buttons.map(({route,text},routeIndex) => <Link to={route} className={`options font-bold  shadow px-5 py-3 rounded ${routeIndex===1? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-500 hover:'} `} key={`Home-page-route${routeIndex}`}>
                        {text}
                    </Link>
                    )
                } 
                </div>   
            </div>
        </Default>
    )
}

export default HomePage
