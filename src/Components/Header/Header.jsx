import styles from './Header.module.scss'
import { MdNotifications, MdFullscreen, MdOutlineClose } from "react-icons/md";
import { FaList, FaMessage } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { IoIosHome } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import userPhoto from '../../Img/user.png'
import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(true)
  const [openMessagens, setOpenMessagens] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  function closeNavbar() {
    setOpenMenu(!openMenu)
  }

  function showMessages() {
    setOpenMessagens(!openMessagens)
  }

  function funcCloseSearch() {
    setOpenSearch(false)
  }

  function funcOpenSearch() {
    setOpenSearch(true)
  }

  function fullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.detailLeft}>
        <h1>Dashboard</h1>
        <input type="checkbox" name="openManu" id="openManu" />
        <label onClick={closeNavbar} htmlFor="openManu">
          <span></span>
        </label>
      </div>

      <div className={styles.detailMiddle}>
        <button onClick={funcCloseSearch}><MdOutlineClose size={25} /></button>
        <form>
          <input className={`${openSearch ? styles.openSearch : ''}`} type="search" name="search" id="search" />
        </form>
        <button onClick={funcOpenSearch}><FiSearch size={25} /></button>
        <button onClick={fullScreen}><MdFullscreen size={25} /></button>
      </div>

      <div className={styles.detailRight}>
        <button className={styles.numbers}>
          <span>4</span>
          <MdNotifications size={25} />
        </button>
        <button onClick={showMessages} className={styles.numbers}>
          <span className={styles.green}>3</span>
          <FaMessage size={20} />
        </button>

        <div className={styles.user}>
          <img src={userPhoto} alt="Foto do Usuário" />
          <span>Craudineias</span>
        </div>
      </div>

      <nav className={`${styles.navbar} ${!openMenu ? styles.close : ''}`}>
        <div>
          <h2>Navigation</h2>
          <ul>
            <li className={styles.backColor}>
              <p>
                <IoIosHome />
                Dashboard
              </p>
              <FaAngleRight />
            </li>
            <li>
              <p><BsLayoutSidebarInset />Page lauouts</p>
              <FaAngleRight />
            </li>
            <li>
              <p><FaList />Navigation</p>
              <FaAngleRight />
            </li>
            <li>
              <p><BsLayoutSidebarInset />Widget</p>
              <FaAngleRight />
            </li>
          </ul>
        </div>
        <div>
          <h2>XXXXXXXXX</h2>
          <ul>
            <li>
              <p><IoIosHome />Dashboard</p>
              <FaAngleRight />
            </li>
            <li>
              <p><BsLayoutSidebarInset />Page lauouts</p>
              <FaAngleRight />
            </li>
            <li>
              <p><FaList />Navigation</p>
              <FaAngleRight />
            </li>
            <li>
              <p><BsLayoutSidebarInset />Widget</p>
              <FaAngleRight />
            </li>
          </ul>
        </div>
        <div>
          <h2>YYYYYYYYYYY</h2>
          <ul>
            <li>
              <p><IoIosHome />Dashboard</p>
              <FaAngleRight />
            </li>
            <li>
              <p><BsLayoutSidebarInset />Page lauouts</p>
              <FaAngleRight />
            </li>
            <li>
              <p><FaList />Navigation</p>
              <FaAngleRight />
            </li>
            <li>
              <p><BsLayoutSidebarInset />Widget</p>
              <FaAngleRight />
            </li>
          </ul>
        </div>
        <div>
          <h2>WWWWWWWWWWWWW</h2>
          <ul>
            <li>
              <p><IoIosHome />Dashboard</p>
              <FaAngleRight />
            </li>
            <li>
              <p><BsLayoutSidebarInset />Page lauouts</p>
              <FaAngleRight />
            </li>
            <li>
              <p><FaList />Navigation</p>
              <FaAngleRight />
            </li>
            <li>
              <p><BsLayoutSidebarInset />Widget</p>
              <FaAngleRight />
            </li>
          </ul>
        </div>
      </nav>

      <section className={`${styles.messages} ${openMessagens ? styles.showMessage : ''}`}>
        <button className={styles.btnCloseMsg} onClick={showMessages}><MdOutlineClose size={25} /></button>
        <form>
          <input type="search" placeholder='Procurar Amigos...' name="search" id="search" />
          <button><FiSearch size={20} /></button>
        </form>

        <div className={styles.friends}>
          <div className={styles.friend}>
            <img src={userPhoto} alt="User" />
            <span>
              <p>Josefino</p>
            </span>
            <GoDotFill size={14} color='green' />
          </div>
          <div className={styles.friend}>
            <img src={userPhoto} alt="User" />
            <span>
              <p>Drungundum</p>
            </span>
            <GoDotFill size={14} color='green' />
          </div>
          <div className={styles.friend}>
            <img src={userPhoto} alt="User" />
            <span>
              <p>Quartioniudo</p>
            </span>
            <GoDotFill size={14} color='green' />
          </div>
          <div className={styles.friend}>
            <img src={userPhoto} alt="User" />
            <span>
              <p>Brulioliudo</p>
              <p className={styles.grayColor}>10 min atrás</p>
            </span>
            <GoDotFill size={14} color='gray' />
          </div>
          <div className={styles.friend}>
            <img src={userPhoto} alt="User" />
            <span>
              <p>Croliolinda</p>
              <p className={styles.grayColor}>34 min atrás</p>
            </span>
            <GoDotFill size={14} color='gray' />
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
