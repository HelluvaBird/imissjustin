import "./Accordion.css";
import { data } from "../justinData";
import AccordionContainer from "./AccordionContainer";

const Accordion = () => {
  return (
    <>
      <div className="accordion-body">
        <div className="imissjustin-accordion">
          <h1 className="accordion-title">I Miss Justin Timeline</h1>
          <hr />
          {data &&
            data.map((container) => (
              <AccordionContainer key={container.id} {...container} />
            ))}
        </div>
      </div>
    </>
  );
};
export default Accordion;
