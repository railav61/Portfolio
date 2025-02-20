// import "./App.css";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import MacContainer from "./MacContainer";
import Cyl from "./Cyl";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from "./projects";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Falling from "./Falling";
import { useNavigate } from "react-router-dom";

function Home() {
  const typedRef = useRef(null);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  const navigate = useNavigate();
  function formHandle() {
    navigate("/form");
  }
  return (
    <div className="w-full h-full bg-black overflow-hidden">
      <div className="w-full absolute top-10 flex justify-between font-['Helvetica Now Display'] text-white z-10 px-10">
        <h3 className="text-7xl tracking-tighter font-[700]">
          Hey<span className="text-red-600">...</span>
        </h3>
        <img
          src="/myimg1.png"
          alt="myimg"
          className="rounded-full w-36 h-36 border-8 border-red-600"
        />
      </div>
      <div className="w-screen h-fit">
        <Canvas flat camera={{ fov: 75 }} style={{ height: "800px" }}>
          <ambientLight />
          <Cyl />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={35.0} // The bloom intensity.
              luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
              luminanceSmoothing={0.8} // smoothness of the luminance threshold. Range is [0, 1]
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
      </div>
      <div className="h-full w-screen pl-10">
        <div className="absolute bottom-10 text-[50px] font-[700]">
          <div className="text-white">I am Mritunjay Rai</div>
          <div className="text-white">
            I am a <span className="role text-red-600" ref={typedRef}></span>
          </div>
        </div>
      </div>
      <div className="w-screen flex flex-row h-screen bg-black">
        <div className="absolute -bottom-80 left-36 w-20 h-20  bg-red-600 blur-3xl rounded-full"></div>
        <div className="font-['Helvetica Now Display'] text-white w-1/2 h-fit p-5 ml-20 my-auto rounded-xl bg-slate-300 bg-opacity-30 z-10">
          <h1 className="text-7xl tracking-tighter font-[700]">About Me.</h1>
          <div className="text-lg w-full flex flex-col gap-3 tracking-tighter font-medium mt-8">
            <p className="">
              Hi, I'm{" "}
              <span className="text-xl text-red-600">Mritunjay Rai</span>, a
              passionate and dedicated 4th-year B.Tech student in Computer
              Science and Engineering (CSE). With a strong foundation in Data
              Structures and Algorithms (DSA), I have developed a diverse skill
              set in web development and problem-solving.
            </p>
            <p>
              I specialize in building responsive, user-friendly web
              applications using the MERN stack (MongoDB, Express, React, and
              Node.js). My technical skills extend to languages such as C, C++,
              Java, JavaScript, SQL, and modern web technologies including
              HTML5, CSS3, Tailwind CSS, and React.js. I am experienced in
              frontend development with React, backend development with Node.js,
              and database management with MongoDB Atlas.
            </p>
            <p>
              Currently, I'm involved in several exciting projects, including a
              public funds collection webpage named FundDonate and a
              course-selling web app called coursxyz. I thrive on learning new
              technologies and continuously refining my skills to solve complex
              challenges effectively.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="absolute -bottom-[530px] right-[290px] w-36 h-60 opacity-30 bg-red-600 blur-3xl rounded-full"></div>
          <Canvas camera={{ fov: 10, position: [0, -10, 220] }}>
            <Environment
              files={[
                "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
              ]}
            />
            <MacContainer />
          </Canvas>
        </div>
      </div>
      <div className="w-screen h-screen">
        <h1 className="text-7xl w-full tracking-tighter font-[700] text-white text-center">
          Projects.
          <hr className="mt-5 mx-auto font-bold w-72 h-3" />
        </h1>
        <div className="flex flex-row justify-between">
          <div className="w-1/2 h-screen mx-auto">
            <Canvas camera={{ fov: 10, position: [0, -10, 220] }}>
              <Environment
                files={[
                  "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
                ]}
              />
              <Falling />
            </Canvas>
          </div>
          <div className="flex-row gap-3 text-white my-auto mr-32">
            <div className="w-[545px] ">
              <Slider {...settings}>
                {projects.map((e) => (
                  <Card key={e.name} sx={{ maxWidth: 545 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image={e.img_ref}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {e.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {e.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">
                        <a
                          href={e.ref_link}
                          target="blank"
                          className="font-bold"
                        >
                          OPEN
                        </a>
                      </Button>
                    </CardActions>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="font-['Helvetica Now Display'] w-screen h-screen flex flex-col justify-center items-center text-white">
        <div className=" mx-60 bg-slate-400 rounded-lg p-10 bg-opacity-10">
          <h1 className="text-7xl tracking-tighter font-[700]">My Approach</h1>
          <p className="pt-10 text-lg">
            I am someone who believes in the power of kindness, support, and a
            good sense of humor. I love helping others and making them happy,
            whether through sharing advice, lending a hand, or simply cracking a
            joke to lighten the mood. Even when people don’t take my words
            seriously, I continue to stand by them because I know that being
            there for others, with a smile, makes a difference.
          </p>
          <p className="pt-5 text-lg">
            I am also deeply dedicated to my work, approaching every task with
            determination and commitment. At the same time, I cherish the
            moments I spend with my friends and family. I always make time for
            those who matter most to me, finding joy in their company and the
            laughter we share. Balancing hard work with meaningful connections
            is what drives me and makes my journey worthwhile.
          </p>
        </div>
      </div>
      <div className="text-white px-10 py-5 w-full h-fit bg-slate-400 bg-opacity-10">
        <div>
          If you have any query or want any help you can send it to me through
          this form -{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => {
              formHandle();
            }}
          >
            click here
          </span>
        </div>
        <br />
        <div className=" flex flex-row justify-between">
          <a href="tel:+919555967823">Call: +91 9555967823</a>
          <div>
            <a href="mailto:mritunjay102004@gmail.com" target="blank">
              gmail: mritunjay102004@gmail.com
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/mritunjay-rai-uf61/"
              target="blank"
            >
              linkedin: mritunjay-rai-uf61
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
