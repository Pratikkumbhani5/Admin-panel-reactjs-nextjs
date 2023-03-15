import React, { useEffect } from "react";
import FaqsData from "./Data/FaqsData";

const FaqsSection = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle == "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));
  }, []);

  return (
    <div>
      <section className="inner-blog pt-100 pb-120 mt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60">
                <h2>FAQs</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="accordion">
                {FaqsData.map((el, i) => (
                  <div className="accordion-item" key={el.id}>
                    <button
                      id={el.id}
                      aria-expanded={i == 0 ? "true" : "false"}
                    >
                      <span className="accordion-title">{el.question}</span>
                      <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                      <p dangerouslySetInnerHTML={{ __html: el.answer }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqsSection;
