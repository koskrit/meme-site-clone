
import Head from "next/head";
import Layout from "../components/Layout";
import Content from "../components/Content"


export default function Home(props) {

  return (
      <div>
         <Head>
            <title>9GAG - Go Fun Yourself</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
         <Content/>
         </Layout>
      </div>
   );
}

export function getStaticProps() {
   return { props: {} };
}
