import React from 'react'

import styles from './header.module.css'

const Header = () => {
  return (
    <div  
    className = {styles.main_div}
    >
      <h1
      className = {styles.h1}
      >
        <span
        style={{
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          // flexDirection: 'row',
        }}
        >Dashboard</span>
      </h1>
    </div>
  )
}

export default Header