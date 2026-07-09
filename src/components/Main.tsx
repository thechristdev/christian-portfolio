import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.ibb.co.com/CK0N8BwP/profile.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/thechristdev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/christian-emanuel-wijaya-759a63307/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Christian Emanuel Wijaya</h1>
          <p>- Fresh Graduate -</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/thechristdev" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/christian-emanuel-wijaya-759a63307/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;