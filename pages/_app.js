import Layout from "./components/layouts/main";
import { Provider } from "next-auth/client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../libs/theme";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps, router }) {
  return (
    <Provider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
