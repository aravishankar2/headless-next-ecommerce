import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../apollo/client";
import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout.component";
import { ParamsProvider } from "../context/params.context.tsx";
import { FilterBarProvider } from "../context/filterbar.context.tsx";
import SimpleReactLightbox from "simple-react-lightbox";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ParamsProvider>
          <FilterBarProvider>
            <Layout>
              <SimpleReactLightbox>
                <Component {...pageProps} />
              </SimpleReactLightbox>
            </Layout>
          </FilterBarProvider>
        </ParamsProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
