import React, {useState} from 'react'
import Default from '../layouts/Default'

import './Messages.scss'

const MessageIndicator = ({textCount}) => (
    <span 
        className={`bg-white-800 text-sm font-bold border-2 ${(textCount>250 && textCount<350) ? 'border-yellow-600 text-yellow-500':textCount>=350 ? 'border-red-700 text-red-600' : 'border-green-600 text-indigo-400'} flex items-center justify-center self-end mr-2 my-2 rounded-full w-8 h-8`}>
            {textCount}
    </span>
)

const Messages = ({match}) => {
    const [textCount, setTextCount] = useState(0)
    return( 
        <Default>
            <span className="caption block mx-auto text-center text-lg mt-20 text-indigo-900 mb-2 pl-1"> 
                Leave a message for {match.params.username}
             </span>
            <form  onSubmit={(ev) => ev.preventDefault()} className="max-w-md bg-white text-indigo-900  h-auto rounded shadow-lg p-5 mx-auto ">
                <div className="form-group mb-3 flex flex-col rounded-sm bg-gray-300 ">
                   
                    <textarea onChange={(e) => setTextCount((e.target.value).length)} className="flex-grow bg-gray-300 outline-none text-md resize-none p-2" name="message" cols="30" rows="10" maxLength='400' minLength='2' placeholder="Type your message here..."></textarea>
                    <MessageIndicator textCount={textCount} />
                </div>

                <button className="focus:outline-none mx-auto block mt-5 bg-indigo-200 px-3 py-2 rounded text-indigo-900 font-bold">SEND</button>
            </form>
        </Default>
    )  
}

export default Messages