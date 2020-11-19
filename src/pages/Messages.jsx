import React from 'react'
import Default from '../layouts/Default'

import './Messages.scss'

const Messages = () => {

    return( 
        <Default>
            <form  className="max-w-md bg-white text-indigo-900  h-auto rounded shadow-lg p-5 mx-auto mt-32 ">
                <div className="form-group mb-3">
                    <textarea className="outline-none bg-gray-200 p-2" name="message" id="" cols="30" rows="10"></textarea>
                </div>

                <button className="outline-none mx-auto block mt-5 bg-indigo-200 px-3 py-2 rounded text-indigo-900 font-bold">Submit</button>
            </form>
        </Default>
    )  
}

export default Messages