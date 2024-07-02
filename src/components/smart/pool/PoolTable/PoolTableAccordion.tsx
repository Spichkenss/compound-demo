import { Accordion } from "../../../shared/Accoridon"
import { AccordionContent } from "../../../shared/Accoridon/AccordionContent"
import { AccordionTrigger } from "../../../shared/Accoridon/AccordionTrigger"
import { PoolTableAccordionContent } from "./PoolTableAccordionContent"
import { PoolTableAccordionTrigger } from "./PoolTableAccordionTrigger"

export const PoolTableAccordion = () => {
  return (
    <Accordion>
      <AccordionTrigger>
        <PoolTableAccordionTrigger/>
      </AccordionTrigger>
      <AccordionContent>
        <PoolTableAccordionContent />
      </AccordionContent>
    </Accordion>
  )
}