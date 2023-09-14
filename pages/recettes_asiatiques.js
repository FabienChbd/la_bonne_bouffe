import Layout from "../components/layout";
import Image from "next/image";
import recettesStyles from "../styles/recettes.module.css";

export default function RecettesAsiatiques() {
  const recettes = [
    {
      titre: "Crevettes sautées aux noix de cajou",
      ahref:
        "https://www.regal.fr/recettes/plats/crevettes-sautees-aux-noix-de-cajou-19251",
      imageSrc: "/images/crevettes-sautees-noix-cajou.jpg",
    },
    {
      titre: "Dakgangjeong (Poulet frit à la coréenne)",
      ahref:
        "https://www.regal.fr/recettes/viandes-et-volailles/dakgangjeong-poulet-frit-la-corenne-20194",
      imageSrc: "/images/poulet-frit-coreen-piment.jpg",
    },
    {
      titre: "Riz au lait d'amande, mangue et nougatine de pistache",
      ahref:
        "https://www.regal.fr/recettes/desserts/riz-au-lait-damande-mangue-et-nougatine-de-pistache-17226",
      imageSrc: "/images/riz-lait-amande-mangue-pistache.jpg",
    },
  ];
  return (
    <Layout>
      <h2 className={recettesStyles.recettesTitle}>Recettes Asiatiques</h2>
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
