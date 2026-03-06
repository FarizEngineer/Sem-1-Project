// Simple animation to console log a welcome message
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to the FreshRoot About Page!");
    
    // You could add a 'Counter' effect here for your stats
    let count = 0;
    const target = 15; // 15 years of experience
    const timer = setInterval(() => {
        if (count < target) {
            count++;
            // This is where you'd update a DOM element if you had one
        } else {
            clearInterval(timer);
        }
    }, 100);
});