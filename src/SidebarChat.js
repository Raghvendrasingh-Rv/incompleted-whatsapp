import React from 'react'
import './SidebarChat.css'
import {Avatar} from '@material-ui/core'
import { useEffect, useState } from 'react'

function SidebarChat( addNewChat) {
    const [seed , setSeed] = useState("")

    useEffect(()=>{
       setSeed(Math.floor(Math.random()* 5000))
    },[])

    const createChat = ()=>{}
    
    return !addNewChat?(
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>room</h2>
                <p>Last msg</p>
            </div>
        </div>
    ):(
       <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
       </div> 
    )
}

export default SidebarChat
