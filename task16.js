const longestWord = (sentence) => {
    const words = sentence.split(' '); // split by spaces into words
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
};

const sentence = "I'm am from Malawi University of Business and Applied Sciences and I love coding";
const result = longestWord(sentence);
console.log(`The longest word is: ${result}`);
