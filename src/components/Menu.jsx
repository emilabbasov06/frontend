import React from 'react'
import { TiHome } from "react-icons/ti";
import { IoRocket } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { SiConvertio } from "react-icons/si";
import { LuPickaxe } from "react-icons/lu";

const Menu = () => {
  return (
    <div className="mp-bottom mp-box-shadow">
      <ul>
        <li><a href="/"><TiHome color='lightgreen' /></a></li>
        <li><a href="/"><LuPickaxe color='lightblue' /></a></li>
        <li><a href="/boost"><IoRocket color='darkorange' /></a></li>
        <li><a href="/"><RiTeamFill color='brown' /></a></li>
        <li><a href="/"><SiConvertio color='pink' /></a></li>
      </ul>
    </div>
  )
}

export default Menu