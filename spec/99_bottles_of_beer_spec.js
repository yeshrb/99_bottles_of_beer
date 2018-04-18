describe('lyric',() =>{

    it("should be able to print 99_bottles_beer lyric", function() {
        const readline = require('readline');
        const fs = require('fs');
        let expectText = '\n';

        const rl = readline.createInterface({
            input: fs.createReadStream('/Users/ljj/proLearn/tw3/99_bottles_of_beer/spec/testData'),
            crlfDelay: Infinity
        });


        rl.on('line', (line) => {
            expectText += `${line.trim()}\n`;

        }).on('close', () => {
            const lyrics = require('../src/lyrics');
            expect(lyrics()).toEqual(expectText)

        });


    });
});