import React from 'react'
import Default from '../layouts/Default'

import './Messages.scss'

const Messages = ({match}) => {
 console.log(match)
    return( 
        <Default>
            <span className="text-center text-lg block mt-32 text-white"> Leave a message for {match.params.username} </span>
            <form  onSubmit={(ev) => ev.preventDefault()} className="max-w-md bg-white text-indigo-900  h-auto rounded shadow-lg p-5 mx-auto ">
                <div className="form-group mb-3">
                   
                    <textarea className="outline-none bg-gray-200 p-2" name="message" id="" cols="30" rows="10"></textarea>
                </div>

                <button className="outline-none mx-auto block mt-5 bg-indigo-200 px-3 py-2 rounded text-indigo-900 font-bold">SEND</button>
            </form>
        </Default>
    )  
}

export default Messages