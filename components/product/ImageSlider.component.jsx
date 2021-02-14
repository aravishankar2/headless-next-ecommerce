import React, { useState } from "react";
import Image from "next/image";
import { SRLWrapper } from "simple-react-lightbox";
const options = {
  settings: {},
  caption: {
    showCaption: false,
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
  progressBar: {},
};

const ImageSlider = ({ data }) => {
  const [current, setCurrent] = useState(0);

  if (!Array.isArray(data) || data.length <= 0) {
    return null;
  }
  return (
    <section className="slider">
      {data.map(({ public_id, context }, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <SRLWrapper options={options}>
                  <Image
                    key={index}
                    src={public_id}
                    layout="responsive"
                    width={100}
                    height={100}
                    alt={public_id}
                  />
                </SRLWrapper>

                <p className="text-muted">
                  <em>{context ? context.custom.caption : null}</em>
                </p>
              </div>
            )}
          </div>
        );
      })}

      <div className="d-flex flex-wrap mt-4 mb-3 w-100 grid-container">
        {data.map(({ public_id }, index) => {
          return (
            <div key={index} className="w-25">
              <div
                className={`grid-item m-0  ${
                  index === current ? "selected-image" : ""
                }`}
              >
                <Image
                  onClick={() => {
                    setCurrent(index);
                  }}
                  key={index}
                  src={public_id}
                  layout="responsive"
                  width={100}
                  height={100}
                  alt={public_id}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const HandleImage = ({ productImage }) => {
  return productImage ? (
    <div>
      {productImage.length > 1 ? (
        <ImageSlider data={productImage} />
      ) : (
        <div>
          <SRLWrapper options={options}>
            <Image
              key={index}
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
