import { HomeClients } from "@/components/sections/HomeClients/HomeClients";
import { HomeHero } from "@/components/sections/HomeHero/HomeHero";
import { HomeServices } from "@/components/sections/HomeServices/HomeServices";
import { HomeTeam } from "@/components/sections/HomeTeam/HomeTeam";

export const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeServices />
      <HomeTeam />
      <HomeClients />
    </>
  );
};
