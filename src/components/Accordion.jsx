import "./Accordion.css";
const handleClick = (e) => {
  e.target.parentNode.classList.toggle("active");
};
const Accordion = () => {
  return (
    <>
      <div className="accordion-body">
        <div className="imissjustin-accordion">
          <h1 className="accordion-title">Frequently Asked Questions</h1>
          <hr />
          <div className="container" onClick={handleClick}>
            <div className="label">Why do we miss Justin?</div>
            <div className="content">
              Justin was last seen on December 21st 2021. Don't worry though,
              he's not missing. We just miss him. Justin drove down to
              Tennessee. If you happen to see Justin let him know that we miss
              him.
            </div>
          </div>
          <hr />
          <div className="container" onClick={handleClick}>
            <div className="label">February 3, 2022 Update</div>
            <div className="content">
              ThePoMoTroll via Discord said: My bad guys, sorry for going MIA.
              Im in Tennessee, staying with my fiancé. The weather hasnt really
              cooperated so I couldnt come back up to Ohio. Im doing really good
              though and havent been sold into sex slavery.
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};
export default Accordion;
