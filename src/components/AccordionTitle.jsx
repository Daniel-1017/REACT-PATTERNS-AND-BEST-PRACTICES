import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionTitle = ({ id, className, children: title }) => {
  const { toggleItem } = useAccordionContext();
  return <h3 className={className} onClick={() => toggleItem(id)}>{title}</h3>;
};

export default AccordionTitle;
