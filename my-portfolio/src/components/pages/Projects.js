import React from "react";
import Project from "../Project";
import p1 from "../../images/eventfinder.png";
import p2 from "../../images/personalcookbook.png";
import p3 from "../../images/farmersnetwork.png";
import p4 from "../../images/portfolio.png";
import p5 from "../../images/weatherapp.png";
import p6 from "../../images/notetaker.png";

const projects = [
  {
    title: "Farmer's Network",
    description: "Personal project that I've been developing for years. It has recipes with dynamically calculated nutrition facts. Registered users can like/dislike and leave comments. Has in-site search feature. Recipe creator in beta testing.",
    resources: "React, Node.js, Express.js, MongoDB, JWT Auth",
    github: "https://github.com/duhl91/FarmersNetwork",
    deployed: "https://fathomless-citadel-36569.herokuapp.com/",
    image: p3,
    alt: "Farmer's Network"
  },
  {
    title: "Event Finder+",
    description: "Video streaming service with free and premium content. Has ability to purchase premium memberships. Integrates social collaboration elements (likes, comments, chat).",
    resources: "HTML, CSS, JavaScript, UIKit, Moment.js, Open Brewery DB, Google Maps API",
    github: "https://github.com/duhl91/Project1",
    deployed: "https://jhu-project1.github.io/Project1/",
    image: p1,
    alt: "Event Finder+"
  },
  {
    title: "Weather App",
    description: "This app uses the Open Weather Map One Call API to access the weather forecast for cities across the country, and displays them in a 5-day forecast format when a city is entered by the user.",
    resources:
      "HTML, CSS, JavaScript, OpenWeather API, Local Storage",
    github: "https://github.com/duhl91/WeatherApp",
    deployed: "https://duhl91.github.io/WeatherApp/",
    image: p5,
    alt: "Weather App",
  },
  {
    title: "Note Taker",
    description: "This simple application allows the user to enter, save, and delete notes, and uses Express.js to save and retrieve notes from a JSON file. ",
    resources:
      "HTML, CSS, JavaScript, Express",
    github: "https://github.com/duhl91/note-taker",
    deployed: "https://lit-wave-39195.herokuapp.com/",
    image: p6,
    alt: "Note Taker",
  },
  {
    title: "Personal Cookbook",
    description: "Allows registered users to search for recipes. Results are received from the Spoonacular API, and the users have the option of saving individual recipes to, or deleting them from, their own personal cookbooks.",
    resources:
      "HTML, CSS, JavaScript, Node, Express, Handlebars, MySQL, Axios, APIs",
    github: "https://github.com/duhl91/recipe-search",
    deployed: "https://tranquil-springs-98499.herokuapp.com/",
    image: p2,
    alt: "Personal Cookbook",
  },
  {
    title: "Portfolio",
    description: "This is my original portfolio made using HTML and W3 Styling.",
    resources: "HTML",
    github: "https://github.com/duhl91/Portfolio",
    deployed:
      "https://duhl91.github.io/Portfolio/",
    image: p4,
    alt: "Portfolio",
  },
];

export default function Projects() {
  return (
    <div className="work">
      <h2>Portfolio</h2>
      <div className="cards">
        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            resources={project.resources}
            github={project.github}
            deployed={project.deployed}
            image={project.image}
            alt={project.alt}
          />
        ))}
      </div>
    </div>
  );
}
