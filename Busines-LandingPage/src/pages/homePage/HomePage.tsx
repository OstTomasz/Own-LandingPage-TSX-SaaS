import { HomeClients } from "@/components/ui/HomeClients/HomeClients";
import { HomeHero } from "@/components/ui/HomeHero/HomeHero";
import { HomeServices } from "@/components/ui/HomeServices/HomeServices";
import { HomeTeam } from "@/components/ui/HomeTeam/HomeTeam";

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
