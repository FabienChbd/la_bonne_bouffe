import Layout from "../components/layout";
import indexStyles from "../styles/index.module.css";

export default function Home() {
  return (
    <Layout home>
      <main>
        <h2 className={indexStyles.title}>
          Bienvenue sur{" "}
          <span className={indexStyles.siteName}>La Bonne Bouffe</span> !
        </h2>
        <div className={indexStyles.aboutp}>
          <p className={indexStyles.text}>
            Notre passion pour la cuisine nous a conduit à créer cet espace
            gourmand où vous pouvez explorer et savourer une variété de délices
            culinaires du monde entier. Notre mission est de vous inspirer à
            cuisiner, à découvrir de nouvelles saveurs et à partager des moments
            inoubliables autour de la table.
          </p>
        </div>
        <div>
          <h2 className={indexStyles.title}>Notre engagement :</h2>
          <p className={indexStyles.text}>
            Chez <span className={indexStyles.siteName}>La Bonne Bouffe</span>,
            nous croyons en la magie de la cuisine pour rassembler les gens.
            Nous nous engageons à encourager la créativité culinaire, à
            promouvoir une alimentation saine et à soutenir les producteurs
            locaux. Nous sommes ravis de vous accompagner dans votre voyage
            culinaire et de faire de chaque repas une expérience mémorable.
          </p>
          <p className={indexStyles.text}>
            Explorez, cuisinez et partagez l'amour pour la bonne nourriture avec{" "}
            <span className={indexStyles.siteName}>La Bonne Bouffe</span> !
          </p>
        </div>
      </main>
    </Layout>
  );
}
