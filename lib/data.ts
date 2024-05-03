import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import bbImg from "@/public/biasbuster.png";
import chImg from "@/public/connecthub.png";
import hdbImg from "@/public/hdb.png";
import airflowImg from "@/public/airflow.png";

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
      "A telegram bot that provides sentiment analysis on any NUS module through Reddit reviews and using our pre-trained ML model.",
    tags: ["Python", "MongoDB", "Scikit-Learn", "TensorFlow", "Telebot"],
    imageUrl: bbImg,
    githubUrl: "https://github.com/hengbl/BiasBusters",
  },
  {
    title: "ConnectHub",
    description:
      "A website that aims to bring our community together by allowing users to create community interest groups and sell/buy items within their neighbourhood.",
    tags: ["Vue.js", "Javascript", "Firebase", "Git", "Figma"],
    imageUrl: chImg,
    githubUrl: "https://github.com/BT3103AppDev1/l2-final-term-project-l2-group-15",
  },
  {
    title: "SGCarForecast",
    description: "An ETL pipeline to scrape second-hand car listings from online car marketplaces and train a predictive model for price forecasting based on latest market trends daily.",
    tags: ["Python", "Apache Airflow", "Google Cloud Platform", "Scikit-Learn"],
    imageUrl: airflowImg,
    githubUrl: "https://github.com/siruislybro/IS3107_Group32",
  },
  {
    title: "HDB Resale Price Prediction",
    description: "Trained multiple classification models to accurately predict prices of SG HDB resale flats from 2012 to 2021 based on flat features as well as nearby amenities and transportation.",
    tags: ["Numpy", "Pandas", "Seaborn", "GeoPy", "Scikit-Learn", "XGBoost"],
    imageUrl: hdbImg,
    githubUrl: "https://github.com/hengbl/HDB-Resale-Price-Prediction",
  }
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