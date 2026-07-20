import { useState } from "react";
import SkillCard from "./SkillCard";

const categories = [
  { id: "ai", label: "AI & Data Science" },
  { id: "fullstack", label: "Full Stack" },
  { id: "tools", label: "Tools & DevOps" },
];

const skillItem = [
  // AI & Data Science
  {
    imgSrc: "/images/python-svgrepo-com.svg",
    label: "Python",
    desc: "Data & AI",
    category: "ai",
  },
  {
    imgSrc: "/images/pytorch.svg",
    label: "PyTorch",
    desc: "Deep Learning",
    category: "ai",
  },
  {
    imgSrc: "/images/tensorflow.svg",
    label: "TensorFlow",
    desc: "Machine Learning",
    category: "ai",
  },
  {
    imgSrc: "/images/scikitlearn.svg",
    label: "Scikit-learn",
    desc: "ML Models",
    category: "ai",
  },
  {
    imgSrc: "/images/pandas.svg",
    label: "Pandas",
    desc: "Data Analysis",
    category: "ai",
  },
  {
    imgSrc: "/images/numpy.svg",
    label: "NumPy",
    desc: "Numerical Computing",
    category: "ai",
  },
  {
    imgSrc: "/images/opencv.svg",
    label: "OpenCV",
    desc: "Computer Vision",
    category: "ai",
  },
  {
    imgSrc: "/images/openvino.svg",
    label: "OpenVINO",
    desc: "Model Optimization",
    category: "ai",
  },
  {
    imgSrc: "/images/jupyter.svg",
    label: "Jupyter",
    desc: "Notebooks",
    category: "ai",
  },

  // Full Stack
  {
    imgSrc: "/images/html-5-svgrepo-com.svg",
    label: "HTML",
    desc: "Content Structure",
    category: "fullstack",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
    category: "fullstack",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
    category: "fullstack",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
    category: "fullstack",
  },
  {
    imgSrc: "/images/nextdotjs.svg",
    label: "Next.js",
    desc: "React Framework",
    category: "fullstack",
  },
  {
    imgSrc: "/images/php3-svgrepo-com.svg",
    label: "Php",
    desc: "Server Logic",
    category: "fullstack",
  },
  {
    imgSrc: "/images/laravel-svgrepo-com.svg",
    label: "Laravel",
    desc: "Framework",
    category: "fullstack",
  },
  {
    imgSrc: "/images/mysql-svgrepo-com.svg",
    label: "Mysql",
    desc: "Database",
    category: "fullstack",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
    category: "fullstack",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
    category: "fullstack",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
    category: "fullstack",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
    category: "fullstack",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "CSS Library",
    category: "fullstack",
  },
  {
    imgSrc: "/images/bootstrap-svgrepo-com.svg",
    label: "Bootstrap",
    desc: "UI Framework",
    category: "fullstack",
  },

  // Tools & DevOps
  {
    imgSrc: "/images/git-svgrepo-com.svg",
    label: "Git",
    desc: "Version Control",
    category: "tools",
  },
  {
    imgSrc: "/images/github-svgrepo-com.svg",
    label: "GitHub",
    desc: "Code Collaboration",
    category: "tools",
  },
  {
    imgSrc: "/images/gitlab-svgrepo-com.svg",
    label: "Gitlab",
    desc: "DevOps Platform",
    category: "tools",
  },
  {
    imgSrc: "/images/docker-svgrepo-com.svg",
    label: "Docker",
    desc: "Containerization",
    category: "tools",
  },
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
    category: "tools",
  },
  {
    imgSrc: "/images/jira-svgrepo-com.svg",
    label: "Jira",
    desc: "Project Management",
    category: "tools",
  },
  {
    imgSrc: "/images/sonarqube-svgrepo-com.svg",
    label: "Sonarqube",
    desc: "Code Quality",
    category: "tools",
  },
];

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState("ai");

  const filteredSkills = skillItem.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section className="pt-20">
      <div className="container">
        <h2 className="headline-2">Essential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-6 max-w-[50ch]">
          Tools I use to build intelligent systems, data-driven apps, and modern
          web platforms.
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setActiveCategory(id)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeCategory === id
                  ? "bg-sky-400 text-zinc-950"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {filteredSkills.map(({ imgSrc, label, desc }, key) => (
            <SkillCard imgSrc={imgSrc} label={label} key={key} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
