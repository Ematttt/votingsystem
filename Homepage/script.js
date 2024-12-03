// Function to set up the voting dropdown toggle functionality
function setupVotingDropdown() {
    const votingToggle = document.getElementById('voting-toggle');
    const votingDropdown = document.getElementById('voting-dropdown');

    if (votingToggle && votingDropdown) {
        votingToggle.addEventListener('click', () => {
            votingDropdown.classList.toggle('show');
        });
    } else {
        console.warn('Voting toggle or dropdown element is missing!');
    }
}

// Function to initialize the election chart using Chart.js
function initializeElectionChart() {
    const ctx = document.getElementById('electionChart');
    
    if (ctx) {
        const electionChart = new Chart(ctx.getContext('2d'), {
            type: 'bar', // Bar chart
            data: {
                labels: ['Candidate A', 'Candidate B', 'Candidate C', 'Candidate D'], // Candidate names
                datasets: [{
                    label: 'Votes Received',
                    data: [120, 150, 180, 95], // Example vote counts
                    backgroundColor: [
                        '#3498db', // Blue
                        '#e74c3c', // Red
                        '#2ecc71', // Green
                        '#9b59b6'  // Purple
                    ],
                    borderColor: [
                        '#2980b9', // Dark Blue
                        '#c0392b', // Dark Red
                        '#27ae60', // Dark Green
                        '#8e44ad'  // Dark Purple
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            color: '#333', // Legend text color
                            font: {
                                size: 14 // Legend text size
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Votes: ${context.raw}`; // Custom tooltip
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Candidates', // Label for the x-axis
                            color: '#333',
                            font: {
                                size: 14
                            }
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Votes', // Label for the y-axis
                            color: '#333',
                            font: {
                                size: 14
                            }
                        },
                        ticks: {
                            stepSize: 50 // Control y-axis increments
                        }
                    }
                }
            }
        });
    } else {
        console.warn('Election chart canvas element is missing!');
    }
}

// Call the functions to set up features
setupVotingDropdown();
initializeElectionChart();
