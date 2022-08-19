import { useRef, useState } from "react";

const AccordionContainer = ({ label, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentEl = useRef();
  const handleClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };
  return (
    <div className={isActive ? "container active" : "container"}>
      <div className="label" onClick={handleClick}>
        {label}
      </div>
      <div
        className="content-wrapper"
        ref={contentEl}
        style={
          isActive
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="content">{content}</div>
      </div>
    </div>
  );
};
export default AccordionContainer;
