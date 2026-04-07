const fs = require('fs');


//reading a file asynchronously
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('Last line of code');

//writing to a file asynchronously
// fs.writeFile('./docs/blog1.txt', 'Hello World!', () => {
//      console.log('File was written');
// });

// fs.writeFile('./docs/blog2.txt', 'Hello!', () => {
//      console.log('File was written');
// });

//directories
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder created');
//     });
// } else {
//     fs.rmdir('./assets', (err) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Folder deleted');
//     });
// }

//deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }   console.log('File deleted');
    });
}

