
 function lyrics () {
    let ret = '\n';
    for(let i = 99; i>=2;i--){
        ret += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`+
               `Take one down and pass it around, ${i-1} ${i==2?'bottle':'bottles'} of beer on the wall.\n`
    }
    ret += '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take one down and pass it around, no more bottles of beer on the wall.\n'+
        'No more bottles of beer on the wall, no more bottles of beer.\n'+
        'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
    //return ret;
    console.log(ret);
};
module.exports = lyrics;




