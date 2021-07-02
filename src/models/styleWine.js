const path = require('path');
const fs = require('fs');

const model = {
    directory: path.resolve(__dirname, '../data', 'styleWine.json'),

    all: function() {
        let file = fs.readFileSync(this.directory, 'utf-8');
        fileParsed = JSON.parse(file);
        return fileParsed;
    },

    one: function(id) {
        let allstyleWine = this.all();
        let theStyleWine = allstyleWine.find(element => element.id == id);
        return theStyleWine;
    }
}

module.exports = model;