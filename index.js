// Query Selecting the input element and assign it to a variable
const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

// Query Selecting the output elements and assign it to a variable
const yearOutput = document.querySelector("#years");
const monthOutput = document.querySelector("#months");
const dayOutput = document.querySelector("#days");

// Getting the data content for the output elements
const yearsOutput = yearOutput.getAttribute("data-content");
const monthsOutput = monthOutput.getAttribute("data-content");
const daysOutput = dayOutput.getAttribute("data-content");


// Query Selecting the svg element and assign it to a variable
const calculateButton = document.querySelector("#calculate-button");
//Adding eventListener to the svg element
calculateButton.addEventListener("click", calculateAge);
function calculateAge() {
    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero indexed
    const currentDay = currentDate.getDate();

    // Getting the input dates, month and year
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    // Calculating the age
    const calculatedYear = currentYear - year;
    const calculatedMonth = currentMonth - month;
    const calculatedDay = currentDay - day;

    // Displaying the age
    yearsOutput.textContent = calculatedYear.toString();
    monthsOutput.textContent = calculatedMonth.toString();
    daysOutput.textContent = calculatedDay.toString();
}

// Calling the calculateAge function
calculateAge();
