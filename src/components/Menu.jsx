import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoRocket } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { SiConvertio } from "react-icons/si";
import { LuPickaxe } from "react-icons/lu";
import { NavLink } from 'react-router'

const Menu = () => {
  return (
    <div className="mp-bottom mp-box-shadow">
      <ul>
        <li><NavLink to="/"><TiHome color='lightgreen' /></NavLink></li>
        <li><NavLink to="/"><LuPickaxe color='lightblue' /></NavLink></li>
        <li><NavLink to="/boost"><IoRocket color='darkorange' /></NavLink></li>
        <li><NavLink to="/"><RiTeamFill color='brown' /></NavLink></li>
        <li><NavLink to="/"><SiConvertio color='pink' /></NavLink></li>
      </ul>
    </div>
  )
}

export default Menu