import Image from "next/image";
import styles from "./page.module.css";
import asdf from '../'




export default function Home() {
  const blog = [
    {
      id: 1,
      image: '../../imgs/events.png',
      title: "Próximos eventos",
      body: "Enterate de los próximos eventos al instante!",
      body_content:"Múasdfaasdfasdfasdfasdfsdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance"
    },
    {
      id: 2,
      image: "../public/imgs/videos.png",
      title: "Videos",
      body: "Música versátil a tu alcance",
      body_content:"Múasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance"
    },

    {
      id: 3,
      image: "../../public/imgs/historia.png",
      title: "Historia",
      body: "La banda versatil comienza en los años 50's al...",
      body_content:"Múasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfsica versátil a tu alcance"
    },
  ];
  return (
    <main>
      <div className={styles.social}>
        <a className="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
          Whatsapp
        </a>        
        <a className="p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3">
          Facebook
        </a>
       
      </div>
      <div className={styles.main_section}>
        {blog.map((article) => (
          <article key={article.id} className={styles.article}>
            <a href="/" className={styles.td_flex}>
              <Image src={`/public/imgs/${article.image}`} width={300}
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
