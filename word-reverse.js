function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        result.push();
    }
    const revesed = result.join(' ');
    return revesed ;
}


const myString = 'I am a good boy';
reverseWords(myString);