import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { CountCard } from "@/components/countCard";

type StoryProps = ComponentProps<typeof CountCard>;

const meta: Meta<StoryProps> = {
  title: "Custom Components/Count card",
  component: CountCard,
  tags: ["autodocs"],
  args: {
    delay: 0.5,
    iconComponent: Youtube,
    text: "Inscritos",
    number: 1000000,
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    iconComponent: {
      description: "Licide icon component to display.",
      control: { type: "select" },
      options: ["Youtube", "Twitter", "Linkedin"],
      mapping: {
        Youtube: Youtube,
        Twitter: Twitter,
        Linkedin: Linkedin,
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const countCard: Story = {};
export const countCardNoIcon: Story = {
  args: {
    iconComponent: undefined,
  },
  argTypes: {
    iconComponent: { table: { disable: true } },
  },
};
