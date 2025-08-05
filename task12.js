const EvenOddCount = (start, end) => {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    console.log(`The count of even numbers is: ${evenCount}`);
    console.log(`The count of odd numbers is: ${oddCount}`);
};

EvenOddCount(1, 10);

