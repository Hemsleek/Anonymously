import React from 'react'
import Default from '../layouts/Default'

import './Messages.scss'

const Messages = ({match}) => {
 
    return( 
        <Default>
            <span className="caption block mx-auto text-center text-lg mt-24 text-indigo-900 mb-2 pl-1"> 
                Leave a message for {match.params.username}
             </span>
            <form  onSubmit={(ev) => ev.preventDefault()} className="max-w-md bg-white text-indigo-900  h-auto rounded shadow-lg p-5 mx-auto ">
                <div className="form-group mb-3">
                   
                    <textarea className="outline-none resize-none bg-gray-300 p-2" name="message" id="" cols="30" rows="10" maxlength='150' minlength='2' placeholder="Type your message here..."></textarea>
                </div>

                <button className="focus:outline-none mx-auto block mt-5 bg-indigo-200 px-3 py-2 rounded text-indigo-900 font-bold">SEND</button>
            </form>
        </Default>
    )  
}

export default Messages