import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { Plus } from "lucide-react";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  title: "Teste Stories/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    buttonText: "Click here",
  },
  argTypes: {
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: {
        type: "radio",
      },
    },
    size: {
      options: ["default", "default", "sm", "lg", "icon"],
      control: {
        type: "radio",
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const VariantDefault: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const VariantDestructive: Story = {
  args: {
    variant: "destructive",
    size: "default",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const VariantOutline: Story = {
  args: {
    variant: "outline",
    size: "default",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const VariantSecondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const VariantGhost: Story = {
  args: {
    variant: "ghost",
    size: "default",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const VariantLink: Story = {
  args: {
    variant: "link",
    size: "default",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const SizeDefault: Story = {
  args: {
    variant: "default",
    size: "default",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const SizeSm: Story = {
  args: {
    variant: "default",
    size: "sm",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const SizeLg: Story = {
  args: {
    variant: "default",
    size: "lg",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
export const SizeIcon: Story = {
  args: {
    variant: "default",
    size: "icon",
  },
  render: ({ buttonText, ...args }) => {
    return (
      <Button {...args}>
        <Plus className="h-4 w-4 m-0" />
      </Button>
    );
  },
};
