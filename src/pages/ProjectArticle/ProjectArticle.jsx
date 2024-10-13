// ProjectArticle.js
import React from "react";
import ReactMarkdown from "react-markdown"; // Importa react-markdown
import styles from "./ProjectArticle.module.css";
import projects from "../../data/projects.json";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../../utils";

export const ProjectArticle = () => {
  const { id } = useParams();

  // Encuentra el proyecto por ID
  const project = projects.find((proj) => proj.id === Number(id));

  if (!project) {
    return (
      <div className={styles.articleContainer}>
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <div className={styles.articleContainer}>
      <h1 className={styles.articleTitle}>{project.title}</h1>
      <h3 className={styles.articleSubtitle}>{project.description}</h3>

      {/* Sección principal de contenido */}
      <div className={styles.articleContent}>
        <img
          src={getImageUrl(project.thumbnail)}
          alt={project.title}
          className={styles.articleImage}
        />

        {project.sections.map((section, index) => (
          <div key={index} className={styles.articleSection}>
            <h2 className={styles.articleSectionTitle}>{section.title}</h2>
            <ReactMarkdown className={styles.articleParagraph}>
              {section.content.join("\n\n")}
            </ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
};
