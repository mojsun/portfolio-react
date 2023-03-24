import React from "react";
import ledwall from "../../images/ledwall.jpeg";
import calculator from "../../images/calculator.jpeg";
import pastelpuzzles from "../../images/pastelpuzzles.jpeg";
import runbuddy from "../../images/run-buddy.jpeg";
import surfreport from "../../images/surf-report.jpeg";

function Portfolio() {
  return (
    <section>
      <h2 class="work">Work</h2>
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
            <h3>LED Wall</h3>
            <p> Node/Iot</p>
          </div>
        </div>

        <div
          class="m"
          style={{
            backgroundImage: `url(${calculator})`,
          }}
        >
          <div class="part">
            <h3>Calculator</h3>
            <p> React/Java script/ CSS</p>
          </div>
        </div>

        <div
          class="n"
          style={{
            backgroundImage: `url(${pastelpuzzles})`,
          }}
        >
          <div class="part">
            <h3>Pastel Puzzels</h3>
            <p>Mern stack</p>
          </div>
        </div>

        <div
          class="o"
          style={{
            backgroundImage: `url(${runbuddy})`,
          }}
        >
          <div class="part">
            <h3>Run Buddy</h3>
            <p>Html/CSS</p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Portfolio;
