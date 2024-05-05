import React, { useEffect } from "react";
import "../jquery.tagcanvas" // Certifique-se de ter instalado o pacote tagcanvas corretamente

function TechGlobe() {
  useEffect(() => {
    // Inicialize o tagcanvas
    if (window.TagCanvas) {
      window.TagCanvas.Start("myCanvas", "", {
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
      });
    }
  }, []);

  return (
    <div id="myCanvasContainer">
      <canvas width="500" height="500" id="myCanvas">
        <ul id="tags">
          <li>
            <a href="#" target="_blank">
              HTML
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              CSS
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              ES5
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              TypeScript
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              REST
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              JSON
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              GSAP
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Data Science
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Wordpress
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              PHP
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Python
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Node JS
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Git
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              _lodash
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              SASS
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              JQuery
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              SQI
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Gulp
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              npm
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              BEM
            </a>
          </li>
        </ul>
      </canvas>
    </div>
  );
}

export default TechGlobe;
