import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Particles from "react-particles-js";

import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function App() {
  return (
    <div id="home"
      style={{
        backgroundColor: "#161616",
        backgroundSize: "cover",
        position: "static",
      }}
    >
      <ScrollContainer style={{ alignSelf: "center" }}>
        <Particles
          style={{
            position: "fixed",
          }}
          params={{
            particles: {
              number: { value: 30, density: { enable: true, value_area: 900 } },
              shape: { type: "circle", stroke: { width: 6, color: "black" } },
            },
          }}
        />
        <Navbar />
        
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -400))}>
            <span>
              <Header />
            </span>
          </Animator>
        </ScrollPage>

        <ScrollPage page={1} style={{ alignSelf: "center" }}>
          <div id="about"></div>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ alignSelf: "center", fontSize: "260%" }}>About</span>
            <br></br>
            <Animator animation={MoveIn(-300, 0)}>
              <span style={{ color: "white", fontSize: "150%" }}>
                Hi! I am Erdem,i have been studying Computer Engineering for 2
                years and Electronic Engineering for 1 year at Erciyes
                University.
                <br></br>
                <br></br>
              </span>
            </Animator>
            <Animator animation={MoveIn(-500, 0)}>
              <span style={{ color: "white", fontSize: "150%" }}>
                Here are some of my interests:<br></br>-AI <br></br>-ML
                <br></br>
                -Image Processing <br></br>-Automation Technologies <br></br>
                -Text Recognition
              </span>
            </Animator>
            <br></br>
            <Animator animation={MoveIn(-700, 0)}>
              <span style={{ color: "white", fontSize: "150%" }}>
                I am currently learning:<br></br>-Web and Mobile Developement
                with react and native. <br></br>-Java <br></br>-Arduino
              </span>
            </Animator>
          </Animator>
        </ScrollPage>

        <ScrollPage page={3} style={{ alignSelf: "center" }}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1500))}>
            <span style={{ color: "white", fontSize: "150%" }}>
              Some Of My Projects:
            </span>
          </Animator>
        </ScrollPage>
        <div id="projects"></div>
        <ScrollPage page={4} style={{ alignSelf: "center" }}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1500))}>
            <a
              href="https://github.com/ErdemIpek/ERU-BM-DuyuruApp"
              style={{ color: "white", fontSize: "150%" }}
            >
              An app i have developed using React Native
            </a>
          </Animator>
        </ScrollPage>

        <ScrollPage page={5} style={{ alignSelf: "center" }}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -5000))}>
            <a
              href="https://github.com/ErdemIpek/python-ocr"
              style={{ color: "white", fontSize: "150%" }}
            >
              My Handwritten Text Recognition App<br></br>
            </a>
          </Animator>
        </ScrollPage>
        <div id="websites"></div>
        <ScrollPage page={6} style={{ alignSelf: "center" }}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1500))}>
            <span style={{ color: "white", fontSize: "150%" }}>
              My Websites:<br></br>
            </span>
            <a
              href="https://github.com/ErdemIpek/"
              style={{ color: "white", fontSize: "140%" }}
            >
              -Github<br></br>
            </a>
            <a
              href="https://twitter.com/Erdempek16"
              style={{ color: "white", fontSize: "140%" }}
            >
              -Twitter<br></br>
            </a>
            <a
              href="https://www.linkedin.com/in/erdem-ipek-20118b195/"
              style={{ color: "white", fontSize: "140%" }}
            >
              -Linkedin<br></br>
            </a>
            <a
              href="https://www.instagram.com/erdemipek_/"
              style={{ color: "white", fontSize: "140%" }}
            >
              -Instagram<br></br>
            </a>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </Animator>
        </ScrollPage>
        
        <ScrollPage page={7} style={{ alignSelf: "center" }}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -1500))}>
            <span style={{ color: "white", fontSize: "200%" }}>
              How To Contact Me?<br></br>
            </span>
            <text style={{ color: "white", fontSize: "130%" }}>
              -You can send a mail to this adress : ei.erdemipek => gmail
            </text>
            <br></br>
            <text style={{ color: "white", fontSize: "130%" }}>
              -You can dm me using my twitter or instagram
            </text>
          </Animator>
        </ScrollPage>
        <div id="contact"></div>
        <ScrollPage page={8}>
          <Animator
            animation={batch(Fade(), Sticky(), MoveOut(0, -1500))}
          ></Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}

export default App;
