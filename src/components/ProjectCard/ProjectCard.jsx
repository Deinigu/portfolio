import React, { useState } from 'react';
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills },
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1); // New state for scale

  // Update rotation based on mouse position
  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const { width, height, left, top } = card.getBoundingClientRect();

    // Calculate center of the card
    const centerX = width / 2;
    const centerY = height / 2;

    // Get mouse position relative to the card
    const mouseX = event.clientX - left; // x position of the mouse relative to the card
    const mouseY = event.clientY - top;  // y position of the mouse relative to the card

    // Calculate the rotation angles based on the mouse position within the card
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const newRotationX = -(deltaY / centerY) * 5; // Adjusted multiplier for sensitivity
    const newRotationY = (deltaX / centerX) * 5;

    setRotation({ x: newRotationX, y: newRotationY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 }); // Reset rotation when mouse leaves
    setScale(1); // Reset scale
  };

  const handleMouseDown = () => {
    setScale(0.9); // Scale down on mouse down
  };

  const handleMouseUp = () => {
    setScale(1.1); // Scale up on mouse up
  };

  return (
    <div
      className={styles.container}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        transform: `perspective(500px) scale(${scale}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
    >
      <img
        src={getImageUrl(imageSrc)}
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
