import Layout from "../components/layout";
import Image from "next/image";
import recettesStyles from "../styles/recettes.module.css";

export default function RecettesItaliennes() {
  const recettes = [
    {
      titre: "Brucchetta aux légumes",
      ahref:
        "https://www.regal.fr/recettes/legumes/bruschettas-tout-legume-17430",
      imageSrc: "/images/bruschettas-legumes.jpg",
    },
    {
      titre: " Tagliatelles à al bolognaise",
      ahref:
        "https://www.regal.fr/recettes/plats/les-tagliatelle-bolognese-11845",
      imageSrc: "/images/Lasagnes bolognaise.jpg",
    },
    {
      titre: "Bomboloni beignets italiens ",
      ahref:
        " https://www.regal.fr/recettes/desserts/bomboloni-beignets-italiens-fourres-a-la-creme-patissiere-19930",
      imageSrc: "/images/Bomboloni-beignets.jpg",
    },
  ];

  return (
    <Layout>
      <h2 className={recettesStyles.recettesTitle}>Recettes Italiennes</h2>
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
