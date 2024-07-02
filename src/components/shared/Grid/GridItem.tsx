import { CSSProperties, PropsWithChildren } from "react";

import { TGridCellParams } from "./Grid.types";

interface IGridCellProps extends PropsWithChildren<TGridCellParams> {}

export const GridItem = ({
  children,
  basis: { xs = "auto", sm = "auto", xl = "auto", md = "auto", lg = "auto" },
  spacing = { x: 0, y: 0 },
}: IGridCellProps) => {
  const cssVars = {
    "--xs": xs,
    "--sm": sm,
    "--md": md,
    "--lg": lg,
    "--xl": xl,
    "--spacing-item-x": `${spacing.x}px`,
    "--spacing-item-y": `${spacing.x}px`,
  } as CSSProperties;

  return (
    <div className={"grid-item"} style={{ padding: '10px 10px', ...cssVars }}>
      {children}
    </div>
  );
};
