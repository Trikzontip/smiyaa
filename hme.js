document.getElementById('sry').addEventListener('mouseover', function() {
    // Set position to absolute if not already set
    this.style.position = 'absolute';
    this.style.zIndex='10';

    // Calculate the maximum available space within the window for the button to move
    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;

    // Generate random positions within the window boundaries
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    console.log("left:"+ randomX);
    console.log("height:"+ randomY);
    // Update the button's position
    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';
});
