import React from "react";
import teamMembers from "../../public/teamMembers.json"; // Ensure this path is correct
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {
  const githubProjectLink = "https://github.com/surabhix/MERN_bookstore"; // Replace with your GitHub project link

  const specialFeatures = [
    {
      id: 1,
      title: "Interactive Learning Guides",
      description: "Engage with multimedia-rich guides, including videos, quizzes, and simulations, to enhance comprehension and retention."
    },
    {
      id: 2,
      title: "Collaborative Study Spaces",
      description: "Join virtual study rooms for real-time discussions, shared annotations, and collaborative note-taking with peers."
    },
    {
      id: 3,
      title: "Customizable Reading Experience",
      description: "Adjust font sizes, colors, and accessibility features to tailor the reading experience to individual preferences and needs."
    }
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 items-start md:items-center">
        <div className="w-full md:w-1/2 flex flex-col md:justify-center md:mt-0 mt-8 space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">About Us</h1>
          <p>
            We are a passionate team dedicated to providing the best educational
            resources. Meet our team members who make it all happen.
          </p>
          <ul className="space-y-4">
            {teamMembers.map((member) => (
              <li key={member.id} className="text-lg">
                {member.name}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href={githubProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Visit our GitHub Project
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/team.jpg" // Ensure the path is correct
            className="w-full md:w-[650px] md:h-[560px] object-cover rounded-lg"
            alt="Team"
          />
        </div>
      </div>

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center my-10">Our Special Features</h2>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          {specialFeatures.map((feature) => (
            <div key={feature.id} className="flex-1 bg-black-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
