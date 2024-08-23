import React from 'react'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

const Navbar = () => {

  const navigate = useNavigate()

  const returnHome = () => {
    navigate('/')
  }

  const seeProfile = () => {
    navigate('/myprofile')
  }

  const getUsername = () => {
    if(localStorage.getItem('sudokuUser')) {
      let token = JSON.parse(localStorage.getItem('sudokuUser')).token
      return jwtDecode(token).username
    }
    return undefined
  }

  return (  
    <nav>
      <div className="nav-container">
        <button className="nav-logo" onClick={returnHome} style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer' }}>
        <img src="https://static.wixstatic.com/media/14322a_5e5a7fdd4d584d5083e00449c25cb990~mv2.png/v1/fill/w_168,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/herogram_mark_1080.png" alt="user" id="userLogo" onClick={seeProfile}></img>
        </button>
        <div style={{display: 'flex'}}>
          {
            localStorage.getItem('sudokuUser') ? (
              <img src={require("./userIcon.png")} alt="user" id="userLogo" onClick={seeProfile}></img>
            ) : (
              <></>
            )
          }
          <img src={require("./home.png")} alt="home" id="homeLogo" onClick={returnHome}></img>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
