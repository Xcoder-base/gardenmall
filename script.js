// Example data for clubs (you can modify this or fetch dynamically)
const clubs = [
    { name: "Fashion Club", description: "Explore the latest trends." },
    { name: "Electronics Club", description: "Find the best gadgets and more." },
    { name: "Home Decor Club", description: "Discover beautiful home decor items." },
    { name: "Sports Club", description: "All about sports and fitness." },
];

// Function to generate club boards dynamically
function generateClubBoards() {
    const clubBoardsContainer = document.getElementById('clubBoardsContainer');
    
    clubs.forEach(club => {
        // Create a new div for the club
        const clubBoard = document.createElement('div');
        clubBoard.classList.add('club-board');

        // Create a circular icon for the club
        const clubIcon = document.createElement('div');
        clubIcon.classList.add('club-icon');

        // Add the club name and description below the icon
        const clubName = document.createElement('h3');
        clubName.classList.add('text-lg', 'font-bold', 'text-orange-700', 'mt-2');
        clubName.textContent = club.name;

        const clubDesc = document.createElement('p');
        clubDesc.classList.add('text-orange-600');
        clubDesc.textContent = club.description;

        // Append everything to the club board
        clubBoard.appendChild(clubIcon);
        clubBoard.appendChild(clubName);
        clubBoard.appendChild(clubDesc);

        // Append the club board to the container
        clubBoardsContainer.appendChild(clubBoard);
    });
}

// Generate club boards on page load
window.onload = generateClubBoards;
