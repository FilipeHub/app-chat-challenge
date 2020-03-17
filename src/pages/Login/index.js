import React, { useState } from 'react';

import history from '../../services/history';
import api from '../../services/api';

import { Container } from './styles';

const ROOM_NAME = 'Chat Room'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const res = await api.post('/login',{ email, password });

    const user = res.data.user;

    localStorage.setItem('userId', user._id);

    const name = res.data.user.name;
    
    history.push(`/chat?name=${name}&room=${ROOM_NAME}`);

    // history.push('/join');
  };

  return (
    <Container onSubmit={handleSubmit}>
        <label>E-mail</label>
        <input
            type="text"
            placeholder="Your best e-mail here"
            onChange={event => setEmail(event.target.value)}
        />

        <label>Password</label>
        <input
            type="password"
            placeholder="Type your password"
            onChange={event => setPassword(event.target.value)}
        />

        <button type="submit" >Send</button>
    </Container>
  );
}
