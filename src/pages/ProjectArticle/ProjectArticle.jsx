import React from "react";

import styles from "./ProjectArticle.module.css";
import projects from "../../data/projects.json";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../../utils";

export const ProjectArticle = () => {
  const { id } = useParams();

  // Find the project by ID
  const project = projects.find((proj) => proj.projectId === id);

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className={styles.articleContainer}>
      <h1 className={styles.articleTitle}>{project.title}</h1>
      <h3 className={styles.articleSubtitle}>{project.description}</h3>

      {/* Main content section */}
      <div className={styles.articleContent}>
        <img
          src={getImageUrl(project.thumbnail)}
          alt={project.title}
          className={styles.articleImage}
        />

        {/* Render each section dynamically */}
        {project.sections.map((section, index) => (
          <div key={index} className={styles.articleSection}>
            <h2 className={styles.articleSectionTitle}>{section.title}</h2>
            <p className={styles.articleParagraph}>{section.content}</p>

            {section.list && (
              <ul className={styles.articleList}>
                {section.list.map((item, idx) => (
                  <li key={idx} className={styles.articleListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
