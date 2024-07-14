import { Inter } from "next/font/google";
import Toolbox from "../components/toolbox";
import Content from "../components/content";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [url, setUrl] = useState<string>();
  const fetcher = async (url: string) => {
    setUrl(url);
  };

  return (
    <main
      className={`flex h-screen flex-col items-center p-5 ${inter.className} font-mono bg-gray-900`}
    >
      <h1 className="text-4xl text-blue-300">
        Welcome to github stats generator
      </h1>
      <p>
        Made by{" "}
        <a className="text-blue-300" href="https://github.com/DiazNugraha">
          Diaz Nugraha
        </a>
      </p>
      <div className="flex w-full h-full">
        <Content url={url} />
        <Toolbox onFetch={fetcher} />
      </div>
    </main>
  );
}
