import "./App.css";

import { Facebook, Instagram, Youtube } from "lucide-react";
import { ProfileCard, SocialMedias } from "./components/profileCard";

import { CountCard } from "@/components/countCard";
import { ListingCardWrapper } from "./components/listingCardWrapper";
import { Separator } from "@/components/ui/separator";
import { SocialMedia } from "@/components/socialMedia";

const profiles: {
  id: number;
  imgURL: string;
  title: string;
  position: string;
  description: string;
  socialMedias: SocialMedias[];
}[] = [
  {
    id: 151151515313,
    imgURL: "https://github.com/shadcn.png",
    title: "Carlos Guarrido",
    position: "Diretor de produção",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eosnecessitatibus, laborum quibusdam mollitia in optio nesciunt!",
    socialMedias: [
      {
        link: "#",
        platform: "linkedin",
      },
      {
        link: "#",
        platform: "facebook",
      },
      {
        link: "#",
        platform: "instagram",
      },
    ],
  },
  {
    id: 151345664513,
    imgURL: "https://github.com/shadcn.png",
    title: "Thiago Figueiredo",
    position: "CEO",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eosnecessitatibus, laborum quibusdam mollitia in optio nesciunt esse, recusandae, magni ullam est labore rerum voluptas autem provident. Ab, odit pariatur!",
    socialMedias: [
      {
        link: "#",
        platform: "linkedin",
      },
      {
        link: "#",
        platform: "facebook",
      },
      {
        link: "#",
        platform: "twitter",
      },
    ],
  },
  {
    id: 1513515313,
    imgURL: "https://github.com/shadcn.png",
    title: "Valeria Massa",
    position: "Advogada juridica",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eosnecessitatibus, laborum quibusdam mollitia in optio nesciunt esse, recusandae, magni ullam est labore rerum voluptas autem provident. Ab, odit pariatur!",
    socialMedias: [
      {
        link: "#",
        platform: "linkedin",
      },
      {
        link: "#",
        platform: "twitch",
      },
      {
        link: "#",
        platform: "twitter",
      },
    ],
  },
];

const socialMediasExemples: (SocialMedias & { id: number })[] = [
  {
    id: 1,
    link: "#",
    platform: "linkedin",
  },
  {
    id: 2,
    link: "#",
    platform: "twitch",
  },
  {
    id: 3,
    link: "#",
    platform: "twitter",
  },
  {
    id: 4,
    link: "#",
    platform: "instagram",
  },
  {
    id: 5,
    link: "#",
    platform: "facebook",
  },
];

const mockUsersData = [
  {
    imgURL: "https://github.com/shadcn.png",
    online: true,
    name: "Flavio Macedo",
    position: "Diretor",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: true,
    name: "Maria do Carmo",
    position: "CTO",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: false,
    name: "Marcos Latin",
    position: "Desenvolvedor pleno",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: true,
    name: "Ana Souza",
    position: "Gerente de Projeto",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: false,
    name: "João Pereira",
    position: "Analista de Sistemas",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: true,
    name: "Lucas Fernandes",
    position: "Designer UX/UI",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: false,
    name: "Juliana Oliveira",
    position: "Arquiteto de Software",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: true,
    name: "Roberta Lima",
    position: "Engenheira de Dados",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: false,
    name: "Carlos Santos",
    position: "DevOps",
  },
  {
    imgURL: "https://github.com/shadcn.png",
    online: true,
    name: "Fernanda Costa",
    position: "Analista de QA",
  },
];

function App() {
  return (
    <div className="container">
      <section>
        <h1 className="text-lg md:text-xl lg:text-2xl text-border text-white">
          Card Component
        </h1>
        <Separator className="my-5" />
        <div className="flex flex-wrap justify-center gap-5">
          {profiles.map((profile, _) => (
            <div key={profile.id}>
              <ProfileCard
                imgURL={"https://github.com/shadcn.png"}
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
          {socialMediasExemples.map((socialMedia, _) => (
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
          <CountCard delay={1} text={"Contatos"} number={5640} />
        </div>
      </section>
      <section className="mt-20">
        <h1 className="text-lg md:text-xl lg:text-2xl text-border text-white">
          Linsting Card Component
        </h1>
        <Separator className="my-5" />
        <ListingCardWrapper ListingCardPropsArray={mockUsersData} />
      </section>
    </div>
  );
}

export default App;
