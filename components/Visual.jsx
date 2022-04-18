import { Builder } from "@builder.io/react";
import React from "react";

import { Visual as KdsVisual } from "@kickstartds/content/lib/visual";

import kdsInputs from '../kds-inputs.json';

const Visual = (props) => {
  return (
    <div>
      <KdsVisual {...props} />
    </div>
  );
};

const visualConfig = {
  "friendlyName": "Visual",
  "type": "object",
  "defaultValue": {},
  "name": "visual",
  "inputs": kdsInputs.find((kdsInput) => kdsInput.name === 'visual').subFields
};

Builder.registerComponent(Visual, visualConfig);

export default Visual;