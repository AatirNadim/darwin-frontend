import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginComp = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log('useEffect');
    const obj = localStorage.getItem('user');
    if (obj) {
      setLoggedIn(true);
      console.log('obj exists');
      navigate('/dashboard');
    }
    // if(loggedIn) {
    //   console.log('loggedIn');
    //   navigate('/dashboard');
    // }
  }, [])

  const handleSubmit = () => {
    const obj = {
      username,
      password
    }
    localStorage.setItem('user', JSON.stringify(obj));
    

    if(obj) {
      console.log('user', obj);
      setLoggedIn(true);
      navigate('/dashboard');
    }
    else {
      alert('user not added')
    }
    setUsername('');
    setPassword('');
  }


  return (
    <div
      style={{
        flex: 0.45,
        // backgroundColor: 'red',
      }}
    >
      <form action='' onSubmit={handleSubmit}>
          <input type='text' value = {username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(e.target.value);
            }}
          />
          <input  
            type='password' value = {password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginComp;