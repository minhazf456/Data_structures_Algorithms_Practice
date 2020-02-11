function findRepeat(numbers){
    const numberSeeen = new Set();

    for (let i = 0; i <numbers.length; i++){
        const numner = numbers[i];
        if (numberSeeen.has(number)){
            return number;
        }
        numbersSeen.add(number);
    }

    throw new Error('no duplicate !');
}