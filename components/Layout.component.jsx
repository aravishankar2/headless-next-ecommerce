import Nav from "./Nav.component";
import Head from "next/head";

const Layout = (props) => (
  <div>
    <Head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
      <script
        src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
        data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
        id="snipcart"
      ></script>
      <link
        href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    <Nav />
    <div>
      <main>{props.children}</main>
    </div>
  </div>
);

export default Layout;
