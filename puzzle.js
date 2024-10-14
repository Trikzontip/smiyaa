document.addEventListener("DOMContentLoaded", function () {
    const puzzleContainer = document.getElementById("puzzle-container");

    let tiles = [1, 2, 3, 8, 7, 5, 4, 6, null]; // null represents the blank tile
    const images = [
        'puzzleimg/1.jpg',
        'puzzleimg/2.jpg',
        'puzzleimg/3.jpg',
        'puzzleimg/4.jpg',
        'puzzleimg/5.jpg',
        'puzzleimg/6.jpg',
        'puzzleimg/7.jpg',
        'puzzleimg/8.jpg',
        'puzzleimg/9.jpg',
        ];

    // Function to render the tiles on the board
    function renderTiles() {
        puzzleContainer.innerHTML = ''; // Clear the container
        tiles.forEach((tile, index) => {
            const tileElement = document.createElement('div');
            tileElement.classList.add('puzzle-tile');
            if (tile === null) {
                tileElement.classList.add('blank'); // Blank tile
            } else {
                const imgElement = document.createElement('img');
                imgElement.src = images[tile - 1]; // Use tile number to get the image
                tileElement.appendChild(imgElement);
            }
            tileElement.addEventListener('click', () => handleTileClick(index));
            puzzleContainer.appendChild(tileElement);
        });
    }

    // Function to check if the puzzle is solved
    function isSolved() {
        const winningOrder = [1, 2, 3, 4, 5, 6, 7, 8, null];
        return tiles.every((tile, index) => tile === winningOrder[index]);
    }

    // Function to handle tile clicks
    function handleTileClick(index) {
        const blankIndex = tiles.indexOf(null);

        // Check if the clicked tile is adjacent to the blank tile
        if (
            index === blankIndex - 1 || // Left
            index === blankIndex + 1 || // Right
            index === blankIndex - 3 || // Above
            index === blankIndex + 3    // Below
        ) {
            // Swap the clicked tile with the blank tile
            [tiles[index], tiles[blankIndex]] = [tiles[blankIndex], tiles[index]];
            renderTiles();

            // Check if the puzzle is solved
            if (isSolved()) {
                const element = document.getElementById('exp');
                element.style.display="block";
                // Add an event listener for the click event
                element.addEventListener('click', function() {
                    // Redirect to a different link
                    window.location.href = 'home.html';  // Replace with your desired link
                });
            }
        }
    }

    // Render the initial puzzle
    renderTiles();
});
