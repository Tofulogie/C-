let players = [];

// Load players from the server
async function loadPlayersData() {
    const response = await fetch('http://localhost:3000/players');
    players = await response.json();
    updateTable();
    populatePlayerSelect();
}

// Populate player dropdown
function populatePlayerSelect() {
    const playerSelect = document.getElementById('playerSelect');
    playerSelect.innerHTML = '';
    players.forEach((player, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = player.name;
        playerSelect.appendChild(option);
    });
}

// Add match result
async function addMatchResult() {
    const playerIndex = document.getElementById('playerSelect').value;
    const matchResult = parseInt(document.getElementById('matchResult').value);

    if (isNaN(playerIndex) || isNaN(matchResult) || ![1, -1].includes(matchResult)) {
        alert('Please select a player and enter a valid match result (1 or -1).');
        return;
    }

    const playerId = players[playerIndex]._id;
    const response = await fetch('http://localhost:3000/updateMatch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ playerId, matchResult }),
    });

    if (response.ok) {
        await loadPlayersData();
        document.getElementById('matchResult').value = '';
    } else {
        alert('Error updating match result.');
    }
}

// Update table
function updateTable() {
    const tableBody = document.getElementById('scoreTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    players.forEach((player) => {
        const row = tableBody.insertRow();

        row.insertCell(0).innerText = player.name;
        row.insertCell(1).innerText = player.matches.length;
        row.insertCell(2).innerText = player.winRate || '0.00';
        row.insertCell(3).innerText = player.netWins;
    });
}

// Load players when the page loads
loadPlayersData();