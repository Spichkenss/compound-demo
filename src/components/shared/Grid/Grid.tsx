import React, { CSSProperties, PropsWithChildren } from "react";
import "./Grid.css";

import { TGridContainerParams } from "./Grid.types";

type IGridProps = PropsWithChildren<TGridContainerParams>;

/**
 * Компонент Grid нужен для создания лэйаута в виде сетки. Реализация основана на flexbox.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - Дочерние элементы. Принимает `GridItem`
 * @param {Object} [props.spacing={ x: 0, y: 0 }] - Отступы между `GridItem`
 * @param {number} [props.flexGrow=0] - Значение `1` растягивает сетку на всю ширину контейнера, использя значение `flex-basis = auto`
 * @param {Object} [props.styles] - Дополнительные стили для управления flex-контейнером.
 *
 * @returns  Возвращает React компонент.
 */
export const Grid = ({
  children,
  spacing = { x: 0, y: 0 },
  flexGrow = 0,
  ...styles
}: IGridProps) => {
  const cssVars = {
    "--spacing-x": `${spacing.x}px`,
    "--spacing-y": `${spacing.y}px`,
    "--grow": flexGrow,
  } as CSSProperties;

  return (
    <div className={"grid"} style={{ ...styles, ...cssVars }}>
      {children}
    </div>
  );
};
