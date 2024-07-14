import { MainProperties } from "@/types/common";
import StatsCardTool from "./stats-card-tool";
import { useEffect, useState } from "react";

export interface ToolboxProps {
  onFetch: (url: string) => void;
}

export default function Toolbox(props: ToolboxProps) {
  const { onFetch } = props;
  const backendApi = process.env.NEXT_PUBLIC_BASE_URL;
  const [mainProperties, setMainProperties] = useState<MainProperties>();

  const sendProperties = () => {
    if (mainProperties === undefined) {
      return;
    }
    const urlLang = `${backendApi}/api/top-langs/?`;
    const urlStats = `${backendApi}/api/?`;
    const urlStreak = `${backendApi}/?`;
    const urlSearch = new URLSearchParams();
    urlSearch.append("username", mainProperties.username);
    urlSearch.append("hide", mainProperties.hide.join(","));
    urlSearch.append("show", mainProperties.show.join(","));
    urlSearch.append("show_icons", mainProperties.show_icons);
    urlSearch.append("theme", mainProperties.theme);
    onFetch(urlStreak + urlSearch.toString());
  };

  useEffect(() => {
    sendProperties();
  }, [mainProperties]);

  return (
    <div className="flex-1 h-full bg-white w-full p-5">
      <h1 className="font-bold text-2xl">Toolbox</h1>
      <StatsCardTool onFetch={(properties) => setMainProperties(properties)} />
    </div>
  );
}
