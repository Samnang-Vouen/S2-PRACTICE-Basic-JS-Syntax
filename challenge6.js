function votingSystem(votes) {
    if (votes.length === 0) {
        return "There is not vote yet";
    }

    let voteCounts = { 'A': 0, 'B': 0, 'C': 0 };

    votes.forEach(vote => {
        if (voteCounts.hasOwnProperty(vote)) {
            voteCounts[vote]++;
        }
    });
    //The hasOwnProperty() method ensures we only check the properties that exist on the object itself.

    let maxVotes = Math.max(voteCounts['A'], voteCounts['B'], voteCounts['C']);

    let winners = [];
    for (let candidate in voteCounts) {
        if (voteCounts[candidate] === maxVotes) {
            winners.push(candidate);
        }
    }

    if (winners.length === 1) {
        return `${winners[0]} is the winner`;
    } else {
        return `${winners.join(' and ')} are both winners`;
    }
}
console.log("Write a function to simulate a voting system for three candidates:");

console.log("Votes = ['A', 'B', 'A', 'C', 'A']");
console.log("Winner: ", votingSystem(['A', 'B', 'A', 'C', 'A']));

console.log("Votes = ['A', 'B', 'B', 'C', 'A']");
console.log("Winner: ", votingSystem(['A', 'B', 'B', 'C', 'A']));

console.log("Votes = []");
console.log("Winner: ", votingSystem([]));