import type { NextPage } from "next";
import Head from "next/head";
import Logo from "../assets/wed_logo.png";
import Image from "next/image";

type TechnologyCardProps = {
  name: string;
  description: string;
  title?: string;
  documentation?: string;
};

const Home: NextPage = () => {
  //const hello = trpc.useQuery(["example.hello", { text: "from Ryan" }]);

  return (
    <>
      <Head>
        <title>Where Eagles Dare</title>
        <meta name="description" content="constructed by ryan-v2" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <Image className="p-4" src={Logo} alt="Where Eagles Dare logo"/>
        <p className="text-2xl align-self-center text-gray-700">covers</p>
        <div className="grid gap-6 pt-4 mt-4 text-center md:grid-cols-4 lg:w-3/3">
          <TechnologyCard
            name="Ethereum Blockchain"
            description="Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more."
            documentation="https://ethereum.org/"
            title="ethereum.org"
          />
          <TechnologyCard
            name="Consulting"
            description="We can help you get up and running or sharpen your current project."
            documentation="https://www.linkedin.com/company/whereeaglesdare/"
            title="where eagles dare"
          />
          <TechnologyCard
            name="NFT Marketplace"
            description="NFT marketplaces are platforms where NFTs can be stored, displayed, traded and in some cases minted (created)."
            documentation="https://ethereum.org/en/dapps/?category=collectibles"
            title="nft marketplaces"
          />
          <TechnologyCard
            name="Minting ERC-20 and NFTs"
            description="ERC-20 is a fungible token standard that tokens implementers must adhere and non-fungible tokens (NFTs) are cryptographic assets on a blockchain with unique identification codes and metadata."
            documentation="https://ethereum.org/en/developers/docs/standards/tokens/"
            title="token standards"
          />
        </div>
        {/* <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div> */}
      </main>
    </>
  );
};

const TechnologyCard = ({
  name,
  description,
  documentation,
  title,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      {documentation && (
        <a
          className="mt-3 text-sm underline text-violet-500 decoration-dotted underline-offset-2"
          href={documentation}
          target="_blank"
          rel="noreferrer"
        >
          {title && title}
        </a>
      )}
    </section>
  );
};

export default Home;
