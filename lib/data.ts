import React from "react";
import { SiGooglebigquery } from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlinePolicy } from "react-icons/md";
import bbImg from "@/public/biasbuster.png";
import chImg from "@/public/connecthub.png";
import hdbImg from "@/public/hdb.png";
import airflowImg from "@/public/airflow.png";
import gnnImg from "@/public/gnn.png";

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
    title: "Software Engineer Intern, Policyme",
    location: "Toronto, Ontario",
    description:
      "(Incoming intern)",
    icon: React.createElement(MdOutlinePolicy),
    date: "Aug 2024 - Jul 2025",
  },
  {
    title: "AI/Data Intern, Deloitte Consulting",
    location: "Singapore",
    description:
      "(Incoming intern)",
    icon: React.createElement(LuBrainCircuit),
    date: "Jul 2024 - Aug 2024",
  },
  {
    title: "Data Analyst Intern, Affyn",
    location: "Singapore",
    description:
      "Affyn is a Web 3.0 Gaming and Metaverse Company. I developed ETL pipelines and architected performance dashboards for gaming and social media analytics. I also conducted econometric analysis to enhance user retention strategies, providing actionable insights for business improvements.",
    icon: React.createElement(SiGooglebigquery),
    date: "Sep 2023 - Jan 2024",
  },
  {
    title: "Data Analyst Intern, SGInnovate",
    location: "Singapore",
    description:
      "SGInnovate is a Deep Tech innovation firm. I was part of the Digital Strategy & Analytics team to streamline operations by building dashboards for several departments and analysing user journeys to formulate strategies in expanding Singapore's deep tech ecosystem.",
    icon: React.createElement(IoLogoTableau),
    date: "May 2023 - Jul 2023",
  }
] as const;

export const projectsData = [
  {
    title: "TwitterBotGNN",
    description: "Trained and fine-tuned Graph Neural Networks for node classification of Twitter bots using the latest Twibot-22 dataset for Twitter bot detection in the community.",
    tags: ["Numpy", "Pandas", "Seaborn", "Scikit-Learn", "XGBoost", "PyTorch", "PyMongo"],
    imageUrl: gnnImg,
    githubUrl: "https://github.com/hengbl/TwitterBotGNN",
  },
  {
    title: "HDB Resale Price Prediction",
    description: "Trained multiple classification models to accurately predict prices of SG HDB resale flats from 2012 to 2021 based on flat features as well as nearby amenities and transportation.",
    tags: ["Numpy", "Pandas", "Seaborn", "GeoPy", "Scikit-Learn", "XGBoost"],
    imageUrl: hdbImg,
    githubUrl: "https://github.com/hengbl/HDB-Resale-Price-Prediction",
  },
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
] as const;

export const techStackUrl = [
  {
    skill: "Python",
    url: "/python.svg"
  },
  {
    skill: "Java",
    url: "/java.svg"
  },
  {
    skill: "JavaScript",
    url: "/js.svg"
  },
  {
    skill: "TypeScript",
    url: "/ts.svg"
  },
  {
    skill: "HTML",
    url: "/html.svg"
  },
  {
    skill: "CSS",
    url: "/css.svg"
  },
  {
    skill: "Tailwind",
    url: "/tailwind.svg"
  },
  {
    skill: "Vue.js",
    url: "/vue.svg"
  },
  {
    skill: "Next.js",
    url: "/nextjs.svg"
  }, 
  {
    skill: "MySQL",
    url: "/mysql.svg"
  },
  {
    skill: "PostgreSQL",
    url: "/pgsql.svg"
  },
  {
    skill: "MongoDB",
    url: "/mongodb.svg"
  },
  {
    skill: "Firebase",
    url: "/firebase.svg"
  }
] as const;

export const libraries = [
  {
    skill: "NumPy",
    url: "/numpy.svg"
  },
  {
    skill: "Pandas",
    url: "/pandas.svg"
  },
  {
    skill: "Seaborn",
    url: "/seaborn.svg"
  },
  {
    skill: "Scikit-Learn",
    url: "/sklearn.svg"
  },
  {
    skill: "PyTorch",
    url: "/pytorch.svg"
  }
] as const;