import React, { Component } from "react";
import "./Baariz.css";
import user from "../Images/Screenshot_1.png";
import Card from "react-bootstrap/Card";
import num from "../Images/Screenshot_2.png";
import img1 from "../Images/img1.jpg";

class Baariz extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                Navbar
              </a>

              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-link" href="#">
                    Why CA
                  </a>
                  <a class="nav-link" href="#">
                    Our Solutions
                  </a>
                  <a class="nav-link" href="#">
                    About Us
                  </a>
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                  <a class="nav-link" href="#">
                    Sign Up
                  </a>
                  <a class="nav-link" href="#">
                    Log In
                  </a>
                  <button className="btn1">Book a Demo</button>
                  <a class="nav-link" href="#">
                    EN/AR
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="Hiring">
          {" "}
          <div className="section1">
            <h1 className="h1tag">
              Hiring is hard <br /> We've made <br />
              it <span className="easy">easy</span>
            </h1>
          </div>
          <div className="section2">
            <img src={user} alt="user" />
          </div>
        </div>
        <div className="recruit">
          <span className="we_are"> We are </span>smart
          <br />
          Recruitment
        </div>
        <div className="challenge">
          <h1 style={{ fontSize: "35px" }}>
            What are your biggest hiring challenges?
          </h1>
          <br />

          <strong>Select a few to see your candidate bazaar solutions</strong>
        </div>
        <div className="cards">
          <Card className="incards">
            <Card.Body>
              <Card.Text>I don't have enough time to recruit</Card.Text>
            </Card.Body>
          </Card>
          <Card className="incards">
            <Card.Body>
              <Card.Text>I struggle to attract candidates</Card.Text>
            </Card.Body>
          </Card>
          <Card className="incards">
            <Card.Body>
              <Card.Text>I can't keep track of applications</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="bgtext">
          <h1>
            Why does the best talent
            <br />
            join Candidate Bazaar?
          </h1>
          <p>Save time by only interacting with pre-assessed candidates</p>
        </div>
        <div className="bgtext2">
          <div className="cards2">
            <Card className="incards2">
              <Card.Body></Card.Body>
            </Card>
            <Card className="incards2">
              <Card.Body></Card.Body>
            </Card>
            <Card className="incards2">
              <Card.Body></Card.Body>
            </Card>
            <Card className="incards2">
              <Card.Body></Card.Body>
            </Card>
          </div>
          <div className="strup">
            <p>
              The all-in-one hiring <br />
              stack for startups.
            </p>
          </div>
          <div>
            <img src={num} alt="numbers" className="img1" />
            <div className="imgtext">
              <p className="text">Build your hiring brand</p>
              <p className="text2">Discover great talent</p>
              <p className="text3">Convert with speed</p>
            </div>
          </div>
        </div>
        <div className="customer">What do our customers think?</div>
        <div className="imgcards">
          <div>
            <img src={img1} alt="userimage" className="stvimg" />
            <div className="stvtext">
              Steve Jobs
              <br />
              <small style={{ fontWeight: 100 }}>CEO of Apple.inc</small>
              <button className="btnread">Read more</button>
            </div>
          </div>
          <div>
            <img src={img1} alt="userimage" className="stvimg" />
            <div className="stvtext">
              Steve Jobs
              <br />
              <small style={{ fontWeight: 100 }}>CEO of Apple.inc</small>
            </div>
          </div>{" "}
          <div>
            <img src={img1} alt="userimage" className="stvimg" />
            <div className="stvtext">
              Steve Jobs
              <br />
              <small style={{ fontWeight: 100 }}>CEO of Apple.inc</small>
            </div>
          </div>{" "}
          <div>
            <img src={img1} alt="userimage" className="stvimg" />
            <div className="stvtext">
              Steve Jobs
              <br />
              <small style={{ fontWeight: 100 }}>CEO of Apple.inc</small>
            </div>
          </div>
        </div>
        <div className="can_bazaar">
          <h1 className="can_bazaar2">Candidate Bazaar</h1>
          <div className="status">
            <div>
              <span className="can_num">1276</span>
              <br />
              Candidates
            </div>
            <div>
              <span className="can_num">9233</span>
              <br />
              Live Jobs
            </div>
            <div>
              <span className="can_num">9654</span>
              <br />
              Hiried
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", paddingBottom: "35px" }}>
          <h1 className="can_bazaar3">Welcome to a more</h1>
          <button className="btn_demo">Book a Demo </button>
        </div>
        <div className="About">
          <table className="Abt_text">
            <tr>
              <td>Why CA</td>
              <td>About Us</td>
              <td>Find Jobs</td>
              <td>Discover Companies</td>
              <td>Find People</td>
              <td>FAQ</td>
              <td>Careers</td>
            </tr>
            <tr>
              <td>Our Solutions</td>
              <td>Pricing</td>
              <td>Find Employers</td>
              <td>Learn More</td>
              <td>Sign Up</td>
              <td>Vlog</td>
              <td>Contact</td>
            </tr>
          </table>
          <hr />
          <table className="abt_text2">
            <tr>
              <td>Email Us</td>
              <td>Phone Us</td>
              <td>Find Us</td>
              <td>Download App</td>
            </tr>
            <tr>
              <td>inf@candidatebazaar.in</td>
              <td>+919014319132</td>
              <td>
                Baariz Technology solutions
                <br />
                office No 15,MSR insurence building
              </td>
              <td>
                <button className="google">
                  <small style={{ fontSize: "9px" }}>ANDROID APP ON</small>{" "}
                  <br />
                  <i
                    className="fa-brands fa-google-play"
                    style={{
                      position: "relative",
                      right: "15px",
                    }}
                  ></i>
                  <small
                    style={{
                      position: "relative",
                      fontSize: "15px",
                      right: "8px",
                      bottom: "5px",
                    }}
                  >
                    Google Play
                  </small>
                </button>
                <button className="google">
                  {" "}
                  <small style={{ fontSize: "9px" }}>Download on the</small>
                  <br />
                  <i
                    className="fa-brands fa-apple"
                    style={{
                      position: "relative",
                      right: "15px",
                    }}
                  ></i>
                  <small
                    style={{
                      position: "relative",
                      fontSize: "15px",
                      right: "8px",
                      bottom: "5px",
                    }}
                  >
                    App Store
                  </small>
                </button>
              </td>
            </tr>
          </table>
          <hr />
          <table style={{ width: "40%" }}>
            <tr>
              <td>Terms and Conditions</td>
              <td>Privacy</td>
              <td>Cookies</td>
              <td className="follow">
                Follow Us{" "}
                <span>
                  <i className="fa-brands fa-facebook"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-linkedin"></i>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Baariz;
