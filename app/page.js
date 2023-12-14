import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const blog = [
    {
      id: 1,
      image: 'imgs/events.png',     
      title: "Próximos eventos",
      body: "Enterate de los próximos eventos al instante!",
      body_content:"Múasdfaasdfasdfasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance"
    },
    {
      id: 2,
      image: "imgs/videos.png",
      title: "Videos",
      body: "Música versátil a tu alcance",
      body_content:"Múasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance"
    },

    {
      id: 3,
      image: "imgs/historia.png",
      title: "Historia",
      body: "La banda versatil comienza en los años 50's al...",
      body_content:"Múasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance"
    },
  ];
  return (
    <main>
      <div className={styles.social}>
      {/* <a href="https://wa.me/526624515925?text=Contactar%20con%20un%20asesor" class="btn btn-outline-success mt-4"><i class='bx bxl-whatsapp bx-md'></i></a> */}
      <a href="https://wa.me/526622284871?text=Contactar%20con%20un%20asesor"target="blank" class="btn btn-outline-success mt-4"><i class='bx bxl-whatsapp bx-md'></i></a>
      <a href="https://www.facebook.com/profile.php?id=100065193623135" target="blank" class="btn btn-outline-primary mt-4"><i class='bx bxl-facebook-square bx-md'></i></a>
     
       
      </div>
      <div id="main_section" className={styles.main_section}>
        {blog.map((article) => (
          <article key={article.id} className={styles.article}>
            <a href="/" className={styles.td_flex}>
              <Image src={`/${article.image}`}
              width={400} 
                height={185}        
                priority={true}        
                alt="blog_mr_halley"
                layout="responsive"                
              />
              <h2>{article.title}</h2><hr/>
              <p>{article.body}</p>
            </a>
          </article>
        ))}


      </div>
      
      
    </main>
  );
}
