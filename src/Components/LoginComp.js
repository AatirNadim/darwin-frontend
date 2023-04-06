import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { bstr } from '../Assets/postRes';

// please use "admin" as username and password

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
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const obj = {
    //   username,
    //   password
    // }
    // localStorage.setItem('user', JSON.stringify(obj));
    // alert('inside handleSubmit');
    const data_obj = { "uid": "satmis10000", "password": "Asdf1234#", "blocked": 0 }
    const data = JSON.stringify(data_obj)
    const str = btoa(data);
    // const req_obj = JSON.stringify({
    //   payload: btoa(data)
    // })
    // not working

    // fetch('https://myphysio.digitaldarwin.in/api/login_v1/', {
    //   method: 'POST',
    //   // mode : 'no-cors',
    //   body : JSON.stringify({
    //     payload : str
    //   }),
    //   headers : {
    //     'Content-Type' : 'application/json'
    //   }
    // }).then((res) => {
    //   res.json().then((obj) => {
    //     const response = obj.response;
    //     console.log(atob(response));
    //   })
    // }).catch(err => {
    //   console.log(err);
    // })
    // ------------------------------------------------------------------------------
    // try {
    // console.log(JSON.stringify({
    //   userName: username,
    //   password: password
    // }))
    fetch('http://localhost:5000/userLogin', {
      method: 'POST',
      body: JSON.stringify({
        userName: username,
        password: password,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      // console.log(res);
      if(res.status === 404) {
        alert('User not found');
        return;
      }
      res.json().then((obj) => {
        obj = {
          ...obj, 
          bstr : bstr,
        }
        localStorage.setItem('user', JSON.stringify(obj));
        // console.log('obj', obj);
        // console.log('user', obj.user.userName);
        // console.log('token', obj.token);
        navigate('/dashboard');
      }).catch(err => {
        console.log(err);
        alert(err);
      })
    }).catch(err => {
        console.log(err);
        alert(err);
      })
  }

  // const { user, token } = JSON.parse(res);
  // const res = await req.json();
  // console.log('res', res);

  // }
  return (
    <div
      style={{
        flex: 0.45,
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(to right, #090d2f, #5a7bea)'
      }}
    >
      <div
        style={{
          // backgroundColor: 'green',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70%',
          width: '70%',
          display: 'flex',
        }}
      >
        <form action='' onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'blue',
            height: '90%',
            width: '70%',
            // fontSize: '2.5rem',
            
          }}
        >
          <div
            style = {{
              // marginBottom : '2rem',
              textAlign : 'center',
              color : 'white',
              fontSize : '2.5rem',
              fontWeight: 'bold',
            }}
          >NCSSR</div>
          <div
              style = {{
                marginBottom : '1rem',
                textAlign : 'center',
                color : 'white',
                fontSize : '2rem',
                fontWeight: 'bold',
              }}
          >Welcome Back!!</div>
          <div
            style = {{
              // marginBottom : '1rem',
              textAlign : 'center',
              color : 'white',
              fontSize : '1rem',
              fontWeight: 'bold',
            }}
          >Forgot Password?</div>
          <div
            style = {{
              marginBottom : '1rem',
              textAlign : 'center',
              color : 'white',
              fontSize : '1rem'
            }}
          >Build Date : 24-03-2023 06:03</div>
          <input type='text' value={username}
            placeholder='Username..'
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(e.target.value);
            }}
            style={{
              width : '100%',
              height : '3.5rem',
              marginBottom : '2rem',
              paddingLeft : '8px',
            }}
          />
          <input
            type='password' value={password}
            placeholder='Password..'
            onChange={(e) => {
              setPassword(e.target.value);
              console.log(e.target.value);
            }}
            style={{
              width : '100%',
              height : '3.5rem',
              marginBottom : '2rem',
              paddingLeft : '8px',
              // backgroundColor : 'yellow'
            }}
          />
          <button type='submit'
            style = {{
              height: '4rem',
              width: '10rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '1rem',
            }}
          >Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginComp;