import "../src/index.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark-brown",
      values: [
        {
          name: "dark-brown",
          value: "#0c0a09",
        },
      ],
    },
  },
  tags: ["autodocs"],
};

export default preview;
