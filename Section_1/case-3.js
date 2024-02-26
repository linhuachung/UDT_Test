const neededContainer = 10;
const listings = [
    {
        name: "Container renter A",
        container: 5,
        totalCost: 5,
    },
    {
        name: "Container renter B",
        container: 2,
        totalCost: 10,
    },
    {
        name: "Container renter C",
        container: 10,
        totalCost: 3,
    },
];

// Sort listings by ascending order of totalCost per container
listings.sort((a, b) => (a.totalCost / a.container) - (b.totalCost / b.container));

let remainingContainers = neededContainer;
let totalCost = 0;
let contracts = [];

for (const listing of listings) {
    if (remainingContainers <= 0) break;

    const containersToRent = Math.min(remainingContainers, listing.container);
    totalCost += containersToRent * listing.totalCost;
    contracts.push(`[Contract with] ${listing.name} ${containersToRent} container, price: ${listing.totalCost}`);

    remainingContainers -= containersToRent;
}

console.log(contracts);
console.log(`[Summary] total cost ${totalCost}`);
