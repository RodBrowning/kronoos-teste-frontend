import "./App.css";

import { ProfileCard, SocialMedias } from "./components/profileCard";

import { Separator } from "@/components/ui/separator";
import { SocialMedia } from "./components/socialMedia";

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
    </div>
  );
}

export default App;
