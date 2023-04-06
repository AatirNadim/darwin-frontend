import React from 'react'
import LoginComp from '../Components/LoginComp'
import loginAsset from '../Assets/loginAsset.png'

// please use "admin" as username and password
const LoginPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
      }}
    >
      <img
        style={{
          flex: 0.65,
          width: '65vw',
        }}
        src={loginAsset} alt='loginAsset' />
      <LoginComp />
    </div>
  )
}

export default LoginPage