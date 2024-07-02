import React from 'react';
import { users } from './MainChat';
import Image from 'next/image';

const UsersAvatar = () => {
    return (
        <ul className='flex gap-[-20px] absolute left-10'>
            {users.length > 0 && users.map((items) => { 
                return( 
                    <li key={items.id} >
                        {items.avatar && <Image width={40} height={40} src={items.avatar} alt={items.name}/> }
                    </li>
                )
            })}
        </ul>
    );
};

export default UsersAvatar;
