import { SocialMedias } from "@/components/profileCard";

export const profiles: {
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
