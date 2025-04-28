// Tournament Data
const fakeBGMIData = { 
    tournament: "BGMI Pro League - Season 2", 
    date: "2025-04-25", 
    teams: [ 
        { 
            rank: 1, 
            team: "Team Soul", 
            matches_played: 12, 
            chicken_dinners: 4, 
            position_points: 105, 
            kill_points: 76, 
            total_points: 181 
        }, 
        { 
            rank: 2, 
            team: "GodLike Esports", 
            matches_played: 12, 
            chicken_dinners: 3, 
            position_points: 98, 
            kill_points: 81, 
            total_points: 179 
        }, 
        { 
            rank: 3, 
            team: "OR Esports", 
            matches_played: 12, 
            chicken_dinners: 2, 
            position_points: 91, 
            kill_points: 82, 
            total_points: 173 
        }, 
        { 
            rank: 4, 
            team: "Skylightz Gaming", 
            matches_played: 12, 
            chicken_dinners: 1, 
            position_points: 85, 
            kill_points: 70, 
            total_points: 155 
        }, 
        { 
            rank: 5, 
            team: "TSM India", 
            matches_played: 12, 
            chicken_dinners: 1, 
            position_points: 82, 
            kill_points: 65, 
            total_points: 147 
        } 
    ] 
}; 

function renderTable(data) { 
    const container = document.getElementById("table-container"); 
    const table = document.createElement("table"); 
    
    table.innerHTML = ` 
        <thead> 
            <tr> 
                <th>Rank</th> 
                <th>Team</th> 
                <th>Matches</th> 
                <th>Chicken Dinners</th> 
                <th>Position Pts</th> 
                <th>Kill Pts</th> 
                <th>Total Pts</th> 
            </tr> 
        </thead> 
        <tbody> 
            ${data.teams.map(team => ` 
                <tr> 
                    <td>${team.rank}</td> 
                    <td>${team.team}</td> 
                    <td>${team.matches_played}</td> 
                    <td>${team.chicken_dinners}</td> 
                    <td>${team.position_points}</td> 
                    <td>${team.kill_points}</td> 
                    <td>${team.total_points}</td> 
                </tr> 
            `).join("")} 
        </tbody> 
    `; 
    
    container.appendChild(table); 
} 

function toggleTournament(id) {
    const content = document.getElementById(id);
    if (content.style.display === "none" || !content.style.display) {
        content.style.display = "block";
        if (!content.hasChildNodes()) {
            renderTable(fakeBGMIData);
        }
    } else {
        content.style.display = "none";
    }
}

// Highlight Slider functionality
let currentHighlightPosition = 0;
const highlightsGrid = document.querySelector('.highlights-grid');
const highlights = document.querySelectorAll('.highlight-item');
const highlightWidth = 320; // width + gap

function moveHighlights(direction) {
    const maxPosition = -(highlights.length - 3) * highlightWidth;
    
    if (direction === 'next' && currentHighlightPosition > maxPosition) {
        currentHighlightPosition -= highlightWidth;
    } else if (direction === 'prev' && currentHighlightPosition < 0) {
        currentHighlightPosition += highlightWidth;
    }
    
    highlightsGrid.style.transform = `translateX(${currentHighlightPosition}px)`;
}

document.querySelector('.next-highlight').addEventListener('click', () => moveHighlights('next'));
document.querySelector('.prev-highlight').addEventListener('click', () => moveHighlights('prev'));

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initialize other functionality
});