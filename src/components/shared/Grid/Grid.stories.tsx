import { Meta } from "@storybook/react";

import { Grid } from "./Grid";
import { GridItem } from "./GridItem";

export default {
  title: "componentsNew/compound/Grid",
  component: Grid,
} satisfies Meta<typeof Grid>;

const GridTemplate = () => {
  return (
    <>
      <GridItem basis={{ xs: 12, sm: 9, md: 6, lg: 3, xl: 1 }}>
        <div style={{ background: "lightblue" }}>Item</div>
      </GridItem>
      <GridItem basis={{ xs: 12, sm: 9, md: 6, lg: 3, xl: 1 }}>
        <div style={{ background: "lightcoral" }}>Item</div>
      </GridItem>
    </>
  );
};

export const GridStory = () => {
  return (
    <Grid spacing={{ x: 5, y: 5 }}>
      <GridTemplate />
    </Grid>
  );
};

export const AutoGridStory = () => {
  return (
    <Grid flexDirection={"row"} flexGrow={1} spacing={{ x: 5, y: 5 }}>
      <GridTemplate />
    </Grid>
  );
};
