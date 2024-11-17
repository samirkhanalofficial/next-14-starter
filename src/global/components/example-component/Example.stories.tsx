import type { Meta, StoryObj } from "@storybook/react";

import Example from "./Example";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Example> = {
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const ExampleDefault: Story = {
  args: {
    title: "Default",
    //👇 The args you need here will depend on your component
  },
};

export const ExampleDisabled: Story = {
  args: {
    title: "Disabled",

    //👇 The args you need here will depend on your component
  },
};
