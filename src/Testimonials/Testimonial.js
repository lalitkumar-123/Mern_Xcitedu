import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <>
    <div class="headers m-5" style={{color:"#0c7d81",display: "flex", justifyContent: "center"}}>TESTIMONIALS</div>
    <div
      className="testimonial mb-5"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} autoplay={true}>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/1.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/2.jpg" />
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/3.jpg" />
        </Slider>
      </div>
    </div>
    </>
  );
};

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid #4bc5b8",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p style={{fontWeight: "bold"}}>
        I am really happy to share my experience with Xcite education as a top student. I love their way how they consistently asked form my parents about my progress, how they provided me the extra knowledge being a top student. There were also games and activities every weekend that actually brought me close towards my goal and my family.
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: "bold", color: "green" }}>PAULA WILSON</span> ,
        Student
      </p>
    </div>
  );
};

export default Testimonial;