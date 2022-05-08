import React, { useState } from "react";

export default function Hero() {
    const [step, setStep] = useState(0);
    return (
        <section
            className="slideshow slideshow-wrapper jumbotron mb-5"
            style={{
                backgroundImage: `url(assets/images/slideshow/demo4-banner1.jpg)`,
                height: "70vh"
            }}
        >

        </section>
    );
}
