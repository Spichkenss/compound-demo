import "./PoolTable.scss";
import { PoolTableAccordion } from "./PoolTableAccordion";
import { PoolTableHeader } from "./PoolTableHeader";

interface IPoolTableProps { }

export const PoolTable = (props: IPoolTableProps) => {
  return (
    <div className="pool-table">
      <PoolTableHeader />
      <PoolTableAccordion />
    </div>
  )
}