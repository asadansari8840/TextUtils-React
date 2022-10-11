import React, { useState } from "react";

const About = () => {
  const [myStyle, setmyStyle] = useState({
    backgroundColor: "white",
    color: "#252525",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const toggleBtn = () => {
    if (myStyle.color === "#252525") {
      setmyStyle({
        color: "white",
        transition:"0.3s",
        backgroundColor: "#252525",
    })
    setBtnText('Enable Light Mode')
}else{
    setmyStyle({
            transition:"0.3s",
            backgroundColor: "white",
            color: "#252525",
          })
          setBtnText('Enable Dark Mode')
    }
  };

  return (
    <div
      style={{ border: "1px solid blueviolet", backgroundColor: "crimson" }}
      className="container mt-4 p-4"
    >
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              style={myStyle}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" myStyle={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to myStyle each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              Style={myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div Style={myStyle} class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to myStyle each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              Style={myStyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div Style={myStyle} class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to myStyle each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 p-2">
        <button onClick={toggleBtn} className="btn btn-primary">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default About;
