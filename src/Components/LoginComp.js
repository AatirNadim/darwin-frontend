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
    const req_obj = JSON.stringify({
      payload: btoa(data)
    })
    // not working

    // const pro = fetch('https://myphysio.digitaldarwin.in/api/login_v1/', {
    //   mode : 'no-cors',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // "access-control-allow-origin" : "*",
    //   },
    //   body: req_obj
    // })
    //   pro.then(res => res.json()).then(data => {
    //   console.log('data', data);
    // }).catch(err => {
    //   console.log('err', err);
    // })

    // axios.post('https://myphysio.digitaldarwin.in/api/login_v1/', {
    //   payload: str
    // },
    //   {
    //     headers : {"Access-Control-Allow-Origin": "*"}
    //   }
    // ).then(res => {
    //   console.log('res', res);
    // }).catch(err => {
    //   console.log('err', err);
    // })
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
    // ------------------------------------------------------------------------------
    // try {
    console.log(JSON.stringify({
      userName: username,
      password: password
    }))
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
      res.json().then((obj) => {
        localStorage.setItem('user', obj);
        console.log('obj', obj);
        console.log('user', obj.user.userName);
        console.log('token', obj.token);
        navigate('/dashboard');
      });
    })
      .catch(err => {
        console.log(err);
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