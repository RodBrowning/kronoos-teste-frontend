import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { ListingCard } from "@/components/listingCard";
import { ListingCardWrapper } from "@/components/listingCardWrapper";
import { users } from "@/mockData/users";

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
export const listinCardOffline: Story = {
  args: {
    online: false,
  },
};

const onlineUsers = users.filter((user) => user.online);
const offlineUsers = users.filter((user) => !user.online);

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
