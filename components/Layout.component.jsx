import Nav from "./Nav.component";
// import Footer from './Footer'
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Layout = (props) => (
  <div>
    <Head>
      <title>E-Commerce</title>
      <link rel="icon" href="/favicon.ico" />

      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.css"
      />
    </Head>
    <Nav />
    <div>
      <main>{props.children}</main>
    </div>

    <footer className={styles.footer}>
      {/* <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
      </a> */}
    </footer>

    <div
      hidden
      id="snipcart"
      data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
    />
    <script src="https://cdn.snipcart.com/themes/v3.0.28/default/snipcart.js" />
  </div>
);

export default Layout;
