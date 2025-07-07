export function initCardEffects() {
  const cards = document.querySelectorAll(".card-unit");
  cards.forEach((card) => {
    const cardEl = card as HTMLElement;
    const rotateCard = (e: MouseEvent) => {
      const rect = cardEl.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      const rotateX = -(y * 15);
      const rotateY = x * 15;
      cardEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03) translateY(-5px)`;
    };

    const resetCard = () => {
      cardEl.style.transform = `rotateX(0deg) rotateY(0deg) scale(1) translateY(0)`;
    };

    cardEl.addEventListener("mousemove", rotateCard);
    cardEl.addEventListener("mouseleave", resetCard);
  });
}
