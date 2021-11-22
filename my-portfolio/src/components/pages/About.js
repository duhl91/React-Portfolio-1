import React from "react";
import profilePic from "../../images/self.jpg";

export default function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img className="picture" src={profilePic} alt="Dalton Uhl" />
      <p>Hello! My name is Dalton Uhl and I am currently a student enrolled in the Johns Hopkins Coding Bootcamp. I have been interested in this field for a long time and have finally taken the first step down the path of becoming a Full Stack Developer. Here you will find my portfolio of personal and professional projects that showcase my experience, as well as my attached resume and contact information. Feel free to visit my <a href="https://github.com/duhl91">GitHub Profile</a> for my Repo History!
    </p>
    </div>
  );
}