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
let accumulatedPrices = [10,25,30]


// Create a formula to calculate the average starting price of all freelancers
function avgStartPrice(arr) {
    //Declare a variable to store the cumulative price
    let cumulativePrice = 0;

    //Declare a variable for the array length
    let divisor = accumulatedPrices.length

    //Use the reduce method to add all of prices together
    cumulativePrice = arr.reduce((a,b) => a + b) //30

    //Divide the sum of all of the prices by the amount of freelancers
    return cumulativePrice / divisor
}

console.log(avgStartPrice(accumulatedPrices))


// Create a timer to call the addFreelancer fucntion every 2000 milliseconds (2 seconds)
const addFreelancerInterval = setInterval(addFreelancer, 2000)


// Render a new freelance every few seconds
function render () {

const row = document.createElement('tr')
row.appendChild(cell)

}

// Funtion will add a freelancer to the table
function addFreelancer() {
const cells = document.querySelector('#data')
// const element = document.createElement('td')
// element.classList.add('hello')
const testText = "hello"
cells.replaceChildren(testText)


}
