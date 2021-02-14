import { useContext } from "react";
import Nav from "./Nav.component";
import Head from "next/head";
import Search from "./SearchBar/Search.component";
import { FilterContext } from "../../context/filterbar.context";
import { IProps } from "../../interfaces/iProps";

const Layout = (props: IProps) => {
  const { state } = useContext(FilterContext);

  return (
    <div>
      <Head>
        {/* Version 2 of Snipcart */}
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
        <main>
          {state.searchOpened ? <Search /> : null}
          {props.children}
        </main>
      </div>
      <footer></footer>
    </div>
  );
};

export default Layout;
