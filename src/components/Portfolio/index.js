import React from "react";
import techblog from "../../images/Tech-blog.jpeg";
import weatherdashboard from "../../images/weatherdashboard.jpeg";
import twonotes from "../../images/two-notes.jpeg";
import questions from "../../images/questions.jpeg";
import travelerschoice from "../../images/travelerschoice.jpeg";

function Portfolio() {
  return (
    <section>
      <h2 class="work">Work:</h2>
      <article class="grid">
        <div
          class="k"
          style={{
            backgroundImage: `url(${travelerschoice})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="part-a">
            <h3>Traveler's Choice</h3>
            <a href="https://shaynefw.github.io/TravelersChoice/">
              {" "}
              Traveler's Choice
            </a>
            <p> Traveler's Choice</p>
          </div>
        </div>

        <div
          class="l"
          style={{
            backgroundImage: `url(${techblog})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="part">
            <h3>TechBlog</h3>
            <a href="https://mojsun.github.io/Tech-Blog/">TechBlog</a>
            <p> Node</p>
          </div>
        </div>

        <div
          class="m"
          style={{
            backgroundImage: `url(${weatherdashboard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="part">
            <h3>weather Dashboard</h3>
            <a href="https://mojsun.github.io/weather-dashbord/">
              {" "}
              weather dashboard
            </a>
            <p> API /Java script/ CSS</p>
          </div>
        </div>

        <div
          class="n"
          style={{
            backgroundImage: `url(${twonotes})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="part">
            <h3>two notes</h3>
            <a href="https://safe-plateau-71069.herokuapp.com/notes">
              two notes
            </a>
            <p>java script</p>
          </div>
        </div>

        <div
          class="o"
          style={{
            backgroundImage: `url(${questions})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div class="part">
            <h3>questions</h3>
            <a href="https://mojsun.github.io/questions/">questions</a>
            <p>Html/CSS</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Portfolio;
