import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import ScrollToBootom  from 'react-scroll-to-bottom';

const BACKEND_URL = 'http://localhost:3333';
let socket;
const userId = localStorage.userId;


const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = BACKEND_URL;
    

    useEffect(() => {
        
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room});

        return () => {
            socket.emit('disconnect');

            socket.off();
        };
    }, [ENDPOINT, location.search]);

    useEffect (() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        }, [messages])
    });

    async function sendMessage(event) {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', {message, userId}, () => setMessage(''));
        }

        setMessage('');
    };

    return (
        <div className="outContainer">
            <h1>{room}</h1>
            <br />
            <div className="DialogBox">
                <ScrollToBootom>
                    {messages.map((message, i) => {
                        return <div key={i}>
                                    <strong>{message.user}: </strong>{message.text} 
                                </div>
                    })}
                </ScrollToBootom>
            </div>
            <br />
            <hr/>
            <div className="container">
            <h3>{name}: </h3>
            <input 
                value={message} 
                onChange={(event) => setMessage(event.target.value)} 
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                placeholder="Type your message here and press Enter to send"    
                size="40"
                />
            </div>
        </div>
    );

}

export default Chat;