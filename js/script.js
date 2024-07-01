const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => {Number(el)}).filter(el => {!isNaN()});
    // const filtered = numbers.filter(el => {!isNaN()});
    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean;
};

// the mean logic
const getMean = (array) => array.reduce((acc, el) => {return acc + el, 0})/ array.length; //setting up an initial value

// the median calculation
const getMedian = (array) => {};