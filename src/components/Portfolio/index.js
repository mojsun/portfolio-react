import React from "react";
import ledwall from "../../images/ledwall.jpeg";
import weatherdashboard from "../../images/weatherdashboard.jpeg";
import pastelpuzzles from "../../images/pastelpuzzles.jpeg";
import questions from "../../images/questions.jpeg";
import surfreport from "../../images/surf-report.jpeg";

function Portfolio() {
  return (
    <section>
      <h2 class="work">Work:</h2>
      <article class="grid">
        <div
          class="k"
          style={{
            backgroundImage: `url(${surfreport})`,
          }}
        >
          <div class="part-a">
            <h3>Surf Report</h3>
            <p> Mern stack</p>
          </div>
        </div>

        <div
          class="l"
          style={{
            backgroundImage: `url(${ledwall})`,
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
            backgroundImage: `url(${pastelpuzzles})`,
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
