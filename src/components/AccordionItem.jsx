import React from "react";
import { useAccordionContext } from "./Accordion";

const AccordionItem = ({ id, title, children, className }) => {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  const handleClick = () => toggleItem(id);

  return (
    <li className={className}>
      <h3 onClick={handleClick}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
};

export default AccordionItem;
