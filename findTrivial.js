/**
 * Run this script to find all trivial (non-reference) images
 * Script will move trivial images from images/ to remove_images
**/

const fs = require("fs");
const path = require("path");
const fileList = fs.readdirSync("./images");

const cardList = [];
const folderToCheck = ["./cards"];

while( folderToCheck.length !== 0 ) {
    const par = folderToCheck.pop();
    const files = fs.readdirSync(par);

    files.forEach((file) => {
        const filePath = path.join(par, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            folderToCheck.push( filePath );
        } else if (path.extname(file) === '.js') {
            if(file.startsWith("pack_")) {
                cardList.push( filePath );
            }
        }
    });
}

let imageList = [];

cardList.forEach( cardPath => {
    const file = fs.readFileSync( cardPath, "utf-8");
    const pattern = /image:([\w-]+\.(?:png|jpg|svg))/g;
    const images = [ ...file.matchAll( pattern ) ].map(match => match[1]);
    imageList = imageList.concat(images);

});


let count = 0;
fileList.forEach( fileName => {
    if( imageList.includes(fileName) ) {
    } else {
        count ++;
        const imgPath = "./images/" + fileName;
        const toPath = "./remove_images/" + fileName;
        fs.rename(imgPath, toPath, (err) => {
            if( err ) {
                console.log("ERROR!", err);
            }
        });
        console.log( "Moved\t" + fileName );
    }
});

if( count > 0 ) {
    console.log("\n");
}

console.log(`Done!\n${count} trivial images have been moved to the remove_image folder`);
