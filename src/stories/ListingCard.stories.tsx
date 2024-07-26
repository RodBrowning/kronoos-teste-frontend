import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { ListingCard } from "@/components/listingCard";
import { ListingCardWrapper } from "@/components/listingCardWrapper";

type StoryProps = ComponentProps<typeof ListingCard> & {
  numOfOnlineUsers: number;
  numOfOfflineUsers: number;
};

const meta: Meta<StoryProps> = {
  title: "Custom Components/Listing card",
  component: ListingCard,
  tags: ["autodocs"],
  args: {
    imgURL: "https://github.com/shadcn.png",
    online: true,
    border: false,
    name: "Flavio Macedo",
    position: "Diretor",
  },
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryProps>;
export const listinCard: Story = {};
export const listinCardOffline: Story = {};

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
const onlineUsers = mockUsersData.filter((user) => user.online);
const offlineUsers = mockUsersData.filter((user) => !user.online);

export const listinCardOnList: Story = {
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
    online: {
      table: { disable: true },
    },
    border: {
      table: { disable: true },
    },
    imgURL: {
      table: { disable: true },
    },
    name: {
      table: { disable: true },
    },
    position: {
      table: { disable: true },
    },
  },
  render: (args) => {
    const numOnlineUsers = onlineUsers.slice(0, args.numOfOnlineUsers);
    const numOfflineUsers = offlineUsers.slice(0, args.numOfOnlineUsers);
    return (
      <ListingCardWrapper
        ListingCardPropsArray={[...numOnlineUsers, ...numOfflineUsers]}
      />
    );
  },
};
