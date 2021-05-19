import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, Icon, IconButton} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">

            
            <div className="sidebar__header">

                <Avatar src="https://www.dhresource.com/0x0/f2/albu/g7/M01/50/10/rBVaSVt1hFKAWGGHAAEEO3FZ4xw944.jpg/classic-2-pieces-black-men-wedding-suits.jpg"/>
                    


                <div className="sidebar__headerRight">

                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>


                    <IconButton>
                        <ChatIcon/>
                    </IconButton>


                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>






                </div>
            </div>

            <div className="sidebar__search">

                <div  className="sidebar__searchContainer" >

                    <SearchOutlined />

                    <input placeholder="Search or start new chat" type="text" />

                    </div>
            </div>


            <div className="sidebar__chats">

                <SidebarChat />
                <SidebarChat />
                <SidebarChat />



            </div>
        </div>
    )
}

export default Sidebar
