import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { ProfileCard } from "@/components/profileCard";
import { profiles } from "@/mockData/profiles";

type StoryProps = ComponentProps<typeof ProfileCard> & {
  numOfCards?: number;
  numOfMedias?: number;
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
      {
        link: "#",
        platform: "facebook",
      },
      {
        link: "#",
        platform: "instagram",
      },
    ],
    numOfMedias: 3,
  },
  argTypes: {
    numOfMedias: {
      control: { type: "radio" },
      defaultValue: 3,
      options: [1, 3, 5],
      description: "Number of social medias to display in the card",
    },
  },
  render: (args) => {
    args.socialMedias = args.socialMedias.slice(0, args.numOfMedias);
    return <ProfileCard {...args} />;
  },
};

export const ManyProfileCards: Story = {
  args: {
    numOfCards: 3,
  },
  argTypes: {
    numOfCards: {
      control: { type: "radio" },
      defaultValue: 3,
      options: [1, 3, 5],
      description: "Number of profile cards to display",
    },
  },
  render: (args) => {
    const selectedProfiles = profiles.slice(0, args.numOfCards);
    return (
      <div className="flex flex-wrap justify-center gap-5">
        {selectedProfiles.map((profile) => (
          <div key={profile.id}>
            <ProfileCard {...profile} />
          </div>
        ))}
      </div>
    );
  },
};
