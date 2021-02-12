import React, { useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { SRLWrapper } from "simple-react-lightbox";
const options = {
  settings: {},
  caption: {
    showCaption: false
  },
  buttons: {
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    showAutoplayButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
  progressBar:{},
  translations: {}, // PRO ONLY
  icons: {} // PRO ONLY
}
const ImageSlider = ({ data }) => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      <BsChevronLeft
        onClick={() => prevSlide()}
        className="left-arrow"
        style={{ opacity: "0.3" }}
      />
      <BsChevronRight
        className="right-arrow"
        onClick={() => nextSlide()}
        style={{ opacity: "0.3" }}
      />
     
      {data.map(({ public_id, context }, index) => {
        return (
          
          <SRLWrapper options={options}>
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
            style={{ height: "100%", width: "100%" }}
          >
            {index === current && (
              <div>
                
                <Image
                  key={public_id}
                  src={public_id}
                  layout="responsive"
                  width={100}
                  height={100}
                  alt={public_id}
                />
             
                <p className="text-muted">
                  <em>{context ? context.custom.caption : null}</em>
                </p>
              </div>
            )}
          </div>
          </SRLWrapper>

        );
      })}


    </section>
  );
};

const HandleImage = ({ productImage }) => {
  return productImage ? (
  
    <div className="mb-4">
      {productImage.length > 1 ? (
        
        <ImageSlider data={productImage} />
      ) : (
        <div>
          <SRLWrapper options={options}>
          <Image
            key={productImage[0].public_id}
            src={productImage[0].public_id}
            layout="responsive"
            width={200}
            height={200}
            alt={productImage[0].public_id}
          />
          </SRLWrapper>
          <p className="text-muted">
            <em>
              {productImage[0].context
                ? productImage[0].context.custom.caption
                : null}
            </em>
          </p>
        </div>
      )}
    </div>
  ) : (
    <em>please add image..</em>
  );
};

export default HandleImage;
