const neededContainer = 3;
const listings = [
    {
        name: "Container renter A",
        container: 1,
        totalCost: 1,
    },
    {
        name: "Container renter B",
        container: 2,
        totalCost: 1,
    },
    {
        name: "Container renter C",
        container: 3,
        totalCost: 3,
    }
];

listings.sort((a, b) => a.totalCost - b.totalCost);

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

