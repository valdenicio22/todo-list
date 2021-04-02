import { useState } from 'react';

import { Header } from './components/Header';
import { TodoList } from './components/TodoList';

import { Global } from './styles/Global'


export function App() {

  const [isMoon, setIsMoon] = useState(false)

  function switchType(value: boolean){
    setIsMoon(value)
  }

  return (
    <>
      <Global />
      <Header isMoon={isMoon}/>
      <TodoList isMoon={isMoon} setIsMoon={switchType}/>
    </>
  );
}
