import { CSSProperties } from "react";

export type Breakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

export type Spacing = {
  x: number;
  y: number;
};

type TMutualParams = {
  spacing?: Spacing;
};

export type TGridCellParams = {
  basis: Partial<Record<keyof Breakpoints, number | "auto">>;
} & TMutualParams;

export type TGridContainerParams = {
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  flexGrow?: CSSProperties["flexGrow"];
  flexDirection?: CSSProperties["flexDirection"];
} & TMutualParams;
