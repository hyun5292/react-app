import React, { useState, useRef, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value
      });
    }, []
  );
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    //setUsers([...users, user]);  //spread 방법
    setUsers(users.concat(user));  //concat 방법

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
    }, [username, email]);

  const onRemove = useCallback(
    (id) => {
      //일부러 아닌것들만 골라서 새로 배열을 만든거야
      setUsers(users.filter(user => user.id !== id));
    }, []
  );
  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map(user => 
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    }, []
  ); 
  //const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList 
        users={users}
        onRemove={onRemove} 
        onToggle={onToggle}
      />
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
