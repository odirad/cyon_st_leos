import React from 'react'
import style from './logo.module.css'

const Logo = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <span className={style.name}>CYON ST. LEO</span> 
        <span className={style.church}>CHURCH</span>
      </div>
    </div>
  )
}

export default Logo