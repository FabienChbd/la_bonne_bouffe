import Layout from "../components/layout";
import Image from "next/image";
import recettesStyles from "../styles/recettes.module.css";

export default function RecettesMarocaines() {
  const recettes = [
    {
      titre: "Brioutes à la viande",
      ahref:
        "https://www.regal.fr/recettes/aperitifs/briouates-a-la-viande-hachee-16662",
      imageSrc: "/images/samossa-viande-hachee.jpg",
    },
    {
      titre: " Pastilla marocaine farcie au poulet ",
      ahref:
        "https://www.regal.fr/recettes/plats/pastilla-marocaine-farcie-au-poulet-oeufs-amandes-et-cannelle-19954",
      imageSrc: "/images/pastilla-poulet-amande-maroc.jpg",
    },
    {
      titre: "Cornes de gazelle",
      ahref:
        "https://www.regal.fr/recettes/desserts/biscuits-cornes-de-gazelle-a-la-pate-damandes-maroc-19913",
      imageSrc: "/images/cornes-gazelle.jpg",
    },
  ];

  return (
    <Layout>
      <h2 className={recettesStyles.recettesTitle}>Recettes Marocaines</h2>
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
