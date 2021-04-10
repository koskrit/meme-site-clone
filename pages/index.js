
import Head from "next/head";
import Layout from "../components/Layout";



export default function Home(props) {

  return (
      <div>
         <Head>
            <title>9GAG - Go Fun Yourself</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
          
         </Layout>
      </div>
   );
}

export function getStaticProps() {
   return { props: {} };
}
