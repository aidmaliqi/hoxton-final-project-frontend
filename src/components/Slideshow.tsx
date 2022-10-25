import { useState, useEffect } from "react";
import "./ComponentStyles/slideshow.css";
export function Slideshow() {
  const [index, setIndex] = useState(0);
  const delay = 10000;
  const images = [
    "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://shopify-customerio.s3.amazonaws.com/tools/image_attachment/image/custom_resized_1a29ede1-13af-4354-bcc1-5083fd758be7.jpeg",
    "https://images.pexels.com/photos/91217/pexels-photo-91217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  useEffect(() => {
    setTimeout(
      () => setIndex((Index) => (Index === images.length - 1 ? 0 : Index + 1)),
      delay
    );

    return () => {};
  }, [index]);
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate(${-index * 100}%, 0)` }}
      >
        {images.map((item, index) => (
          <img
            src={item}
            className="slide"
            key={index}
            // style={{ backgroundImage: `url(${item})`  }}
          ></img>
        ))}
      </div>
      <div className="slideshowButtons">
        {images.map((item, Index) => (
          <div
            key={Index}
            className={`slideshowButton${Index === index ? " active" : ""}`}
            onClick={() => {
              setIndex(Index);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
