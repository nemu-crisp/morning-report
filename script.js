document.addEventListener('DOMContentLoaded', () => {
    console.log("⚡ The Daily Code is ready. Owl post delivered.");

    // Optional: Add a subtle parallax effect to the newspaper on mouse move
    const newspaper = document.querySelector('.newspaper');
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        newspaper.style.transform = `rotateX(${y * 0.05}deg) rotateY(${x * 0.05}deg)`;
    });

    // Randomize the "weather" slightly for fun if it was dynamic, 
    // but we'll stick to the requested content.
    
    // Easter egg: Click the moving image to toggle a "spell"
    const movingImage = document.querySelector('.moving-image');
    if (movingImage) {
        movingImage.addEventListener('click', () => {
            movingImage.style.filter = movingImage.style.filter === 'none' 
                ? 'sepia(0.3) contrast(1.2)' 
                : 'none';
        });
    }
});