import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { id, title, thumbnail, description, skills }, // Add id to project data
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const navigate = useNavigate(); // Initialize useNavigate

  // Update rotation based on mouse position
  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();

    const centerX = width / 2;
    const centerY = height / 2;
    const mouseX = event.clientX - left;
    const mouseY = event.clientY - top;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const newRotationX = -(deltaY / centerY) * 5;
    const newRotationY = (deltaX / centerX) * 5;

    setRotation({ x: newRotationX, y: newRotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setScale(1);
  };

  // Handle card click to navigate to the project article page
  const handleCardClick = () => {
    navigate(`/projects/${id}`); // Navigate to the project page using the project id
  };

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick} // Trigger navigation on click
      style={{
        transform: `perspective(500px) scale(${scale}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        cursor: 'pointer' // Indicate that the card is clickable
      }}
    >
      <img
        src={getImageUrl(thumbnail)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
