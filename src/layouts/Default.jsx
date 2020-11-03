import React from 'react'

import NavBar from '../components/NavBar'

const Default=({children}) => {
    return (
        <>
           <NavBar />
           {children} 
        </>
    )
}

export default Default
