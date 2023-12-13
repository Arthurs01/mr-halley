import styles from "./header.module.css";
import Image from 'next/image'
import toro from '../../public/toro.png'


export default function Header() {
  return (
    <div>
      <header className={styles.header_content}>
        <div className={styles.header_text}>
          <h1>Mr. Halley</h1>
          <hr/>
          
          <p>Lo mejor de la música {"80's"}, Rock en ingles, español
             y éxitos de la decada!</p>
          <a className="btn btn-outline-primary bg-primary-subtle text-primary-emphasis">Saber más</a>
        </div>
        <div className={styles.toro_grande}>
        <Image src={toro} width={400} style={{opacity:'.9'}} alt="toro_mr_halley" ></Image>
        </div>

        <div className={styles.header_img}>
          <h2>Cotiza tu evento</h2><hr/>
          <p>
            Haz de tu evento todo un espectaculo y se parte de la
            experiencia con Mr halley
          </p>
          <button class="btn btn-outline-primary bg-primary-subtle text-primary-emphasis">Cotizar</button>
        </div>
      </header>
    </div>
  );
}
