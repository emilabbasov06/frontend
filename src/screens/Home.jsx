import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoRocket } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { SiConvertio } from "react-icons/si";
import { LuPickaxe } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="mp-container">

      <div className="mp-top mp-box-shadow">
        <div>
          <FaUserAlt />
        </div>

        <div>
          <h2>Emil Abbasov</h2>
          <span className='user-id'>User ID: #3094289409834</span>
        </div>
      </div>

      <div className="mp-center mp-box-shadow">
      </div>


      <div className="mp-bottom mp-box-shadow">
        <ul>
          <li><a href=""><TiHome color='lightgreen' /></a></li>
          <li><a href=""><LuPickaxe color='lightblue' /></a></li>
          <li><a href=""><IoRocket color='darkorange' /></a></li>
          <li><a href=""><RiTeamFill color='brown' /></a></li>
          <li><a href=""><SiConvertio color='pink' /></a></li>
        </ul>
      </div>

    </div>
  )
}

export default Home