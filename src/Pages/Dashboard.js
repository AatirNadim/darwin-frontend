import React from 'react'
import Header from '../Components/HeaderComp'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'red',
          
        }}
      >
        {/* this is for the display of the response body */}
        <div>

        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <button
            style={{
              height: '6rem',
              width: '11rem',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              backgroundColor: '#6e64c5',
              color: 'antiquewhite',
              border : 'none',
              borderRadius: '1rem',
              // borderColor : '#7550a9'
            }}
            onClick = {handleLogout}
          >Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard