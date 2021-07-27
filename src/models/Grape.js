const path = require('path');
const fs = require('fs');

const model = {
    directory: path.resolve(__dirname, '../data', 'grapes.json'),

    all: function() {
        let file = fs.readFileSync(this.directory, 'utf-8');
        fileParsed = JSON.parse(file);
        return fileParsed;
    },

    one: function(id) {
        let allGrapes = this.all();
        let theGrape = allGrapes.find(element => element.id == id)
        return theGrape;
    }
}

module.exports = model;

