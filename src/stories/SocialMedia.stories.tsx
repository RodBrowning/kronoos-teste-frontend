import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { SocialMedia } from "@/components/socialMedia";

type StoryProps = ComponentProps<typeof SocialMedia>;

const meta: Meta<StoryProps> = {
  title: "Custom Components/Social media button",
  component: SocialMedia,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const SocialMediaButton: Story = {
  args: {
    link: "#",
    platform: "instagram",
  },
  argTypes: {
    link: {
      description: "Link to the social media profile.",
    },
    platform: {
      description: "Platform name.",
      control: { type: "radio" },
      defaultValue: "instagram",
      options: ["linkedin", "twitch", "twitter", "facebook", "instagram"],
    },
  },
  render: (args) => <SocialMedia {...args} />,
};
export const SocialMediaLinkedin: Story = {
  args: {
    link: "#",
    platform: "linkedin",
  },
  argTypes: {
    link: {
      description: "Link to the social media profile.",
    },
    platform: {
      description: "Nome da plaraforma.",
      control: { type: "radio" },
      defaultValue: "instagram",
      options: ["linkedin", "twitch", "twitter", "facebook", "instagram"],
    },
  },
  render: (args) => <SocialMedia {...args} />,
};
export const SocialMediaTwitch: Story = {
  args: {
    link: "#",
    platform: "twitch",
  },
  argTypes: {
    link: {
      description: "Link to the social media profile.",
    },
    platform: {
      description: "Nome da plaraforma.",
      control: { type: "radio" },
      defaultValue: "instagram",
      options: ["linkedin", "twitch", "twitter", "facebook", "instagram"],
    },
  },
  render: (args) => <SocialMedia {...args} />,
};

export const SocialMediaTwitter: Story = {
  args: {
    link: "#",
    platform: "twitter",
  },
  argTypes: {
    link: {
      description: "Link to the social media profile.",
    },
    platform: {
      description: "Nome da plaraforma.",
      control: { type: "radio" },
      defaultValue: "instagram",
      options: ["linkedin", "twitch", "twitter", "facebook", "instagram"],
    },
  },
  render: (args) => <SocialMedia {...args} />,
};

export const SocialMediaFacebook: Story = {
  args: {
    link: "#",
    platform: "facebook",
  },
  argTypes: {
    link: {
      description: "Link to the social media profile.",
    },
    platform: {
      description: "Nome da plaraforma.",
      control: { type: "radio" },
      defaultValue: "instagram",
      options: ["linkedin", "twitch", "twitter", "facebook", "instagram"],
    },
  },
  render: (args) => <SocialMedia {...args} />,
};
