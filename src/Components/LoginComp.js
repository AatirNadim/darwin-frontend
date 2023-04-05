import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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

  const handleSubmit = async () => {
    // const obj = {
    //   username,
    //   password
    // }
    // localStorage.setItem('user', JSON.stringify(obj));
    alert('inside handleSubmit');
    const data_obj = { "uid": "satmis10000", "password": "Asdf1234#", "blocked": 0 }
    const data = JSON.stringify(data_obj)
    const str = btoa(data);
    const req_obj = JSON.stringify({
      payload: btoa(data)
    })

    try {
      const res = await axios.post('https://myphysio.digitaldarwin.in/api/login_v1', {
        payload: str,
      })
      alert('res', res);
    } catch (err) {
      alert('error from the post api', err)
    }

    // if (obj) {
    //   console.log('user', obj);
    //   setLoggedIn(true);
    //   navigate('/dashboard');
    // }
    // else {
    //   alert('user not added')
    // }
    // setUsername('');
    // setPassword('');
  }


  // }
  return (
    <div
      style={{
        flex: 0.45,
        // backgroundColor: 'red',
      }}
    >
      <form action='' onSubmit={handleSubmit}>
        <input type='text' value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(e.target.value);
          }}
        />
        <input
          type='password' value={password}
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