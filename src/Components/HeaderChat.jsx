import React from 'react';
import UsersAvatar from './UsersAvatar';
import ChatInfo from './ChatInfo';
import ExtraInfo from './ExtraInfo';

const HeaderChat = () => {
    return (
        <div className='flex p-10 border-b-slate-300 items-center border-b-[1px] border-slate-100 justify-center w-full bg-white z-50 relative'>
            <UsersAvatar/>
            <ChatInfo/>
            <ExtraInfo/>
        </div>
    );
};

export default HeaderChat;
