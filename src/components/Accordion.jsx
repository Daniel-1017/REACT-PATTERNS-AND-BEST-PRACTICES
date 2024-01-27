import React, { createContext, useContext, useState } from "react";
import AccordionItem from './AccordionItem';

const AccordionContext = createContext();

export const useAccordionContext = () => {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion context missing");
  return ctx;
};

const Accordion = ({ children, className }) => {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
};

Accordion.Item = AccordionItem

export default Accordion;
