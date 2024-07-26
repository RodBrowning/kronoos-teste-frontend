import "./App.css";

import { Facebook, Instagram, Youtube } from "lucide-react";

import { CountCard } from "@/components/countCard";
import { ListingCardWrapper } from "./components/listingCardWrapper";
import { ProfileCard } from "./components/profileCard";
import { Separator } from "@/components/ui/separator";
import { SocialMedia } from "@/components/socialMedia";
import { profiles } from "@/mockData/profiles";
import { socialMedias } from "@/mockData/socialMedias";
import { users } from "@/mockData/users";

function App() {
  return (
    <div className="container">
      <section>
        <h1 className="text-lg md:text-xl lg:text-2xl text-border text-white">
          Card Component
        </h1>
        <Separator className="my-5" />
        <div className="flex flex-wrap justify-center gap-5">
          {profiles.slice(0, 3).map((profile) => (
            <div key={profile.id}>
              <ProfileCard
                imgURL={profile.imgURL}
                title={profile.title}
                position={profile.position}
                description={profile.description}
                socialMedias={profile.socialMedias}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20">
        <h1 className="text-lg md:text-xl lg:text-2xl text-border text-white">
          Social Media Button Component
        </h1>
        <Separator className="my-5" />
        <div className="flex flex-wrap justify-center gap-5">
          {socialMedias.map((socialMedia) => (
            <div key={socialMedia.id}>
              <SocialMedia {...socialMedia} />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20">
        <h1 className="text-lg md:text-xl lg:text-2xl text-border text-white">
          Count Card Component
        </h1>
        <Separator className="my-5" />
        <div className="flex flex-wrap justify-center gap-5">
          <CountCard
            delay={0}
            iconComponent={Instagram}
            text={"Followers"}
            number={1200000}
          />
          <CountCard
            delay={0.5}
            iconComponent={Youtube}
            text={"Inscritos"}
            number={1000000}
          />
          <CountCard
            delay={1}
            iconComponent={Facebook}
            text={"Conexões"}
            number={50000}
          />
          <CountCard delay={1.5} text={"Contatos"} number={5640} />
        </div>
      </section>
      <section className="mt-20">
        <h1 className="text-lg md:text-xl lg:text-2xl text-border text-white">
          Linsting Card Component
        </h1>
        <Separator className="my-5" />
        <ListingCardWrapper ListingCardPropsArray={users} />
      </section>
    </div>
  );
}

export default App;
