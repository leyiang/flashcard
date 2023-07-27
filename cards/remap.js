/**
 * This is a NodeJS Script
 */

const fs = require("fs");

const pwd = ".";
const map_name = "import_map.js";
const subjects = [];
const subject_packs = {};

let write_content = `/**
 * This File is Auto-Generated
 * Do not modify this file
 * Re-run the re-map script instead
 */
`;

function getPacks( pwd ) {
    const files = fs.readdirSync(pwd);
    return files.map(file => file.slice(0, -3));
}
function getImports( pwd, packs, subject ) {
    let imports = "";

    packs.forEach( name => {
        const path = [pwd, name].join('/');
        imports += `import ${subject + "_" + name} from "${path}.js"\n`;
    });

    return imports;
}

const files = fs.readdirSync(pwd);

files.forEach( file => {
    const path = [pwd, file].join("/");
    const isFolder = fs.lstatSync(path).isDirectory();

    /**
     * Generate Imports
     */
    if( isFolder ) {
        subjects.push(file);
        const packs = getPacks( path );
        write_content += getImports( path, packs, file );
        subject_packs[ file ] = packs.map(pack => file + "_" + pack);
    }
});

const json = `
const import_map = ` + JSON.stringify( subject_packs, null, 4 );
const unquoted = json.replace(/"([^"]+)"/g, '$1');

write_content += unquoted;
write_content += `
export { import_map }`

fs.writeFileSync([pwd, map_name].join('/'),  write_content);
