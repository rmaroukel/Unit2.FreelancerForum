const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];


// Create a variable for the average starting price starting with 0
let averageStartingPrice = 0

// Create a an array where we can push the prices of the freelancers to
let accumulatedPrices = []

// Create an index counter to keep track of current posting
let currentIndex = 0;


// Create a formula to calculate the average starting price of all freelancers
function avgStartPrice(arr) {
    //Declare a variable to store the cumulative price
    let cumulativePrice = 0;

    //Declare a variable for the array length
    let divisor = accumulatedPrices.length

    //Use the reduce method to add all of prices together
    cumulativePrice = arr.reduce((a,b) => a + b)

    //Divide the sum of all of the prices by the amount of freelancers
    let result = cumulativePrice /divisor
    return result.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}


function addFreelancerSequentially() {
    // Check the current index is less than the total count of the object
    if (currentIndex < freelancers.length) {
        // Set the freelancer to the current object
        const freelancer = freelancers[currentIndex];
        //Push the current freelancer price to the accumulated prices array
        accumulatedPrices.push(freelancer.price)
        // Call the table rendering function
        addFreelancer(freelancer);
        // Increment the counter
        currentIndex++;
    } else {
        // Clear the running interval when reaching the end
        clearInterval(addFreelancerInterval);
    }
}

const addFreelancerInterval = setInterval(addFreelancerSequentially, 2000);

function addFreelancer(freelancer) {
    const table = document.getElementById('postings');
    const newRow = document.createElement('tr');
    const startingPriceText = document.getElementById('average-price')
    
    averageStartingPrice = avgStartPrice(accumulatedPrices)

    startingPriceText.innerText = `The average starting price is ${averageStartingPrice}`
    
    // Create and append the name cell
    const nameCell = document.createElement('td');
    nameCell.textContent = freelancer.name.toUpperCase();
    newRow.appendChild(nameCell);
    
    // Create and append the occupation cell
    const occupationCell = document.createElement('td');
    occupationCell.textContent = freelancer.occupation.toUpperCase();
    newRow.appendChild(occupationCell);
    
    // Create and append the price cell
    const priceCell = document.createElement('td');
    priceCell.textContent = freelancer.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    newRow.appendChild(priceCell);
    
    table.appendChild(newRow);
}
