import React from "react";
import background from "../../images/pic1.webp";
import profilepic from "../../images/profile.jpeg";
function Nav(props) {
  return (
    <header>
      <div>
        <h1>Mozhdeh Khorashahi</h1>
        <nav>
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  props.changeScreen("Home");
                }}
                className="nav-a"
              >
                {" "}
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  props.changeScreen("Portfolio");
                }}
                className="nav-a"
              >
                {" "}
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  props.changeScreen("Contact");
                }}
                className="nav-a"
              >
                {" "}
                Contact Me
              </a>
            </li>
            <li>
              <a href="#" class="nav-a">
                {" "}
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="image-button">
        <img src={background} alt="stright line in picture 1" class="img"></img>
        <button
          type="button"
          class="button"
          style={{
            backgroundImage: `url(${profilepic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></button>
      </div>
    </header>
  );
}

export default Nav;
