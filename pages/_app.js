import { ApolloProvider } from "@apollo/react-hooks";
import withApolloClient from "../apollo/client";
import App from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
