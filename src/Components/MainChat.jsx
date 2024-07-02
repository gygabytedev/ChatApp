import { IoCheckmarkDone } from "react-icons/io5";
import ChatFooter from "./ChatFooter";
import Image from "next/image";

export const users = [
  {
    id: 1,
    name: "Jav",
    role: "Engineering",
    avatar: '/images/avatar1.png',
    text: "I'm down! Any ideas??",
    timestamp: "11:35 AM",
    mine: false,
  },
  {
    id: 2,
    name: "You",
    role: "Engineering",
    avatar: '/images/avatar4.png',
    text: "I am down for whatever!",
    timestamp: "11:36 AM",
    mine: true,
  },
  {
    id: 3,
    name: "Aubrey",
    role: "Product",
    avatar:'/images/avatar2.png',
    text: "I was thinking the cafe downtown",
    timestamp: "11:45 AM",
    mine: false,
  },
  {
    id: 4,
    name: "Aubrey",
    role: "Product",
    avatar: '/images/avatar3.png',
    text: "But limited vegan options @Janet!",
    timestamp: "11:46 AM",
    mine: false,
  },
  {
    id: 5,
    name: "You",
    role: "Engineering",
    text: "Agreed",
    timestamp: "11:52 PM",
    mine: true,
  },
];
const dataChat = "8/20/2020"
const MainChat = () => {
  return (
    <div className='p-10 m-auto'>
        <h3 className='text-center mb-10'>{dataChat}</h3>
      <ul className='flex flex-col gap-7 mb-52'>
        {users.length > 0 &&
          users.map((items, index) => {
            return (
              <li
                key={items.id}
                className={
                  items.mine
                    ? 'flex items-end justify-end'
                    : 'flex items-start justify-start gap-5'
                }
              >
                {!items.mine ? <div><Image width={40} height={40} src={items.avatar} alt={items.name}/></div> : <></>}
                <div
                  className={
                    items.mine
                      ? 'p-3 bg-[#007AFF] w-80 rounded-xl text-white relative'
                      : 'p-3 bg-[#F2F2F7] w-80 rounded-xl relative'
                  }
                >
                  {items.mine ? (
                    <>
                    <div> 
                        <p>{items.text}</p>
                        <div className='flex justify-end items-center gap-2'>
                            <p>{items.timestamp}</p>
                            <IoCheckmarkDone size={'25px'}/>
                        </div>
                    </div>
                    <div className='w-5 h-3 bg-[#007AFF] absolute top-0 right-[-10px] rounded-b-[50%] '/>
                    </>
                  ) : (
                    <>
                    <div className='flex gap-2 w-full'>
                      
                      <div className='w-full'>
                        <div className='flex gap-5 mb-1'>
                          <h2 className='font-bold'>{items.name}</h2> <p className='text-[#666668]'>{items.role}</p>
                        </div>
                        <p>{items.text}</p>
                        <div className='flex justify-end'>{items.timestamp}</div>
                      </div>
                     
                    </div>
                    <div className='w-5 h-3 bg-[#F2F2F7] absolute top-0 left-[-10px] rounded-b-[50%] '/>
                    </>
                  )}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MainChat;
