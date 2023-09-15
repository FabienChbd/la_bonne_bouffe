import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import layoutStyles from "../styles/layout.module.css";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <title>La bonne bouffe</title>
        {/* <!-- HTML Meta Tags --> */}
        <meta name="description" content="Retrouvez les meilleures recettes" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://la-bonne-bouffe.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Retrouvez les meilleures recettes !!!"
        />
        <meta
          property="og:description"
          content="Retrouvez les meilleures recettes !!!"
        />
        <meta
          property="og:image"
          content="https://la-bonne-bouffe.vercel.app/images/Le_chef.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="https://la-bonne-bouffe.vercel.app/"
        />
        <meta
          property="twitter:url"
          content="https://la-bonne-bouffe.vercel.app/"
        />
        <meta
          name="twitter:title"
          content="Retrouvez les meilleures recettes !!!"
        />
        <meta
          name="twitter:description"
          content="Retrouvez les meilleures recettes !!!"
        />
        <meta
          name="twitter:image"
          content="https://la-bonne-bouffe.vercel.app/images/Le_chef.png"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <header className={layoutStyles.header}>
        <div className={layoutStyles.logo}>
          <Image src="/images/Le_chef.png" height={140} width={140} />
          <h1 className={layoutStyles.title}>LA BONNE BOUFFE</h1>{" "}
          <Image src="/images/Le_chef.png" height={140} width={140} />
        </div>
        <nav>
          <ul className={layoutStyles.navBar}>
            <li className={layoutStyles.liLink}>
              <Link className={layoutStyles.link} href="../recettes_asiatiques">
                Recettes Asiatiques
              </Link>
            </li>
            <li className={layoutStyles.liLink}>
              <Link className={layoutStyles.link} href="../recettes_francaises">
                Recettes Francaises
              </Link>
            </li>
            <li className={layoutStyles.liLink}>
              <Link className={layoutStyles.link} href="../recettes_italiennes">
                Recettes Italiennes
              </Link>
            </li>
            <li className={layoutStyles.liLink}>
              <Link className={layoutStyles.link} href="../recettes_marocaines">
                Recettes Marocaines
              </Link>
            </li>
            <li className={layoutStyles.liLink}>
              <Link className={layoutStyles.link} href="../about">
                A propos
              </Link>
            </li>
            <li className={layoutStyles.liLink}>
              <Link className={layoutStyles.link} href="../contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={layoutStyles.main}>
        <div>{children}</div>
        {!home && (
          <div className={layoutStyles.linkHome}>
            <Link href="/">Retour à l'accueil</Link>
          </div>
        )}
      </main>
      <footer className={layoutStyles.footer}>
        © Créé par Cathy et Fabien #Huguette et Raymond
      </footer>
    </>
  );
}
