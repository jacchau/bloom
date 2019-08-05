import * as React from 'react';
import { storiesOf } from "@storybook/react";
import { Button } from "../src/atoms/button";
import SiteHeader from "../src/headers/site_header";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Header", module)
  .add("header", () => (
    <SiteHeader />
  ))
