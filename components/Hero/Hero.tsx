import React, { useState } from "react";
import img from "@assets/images/slideshow/demo4-banner1.jpg";

export default function Hero() {
    const [step, setStep] = useState(0);
    return (
      <section
        className="slideshow slideshow-wrapper jumbotron mb-5"
        style={{
          backgroundImage: `url(https://i.ytimg.com/vi/U5Q3Du2W9a0/maxresdefault.jpg)`,
          height: "70vh",
        }}
      ></section>
    );
}
