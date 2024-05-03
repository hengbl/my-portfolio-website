import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import bbImg from "@/public/biasbuster.png";
import chImg from "@/public/connecthub.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Analyst Intern, SGInnovate",
    location: "Singapore",
    description:
      "XXX",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Jul 2023",
  },
  {
    title: "Data Analyst Intern, Affyn",
    location: "Singapore",
    description:
      "XXX",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Jan 2024",
  },
  {
    title: "AI/Data Intern, Deloitte Consulting",
    location: "Singapore",
    description:
      "XXX",
    icon: React.createElement(FaReact),
    date: "May 2024 - Aug 2024",
  },
  {
    title: "Software Engineer Intern, Policyme",
    location: "Toronto, Ontario",
    description:
      "XXX",
    icon: React.createElement(FaReact),
    date: "Aug 2024 - Jul 2025",
  },
] as const;

export const projectsData = [
  {
    title: "BiasBusters",
    description:
      "BiasBusters is a telegram bot that provides sentiment analysis on any NUS module through Reddit reviews and using our pre-trained ML model.",
    tags: ["Python", "MongoDB", "Scikit-Learn", "TensorFlow", "Telebot"],
    imageUrl: bbImg,
    githubUrl: "https://github.com/hengbl/BiasBusters",
  },
  {
    title: "ConnectHub",
    description:
      "ConnectHub is a website that aims to bring our community together by allowing users to create community interest groups and sell/buy items within their neighbourhood.",
    tags: ["Vue.js", "Firebase", "Git", "Figma"],
    imageUrl: chImg,
    githubUrl: "https://github.com/BT3103AppDev1/l2-final-term-project-l2-group-15",
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "R",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Tableau",
  "Alteryx",
  "Google Cloud Platform",
  "Amazon Web Service"
] as const;