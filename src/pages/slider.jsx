/**
 * @function: Slider Function displays 3 images with a slider to switch between the images.
 *            The images are taken from picsum.photos.
 *            Imported react-simple-image-slider Module for the basic setup.
 * 
 * @version 1.0
 * @author Aayush Prakash Budania <aayushbudania002@gmail.com>
 */

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://picsum.photos/id/237/896/504" },
  { url: "https://picsum.photos/id/238/896/504" },
  { url: "https://picsum.photos/id/239/896/504" },
];

const Slider = () => {
  return (
    <center>
      <div className="mt-16">
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true} ////👈️ Bulletpoints to view current image. ////
          showNavs={true} ////👈️ Slider to switch images. ////
        />
      </div>
    </center>
  );
};

export default Slider;