import React from 'react';
import {AiOutlineHome,AiOutlineUser,AiOutlineProject, AiOutlinePhone} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import "./nav.css"
import {useState} from 'react'
function Nav() {
    const[activeBtn, setActiveBtn] = useState('#');
  return (
    <nav>
        <a href='#' onClick={()=>setActiveBtn('#')} className={activeBtn==='#'?'active':''}><AiOutlineHome/></a>
        <a href='#about' onClick={()=>setActiveBtn('#about')} className={activeBtn==='#about'?'active':''}><AiOutlineUser/></a>
        <a href='#experience' onClick={()=>setActiveBtn('#experience')} className={activeBtn==='#experience'?'active':''}><BiBook/></a>
        <a href='#projects' onClick={()=>setActiveBtn('#projects')} className={activeBtn==='#projects'?'active':''}><AiOutlineProject/></a>
        <a href='#contact' onClick={()=>setActiveBtn('#contact')} className={activeBtn==='#contact'?'active':''}><AiOutlinePhone/></a>
    </nav>
  )
}

export default Nav