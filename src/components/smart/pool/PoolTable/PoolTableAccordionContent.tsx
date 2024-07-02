import { Grid } from "../../../shared/Grid";
import { GridItem } from "../../../shared/Grid/GridItem";

export const PoolTableAccordionContent = () => {
  return (
    <>
      <Grid flexGrow={1}>
        <GridItem basis={{ xs: 6 }}>
          <div className="attr" style={{ display: "flex", justifyContent: "space-between", alignItems: 'end' }}>
            <div className="attr__param">Статус</div>
            <div className="dots"/>
            <div>ONLINE</div>
          </div>
        </GridItem>
        <GridItem basis={{ xs: 6 }}>
          <div>Блабалаблаабаллабла</div>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem basis={{ xs: 2 }}>
          <div>Тома</div>
        </GridItem>
        <GridItem basis={{ xs: 2 }}>
          <div>Файловые системы</div>
        </GridItem>
      </Grid>
    </>
  );
};
