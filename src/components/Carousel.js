import Slider from "react-slick";
import img1 from "../Assets/Image/getir-mainpage-1.jpg";
import img2 from "../Assets/Image/getir-mainpage-2.jpg";
import img3 from "../Assets/Image/getir-mainpage-3.jpg";
import img4 from "../Assets/Image/getir-mainpage-4.jpg";

export default function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
  };
  return (
    <Slider {...settings} className="h-full ">
      <div>
        <img
          src={img1}
          className="w-full h-[500px] object-center object-cover"
        />
      </div>
      <div>
        <img
          src={img2}
          className="w-full h-[500px] object-center object-cover "
        />
      </div>
      <div>
        <img
          src={img3}
          className="w-full h-[500px] object-center object-cover"
        />
      </div>
      <div>
        <img
          src={img4}
          className="w-full h-[500px] object-center object-cover"
        />
      </div>
    </Slider>
  );
}
