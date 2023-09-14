import Layout from "../components/layout";
import Image from "next/image";
import recettesStyles from "../styles/recettes.module.css";

export default function RecettesFrancaises() {
  const recettes = [
    {
      titre: "Verrines apéritives ",
      ahref:
        "https://www.regal.fr/recettes/entrees/verrines-aperitives-aux-petits-legumes-croquants-fromage-frais-20234",
      imageSrc: "/images/verrines-legumes-fromage-frais.jpg",
    },
    {
      titre: " Cabillaud en papillote de poireaux",
      ahref:
        "https://www.regal.fr/recettes/plats/cabillaud-en-papillote-de-poireaux-au-four-19997",
      imageSrc: "/images/papillote-poireau-cabillaud.jpg",
    },
    {
      titre: "Gauffres flamandes ",
      ahref:
        " https://www.regal.fr/recettes/desserts/gaufres-flamandes-fourrees-au-sucre-vergeoise-19837",
      imageSrc: "/images/gaufres-flamandes-vergeoise.jpg",
    },
  ];
  return (
    <Layout>
      <h2 className={recettesStyles.recettesTitle}>Recettes Francaises</h2>
      <div className={recettesStyles.recettes}>
        {recettes.map(function (recette) {
          return (
            <div className={recettesStyles.recette}>
              <h3 className={recettesStyles.recetteTitle}>{recette.titre}</h3>
              <Image
                className={recettesStyles.recetteImg}
                src={`${recette.imageSrc}`}
                height={288}
                width={288}
                alt={recette.titre}
              />
              <a
                className={recettesStyles.recetteLink}
                target="_blank"
                href={recette.ahref}
              >
                On passe en cuisine !!!
              </a>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
