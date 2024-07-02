import React from 'react';
import { FaRegSmile } from "react-icons/fa";
import { CiAt } from "react-icons/ci";
import { GoPaperAirplane } from "react-icons/go";
const ChatFooter = () => {
    return (
       <>
       <div className='flex border-t-2 p-5 gap-5 items-center justify-center'>
       <FaRegSmile  size={"30px"}/>  
            <input type="text" placeholder='Start typing...' className='w-full'/>
            <CiAt size={"30px"} />
            <button>
                <GoPaperAirplane size={"30px"} /> 
            </button>
       </div>
       </>
    );
};

export default ChatFooter;
