import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { ListingCardWrapper } from "@/components/listingCardWrapper";

type StoryProps = ComponentProps<typeof ListingCardWrapper> & {
  numOfOnlineUsers: number;
  numOfOfflineUsers: number;
};

const meta: Meta<StoryProps> = {
  title: "Custom Components/Listing card wrapper",
  component: ListingCardWrapper,
  tags: ["autodocs"],

  args: {
    numOfOnlineUsers: 5,
    numOfOfflineUsers: 5,
  },
  argTypes: {
    numOfOnlineUsers: {
      control: { type: "radio" },
      defaultValue: 5,
      options: [1, 5, 10],
      description: "Number of online user to display.",
    },
    numOfOfflineUsers: {
      control: { type: "radio" },
      defaultValue: 5,
      options: [1, 5, 10],
      description: "Number of offline user to display.",
    },
    ListingCardPropsArray: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

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

export const listinCardWrapper: Story = {
  render: (args) => {
    const numOnlineUsers = mockUsersData
      .filter((user) => user.online)
      .slice(0, args.numOfOnlineUsers);
    const numOfflineUsers = mockUsersData
      .filter((user) => !user.online)
      .slice(0, args.numOfOfflineUsers);

    return (
      <ListingCardWrapper
        ListingCardPropsArray={[...numOnlineUsers, ...numOfflineUsers]}
      />
    );
  },
};
