const lyrics = require('../src/lyrics');
describe('lyric',() =>{

    it("should be able to print 99_bottles_beer lyric", function() {
        const readline = require('readline');
        const fs = require('fs');
        const rl = readline.createInterface({
            input: fs.createReadStream('lyrics.md'),
            crlfDelay: Infinity
        });


        let expectText = '';
        rl.on('line', (line) => {
            expectText += `${line.trim()}\n`;

        }).on('close', () => {
            spyOn(console, 'log');
            lyrics();
            expect(console.log).toHaveBeenCalledWith(expectText);

        });


    });
});