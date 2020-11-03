import React from 'react'
import Default from '../layouts/Default'

import './Login.scss'
const Login = () => {
    return (
        <Default>
            <form  className="max-w-md bg-white text-indigo-900  h-auto rounded shadow-lg p-5 mx-auto mt-32 ">
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input className="bg-indigo-200" type="email" name="email" id="email"/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input className="bg-indigo-200" type="password" name="password" id="password"/>
                </div>

                <button className="outline-none mx-auto block mt-5 bg-indigo-200 px-3 py-2 rounded text-indigo-900 font-bold">Login</button>
            </form>
        </Default>
    )
}

export default Login
