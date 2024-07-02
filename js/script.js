const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => { Number(el) }).filter(el => { !isNaN() });
    // const filtered = numbers.filter(el => {!isNaN()});
    const mean = getMean(numbers);
    document.querySelector("#mean").textContent = mean;

    const median = getMedian(numbers);
    document.querySelector("#median").textContent = median;
};

// the mean logic
const getMean = (array) => array.reduce((acc, el) => { return acc + el, 0 }) / array.length; //setting up an initial value

// the median calculation
// to find the median number of an:
// 1- odd numbered array : you need to find the middle number.
// 2- even numbered array: ind the two middle numbers and calculate the mean of those numbers.
const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);

    // if (sorted.length % 2 === 0 ){
    //     // even
    //     return getMean([sorted[sorted.length / 2 - 1],sorted[sorted.length / 2]]);
    // }else {
    //     // odd 
    //     return sorted[Math.floor(sorted[sorted.length / 2])];
    // }
    sorted.length % 2 === 0 ?
        getMean([sorted[sorted.length / 2 - 1], sorted[sorted.length / 2]])
        : sorted[Math.floor(sorted[sorted.length / 2])];

    return median;
};

// counting the occurrence of numbers in the array
const getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        if(counts[el]){
            counts[el] += 1;
        }else{
            counts[el] = 1;
        }
    });

    return counts;
}
