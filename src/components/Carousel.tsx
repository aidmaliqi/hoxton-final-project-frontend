import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ComponentStyles/Carousel.css"
export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-div">
      <h2> Visit beautiful places with our services!</h2>
      <Slider {...settings} className="slider-div">
        <div id="grid-carousel">
          <section className="carousel-firstrow">
            <div> <h1>Antartica</h1>
              <img  className="imgimg"
              src="https://images.pexels.com/photos/48814/penguins-emperor-antarctic-life-48814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div><h1>Angola</h1><img className="imgimg" src="https://images.pexels.com/photos/1060803/pexels-photo-1060803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
            <div><h1>Albania</h1><img className="imgimg" src="https://images.pexels.com/photos/188030/pexels-photo-188030.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /></div>
          </section>
          <section className="carousel-secondrow">
            <div><h1>Argentina</h1><img className="imgimg" src="https://content.r9cdn.net/rimg/dimg/77/75/979caaae-city-103496-173af635417.jpg?width=1366&height=768&xhint=2202&yhint=1393&crop=true" alt="" /></div>
            <div><h1>Andorra</h1><img className="imgimg" src="https://images.pexels.com/photos/4319044/pexels-photo-4319044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
          </section>
        </div>
        <div className="grid-carousel">
          <section className="carousel-firstrow">
            <div></div>
            <div>d</div>
            <div>d</div>
          </section>
          <section className="carousel-secondrow">
            <div>d</div>
            <div>d</div>
          </section>
        </div>
        <div className="grid-carousel">
          <section className="carousel-firstrow">
            <div>d</div>
            <div>d</div>
            <div>d</div>
          </section>
          <section className="carousel-secondrow">
            <div>d</div>
            <div>d</div>
          </section>
        </div>
      </Slider>
    </div>
  );
}
