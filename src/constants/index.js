import project1 from "../assets/projects/ai-travel-planner.jpeg";
import project2 from "../assets/projects/Care-Pulse.jpeg";
import project4 from "../assets/projects/Code.jpeg";
import project3 from "../assets/projects/File-zipper.jpeg";


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Course Tutor",
    company: "Course Hero",
    description: `Utilizing my deep understanding of Computer Science principles, I created comprehensive and step-by-step solutions to a wide range of academic problems.`,
    technologies: ["Data Structures & Algorithm", "C++", "JavaScript", "Python","Java","HTML","CSS",],
  }
];

export const PROJECTS = [
  {
    title: "TravelGuide.AI",
    image: project1,
    link:"https://ai-travel-guide-nine.vercel.app/",
    description:
      "A personal trip planner and travel curator, creating custom Itineraries tailored to your interests and budget.",
    technologies: ["React", "Firebase", "Tailwind CSS", "Gemini AI"],
  },
  {
    title: "Care Pulse",
    image: project2,
    link:"https://patient-managment.vercel.app/",
    description:"A Healthcare Patient Managment System application enabling patients to register, book and manage doctor appointments.",
    technologies: ["NextJs", "Appwrite", "Tailwind CSS", "Twilio"],
  },
  {
    title: "Trading Platform Algorithm",
    image: project4,
    link:"https://github.com/ShikharJoshi98/Trading-Platform-Algorithm",
    description:"A robust order book system to handle and process high-frequency trading orders efficiently.",
    technologies: ["Express", "Typescript"],
  },
  {
    title: "File Zipper",
    image: project3,
    link:"https://file-zipper-project.vercel.app/",
    description:
      "A File compression tool implemented using Huffman coding",
    technologies: ["HTML", "CSS", "Javascript"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+919560718250 ",
  email: "shikharjoshi89@gmail.com",
};
