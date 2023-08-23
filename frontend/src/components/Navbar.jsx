
import './Navbar.css'

import mediumLogo from "../assets/images/medium-logo.png";
import write from "../assets/images/write-24.png"
import bell from "../assets/images/notification-bell.png"
import userPhoto from "../assets/images/icon-A.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="leftNav">
        <div className="logo">
          <img src={mediumLogo} alt="Logo"/>
        </div>

        <div className="searchForm">
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          </span>         
          <input type="text" placeholder="Search Medium" />
        </div>

      </div>

      <div className="rightNav">
        <div className="write">
          <div>
            <img src={write} alt="" />
          </div>
          <p>
            Write
          </p>
        </div>
        <div className="notifications">
          <img src={bell} alt="Notifications" />
        </div>
        <div className="userNav">
          <img src={userPhoto} alt="Profile" />
          <span class="material-symbols-outlined">expand_more</span>
        </div>
      </div>

      
    </nav>
  );
}

export default Navbar;