const path = require('path');
const fs = require('fs');

const model = {
    directory: path.resolve(__dirname, '../data', 'wineries.json'),

    all: function() {
        let file = fs.readFileSync(this.directory, 'utf-8');
        fileParsed = JSON.parse(file);
        return fileParsed;
    },

    one: function(id) {
        let allwinery = this.all();
        let theWinery = allwinery.find(element => element.id == id);
        return theWinery;
    }
}

module.exports = model;