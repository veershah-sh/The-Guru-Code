function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

let veer = new createUser("veer", "veer@google.com", "123")
<<<<<<< HEAD
console.log(veer)
=======
console.log(veer)
>>>>>>> 6aca3f2 (oop more)
