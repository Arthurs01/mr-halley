import styles from "./navigation.module.css";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Navigation() {
  return (
    <div className={styles.nav_flex}>
      <div className={styles.torox}>
        {/* <li><a href="#" class="mt-2"><i class="bx bx-user bx-md"></i></a></li> */}
      </div>
      <nav className={styles.navigation}>
        <li><a href="#">Home</a></li>
        <li><a href="#main_section">Events</a></li>
        <a href="/"><Image className={styles.logo} src={logo} width={200} alt="logo_mr_malley"></Image></a>
        <li><a href="#main_section">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
       
      </nav>
      <div className={styles.login}>
         <li><a href="#" class="">Login&nbsp;<i class="bx bx-user bx-sm"></i></a></li>
         <li><a href="https://wa.me/526622284871?text=Contactar%20con%20un%20asesor"target="blank" class=""><i class="bx bx-phone bx-sm"></i></a></li>
      </div>
    </div>
  );
}
