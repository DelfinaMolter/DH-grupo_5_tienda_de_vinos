const fs = require('fs');


const User = {
fileName: './src/data/users.json',

getData: function(){
    return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'))
},

findAll: function(){
    return this.getData()
},

findByField: function(field, text){
    let allUsers = this.findAll();
    let userFound = allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
},

generateId: function(){
    let allUsers = this.findAll();
    let lastUser = allUsers.pop();
    if(lastUser){
        return lastUser.id + 1;
    } else{ 
        return 1
    }
},

create: function(userData){
    let allUsers = this.findAll();
    let newUser = {
        id: this.generateId(),
        ...userData
    }
    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, 4));
    return newUser;
}
}

//console.log(User.create({firstName:'pueba', lastName:'pruebatambien'}))

//console.log(User.findByField("firstName", "Gonzalo"));
module.exports = User;