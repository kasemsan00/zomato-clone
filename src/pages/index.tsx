import Head from "next/head";
import Menu from "@/components/Menu/Menu";
import MainSearch from "@/components/Menu/MainSearch";
import Card from "@/components/Card/Card";
import PopularMain from "@/components/Popular/PopularMain";
import MobileMain from "@/components/MobileApp/MobileMain";
import ExploreMain from "@/components/Explore/ExploreMain";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>zomato-clone</title>
        <meta name="description" content="Zomato Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <div className="search-section">
          <Menu />
          <MainSearch />
        </div>
        <div className="card-section">
          <Card />
        </div>
        <div className="popular-section">
          <PopularMain />
        </div>
        <div className="mobile-section">
          <MobileMain />
        </div>
        <div className="explore-section">
          <ExploreMain />
        </div>
        <Footer />
      </main>
    </>
  );
}
