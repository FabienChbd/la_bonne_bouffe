import Layout from "../components/layout";
import aboutStyles from "../styles/about.module.css";

export default function About() {
  return (
    <Layout>
      <h1 className={aboutStyles.aboutTitle}>A propos</h1>
      <div className={aboutStyles.aboutContent}>
        <h2 className={aboutStyles.title}>
          Bienvenue sur{" "}
          <span className={aboutStyles.siteName}>La Bonne Bouffe</span> !
        </h2>
        <p className={aboutStyles.li}>Ce que nous offrons :</p>

        <ul className={aboutStyles.ulli}>
          <li className={aboutStyles.li}>
            <strong>Diversité Culinaires :</strong> Parcourez notre vaste
            collection de recettes allant des plats traditionnels aux créations
            contemporaines. Explorez les saveurs de chaque coin du globe, de
            l'Asie à l'Amérique du Sud en passant par l'Europe et bien d'autres
            régions.
          </li>
          <li className={aboutStyles.li}>
            <strong>Recettes Authentiques :</strong> Nous sommes dédiés à la
            présentation de recettes authentiques, préparées avec des
            ingrédients frais et accessibles. Chaque recette est accompagnée de
            conseils pratiques pour vous aider à réussir à la maison.
          </li>
          <li className={aboutStyles.li}>
            <strong>Conseils de Cuisine :</strong> Que vous soyez novice ou chef
            chevronné, nous partageons des astuces, des techniques de
            préparation et des informations sur les ingrédients pour améliorer
            vos compétences en cuisine.
          </li>
          <li className={aboutStyles.li}>
            <strong>Innovation Culinaires :</strong> En plus des classiques,
            nous vous proposons également des recettes innovantes et des idées
            créatives pour égayer votre cuisine quotidienne.
          </li>
          <li className={aboutStyles.li}>
            <strong>Communauté Gourmande :</strong> Rejoignez notre communauté
            de passionnés de cuisine, partagez vos expériences et échangez des
            idées avec d'autres amateurs de gastronomie. Nous adorons entendre
            vos histoires et voir vos créations culinaires.
          </li>
        </ul>
      </div>
    </Layout>
  );
}
