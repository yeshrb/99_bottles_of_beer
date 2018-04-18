describe('lyric',() =>{

    it("should be able to print 99_bottles_beer lyric", function() {
        const readline = require('readline');
        const fs = require('fs');
        const rl = readline.createInterface({
            input: fs.createReadStream('/Users/ljj/proLearn/tw3/99_bottles_of_beer/lyrics.md'),
            crlfDelay: Infinity
        });

        let expectText = '';
        rl.on('line', (line) => {
            expectText += `${line.trim()}\n`;

        }).on('close', () => {
            const lyrics = require('../src/lyrics');
            expect(lyrics()).toEqual(expectText)

        });


    });
});