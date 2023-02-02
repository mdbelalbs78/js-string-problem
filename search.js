const lyrics = 'Tumi bondhu kala PAKhi ami jeno ki. bosonto kala tomai bolte pari nai.kala kala sada sada rong jomece sada kala';

// const doesExit = lyrics.includes('pakhi');
// const doesExit = lyrics.includes(searchExit)
const searchString = 'PakHi';
const lyricsLowerCase = lyrics.toLowerCase()
// const doesExit = lyricsLowerCase.includes(searchExit);
const searhStringLower = searchString.toLocaleLowerCase()
const doesExit = lyricsLowerCase.includes(searhStringLower);
// console.log(doesExit);


// index of 
console.log(lyrics.indexOf('kalaaa'));

if (lyrics.indexOf('sadadd') !== -1){
  console.log('exist inside the string');
}
else {
    console.log('cannot find it')
}

// startsWith 
// console.log(lyrics.startsWith('Tumi'));;

// endsWith 