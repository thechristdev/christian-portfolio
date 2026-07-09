import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/thechristdev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/christian-emanuel-wijaya-759a63307/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Christian Emanuel Wijaya </p>
    </footer>
  );
}

export default Footer;