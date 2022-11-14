import { useState, useEffect } from "react";

const ProgressiveImg = ({ placeholderSrc, src, altsrc }) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  const customClass =
    placeholderSrc && imgSrc === placeholderSrc ? "loading" : "loaded";

  return (
    <img
        src={imgSrc}

        alt={altsrc || ""}
        className={`image ${customClass}`}
    />
  );
};
export default ProgressiveImg;