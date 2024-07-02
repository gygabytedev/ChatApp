import ChatFooter from "@/Components/ChatFooter";
import HeaderChat from "@/Components/HeaderChat";
import MainChat from "@/Components/MainChat";
import '../app/globals.css'; 

export default function Home() {
  return (
    <div className='flex justify-between h-[100vh] flex-col'>

      <HeaderChat />

     <div className='w-full h-[90%] overflow-y-auto'>
     <MainChat />
     </div>

      <ChatFooter />
    
    </div>
  );
}
