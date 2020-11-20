import React from 'react'
import Default from '../layouts/Default'

import './Signup.scss'
const Signup = () => {

    const formGroup=[
        {label:'Name',type:'text'},
        {label:'Username',type:'text'},
        {label:'Email',type:'email'},
        {label:'Password',type:'password'}
    ]

    return (
        <Default>
            <form  onSubmit={(ev) => ev.preventDefault()} className="max-w-md bg-white text-indigo-900  h-auto rounded shadow-lg p-5 mx-auto mt-16 ">
               
                {
                    formGroup.map(({label,type},formIndex) =>
                        <div className="form-group mb-3" key={`form-group${formIndex}`}>
                            <label htmlFor={label}>{label}</label>
                            <input className="bg-indigo-200" type={type} name={label} id={label}/>
                        </div>
                    )
                
                }

                <button className="outline-none mx-auto block mt-5 bg-indigo-200 px-3 py-2 rounded text-indigo-900 font-bold">Signup</button>
            </form>
        </Default>
    )
}

export default Signup
