import React from "react";

export function ScrollToTop() {
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      <button className="scroll-to-top__button" onClick={scrollToTop}>
        Back To Top
      </button>
    </div>
  );
}
