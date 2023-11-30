import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
     <a href="https://www.linkedin.com/in/george-kamakia" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/0724654276" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://github.com/engkamakia" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials