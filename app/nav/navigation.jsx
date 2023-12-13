import styles from './navigation.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'



export default function Navigation(){
    return(
      <div>
      <nav className={styles.navigation}>
        <div className={styles.torox}>
          
          </div>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <Image  className={styles.logo}src={logo} width={200} alt='logo_mr_malley'></Image>
          <li><a href="#blog">blog</a></li>
          <li><a href="#blog">Contact</a></li>
        </nav>
        </div>
    )
}