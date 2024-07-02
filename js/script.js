
// the mean logic
const getMean = (array) => array.reduce((acc, el) => { return acc + el, 0 }) / array.length; //setting up an initial value

// the median calculation
// to find the median number of an:
// 1- odd numbered array : you need to find the middle number.
// 2- even numbered array: ind the two middle numbers and calculate the mean of those numbers.
const getMedian = (array) => {
    const sorted = array.slice().sort((a, b) => a - b);

    sorted.length % 2 === 0 ?
        getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]])
        : sorted[Math.floor(sorted[sorted.length / 2])];

    return median;
};

// counting the occurrence of numbers in the array
const getMode = (array) => {
    const counts = {};
    // array.forEach((el) => {
    //     if(counts[el]){
    //         counts[el] += 1;
    //     }else{
    //         counts[el] = 1;
    //     }
    // });
    array.forEach(el => counts[el] = (counts[el] || 0) + 1);

    if ((new Set(Object.values(counts)).size === 1)) {
        return null;
    }
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    // incase of multiple numbers with the same occurrence 
    const mode = Object.keys(counts).filter(el => counts[el] === counts[highest]);

    return mode.join(", ");
}

// the range: is the difference between the largest and smallest numbers in the list.
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
};

// The variance of a series represents how much the data deviates from the mean, and can be used to determine how spread out the data are.
const getVariance = (array) => {
    const mean = getMean(array);
    // const difference = array.mpa(
    //     el => el - mean
    // );
    // const squaredDifferences = difference.map(
    //     el => el ** 2
    // );
    // const sumSquaredDifferences = squaredDifferences.reduce(
    //     (acc, el) => acc + el, 0
    // );

    // to save space and better the code
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;

    return variance;
};

// the standard deviation, which is the square root of the variance.
const getStandardDeviation = (array) => {
    const variance = getVariance(array);
    // const standardDeviation = Math.pow(variance, (1/2));
    const standardDeviation = Math.sqrt(variance);
    return standardDeviation;
};

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => { Number(el) }).filter(el => { !isNaN() });
    // const filtered = numbers.filter(el => {!isNaN()});
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector("#standardDeviation").textContent = standardDeviation;
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
};
