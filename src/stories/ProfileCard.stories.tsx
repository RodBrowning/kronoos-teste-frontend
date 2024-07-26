import { Meta, StoryObj } from "@storybook/react";
import { ProfileCard, SocialMedias } from "@/components/profileCard";

import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof ProfileCard> & {
  numOfCards?: number; // Adicione aqui a propriedade personalizada
};

const meta: Meta<StoryProps> = {
  title: "Custom Components/Profile Card",
  component: ProfileCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const profileCard: Story = {
  args: {
    imgURL: "https://github.com/shadcn.png",
    title: "Carlos Guarrido",
    position: "Diretor de produção",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos eos necessitatibus, laborum quibusdam mollitia in optio nesciunt!",
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
  render: (args) => <ProfileCard {...args} />,
};

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
        platform: "twitch",
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
  {
    id: 1513515313,
    imgURL: "https://github.com/shadcn.png",
    title: "Ricardo Correia",
    position: "Cirurgião destista",
    description:
      "Lorem, ipsum dolor. Quos eosnecessitatibus, laborum quibusdam mollitia in optio nesciunt esse, recusandae, magni ullam est labore rerum voluptas autem provident. Ab, odit pariatur!",
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
    title: "Otavio Pereira",
    position: "Coordenador artistico",
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

export const ManyProfileCards: Story = {
  args: {
    numOfCards: 3,
  },
  argTypes: {
    numOfCards: {
      control: { type: "select" },
      defaultValue: 3,
      options: [1, 3, 5],
      description: "Number of profile cards to display",
    },
  },
  render: (args) => (
    <div className="flex flex-wrap justify-center gap-5">
      {profiles.map((profile) => (
        <div key={profile.id}>
          <ProfileCard {...profile} />
        </div>
      ))}
    </div>
  ),
};
