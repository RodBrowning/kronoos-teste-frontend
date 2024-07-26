import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";
import { ListingCardWrapper } from "@/components/listingCardWrapper";
import { users } from "@/mockData/users";

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

const numOnlineUsers = users.filter((user) => user.online);
const numOfflineUsers = users.filter((user) => !user.online);

export const listinCardWrapper: Story = {
  render: (args) => {
    const onlineUsers = numOnlineUsers.slice(0, args.numOfOnlineUsers);
    const offlineUsers = numOfflineUsers.slice(0, args.numOfOfflineUsers);
    return (
      <ListingCardWrapper
        ListingCardPropsArray={[...onlineUsers, ...offlineUsers]}
      />
    );
  },
};
