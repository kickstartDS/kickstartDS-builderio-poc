import { Builder } from "@builder.io/react";
import React from "react";

import { Button as KdsButton } from "@kickstartds/base/lib/button";

import kdsInputs from '../kds-inputs.json';

const Button = (props) => {
  return (
    <div>
      <KdsButton {...props} />
    </div>
  );
};

const buttonConfig = {
  "friendlyName": "Button",
  "type": "object",
  "defaultValue": {},
  "name": "button",
  "inputs": kdsInputs.find((kdsInput) => kdsInput.name === 'button').subFields
};

Builder.registerComponent(Button, buttonConfig);

export default Button;