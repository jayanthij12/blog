const fs = require('fs');

const readstream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writestream = fs.createWriteStream('./docs/blog4.txt');

// readstream.on('data', (chunk) => {
//     console.log('----- New chunk -----');
//     console.log(chunk);
//     writestream.write('\nNEW CHUNK\n');
//     writestream.write(chunk);
// });

readstream.pipe(writestream);