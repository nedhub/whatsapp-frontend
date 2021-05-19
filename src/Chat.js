import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined, SettingsInputAntenna } from "@material-ui/icons";
import React from 'react';
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">

                <Avatar />

                <div className="chat__headerInfo">

                    <h3> Group Chat</h3>
                    <p>Last seen at...</p>
                </div>


                <div className="chat__headerRight">

                    <IconButton>
                        <SearchOutlined/>
                        </IconButton>
                        <IconButton>
                            <AttachFile />
                        </IconButton>
                    <IconButton>
                    <MoreVert />
                    </IconButton>



                </div>
            </div>


            <div className="chat__body" >

                <p className="chat__message">
                    <span className="chat__name">Chinedu </span>
                    whats good?
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">Person #1 </span>
                    Testing 1
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    Testing 2
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

            </div>

            <div className="chat__footer">

                <InsertEmoticonIcon />

                <form>
                    <input 
                    
                    placeholder="Type a message"
                    type="text"
                    />

                    <button 
                    type="submit">
                        Send a message
                    </button>


                </form>

                <MicIcon />



            </div>
            
        </div>
    )
}

export default Chat
