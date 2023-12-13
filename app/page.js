import Image from "next/image";
import styles from "./page.module.css";
import sectionImg from "../public/micro.jpg";
import whatsapp from "../public/whatsapp.png";
import facebook from "../public/face.png";

export default function Home() {
  const blog = [
    {
      id: 1,
      title: "Próximos eventos",
      body: "Enterate de los próximos eventos al instante!",
      body_content:
        "Múasdfaasdfasdfasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance",
      image: "../events.jpg",
    },
    {
      id: 2,
      title: "Videos",
      body: "Música versátil a tu alcance",
      body_content:
        "Múasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance",
      image: "../videos.jpg",
    },

    {
      id: 3,
      title: "Historia",
      body: "La banda versatil comienza en los años 50's al...",
      body_content:
        "Múasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance",
      image: "../historia.jpg",
    },
  ];
  return (
    <main>
      <div className={styles.social}>
        <a class="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
          Whatsapp
        </a>
        
        <a class="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
          Facebook
        </a>
       {/*  <a>
        <Image
          className=""
          src={whatsapp}
          alt="whatsapp_mr_halley"
          style={{ width: "30px", height: "auto" }}
        />
        </a> */}

      {/*   <a>
          <Image
            src={facebook}
            alt="facebook_mr_halley"
            style={{ width: "30px", height: "auto" }}
          />
        </a> */}
      </div>
      <div className={styles.main_section}>
        {blog.map((article) => (
          <article key={article.id} className={styles.article}>
            <a className={styles.td_flex}>
              <Image
                src={`/public/${article.image}`}
                width={300}
                height={185}
                alt="blog_mr_halley"
              />
              <h2>{article.title}</h2><hr/>
              <p>{article.body}</p>
            </a>
          </article>
        ))}

{/*         <section className={styles.section_img}>
          <Image src={sectionImg} width={500} height={700} alt="microphone" />
        </section> */}
      </div>
      
      
    </main>
  );
}
