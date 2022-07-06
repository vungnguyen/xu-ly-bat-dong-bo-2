axious = require('axios');
async function getAllUsers() {
    try {
        let user = await axious.get('https://jsonplaceholder.typicode.com/users')
        console.log(user.data);
    }catch(e) {
        console.log(e);
    }

}
getAllUsers.then(result => {console.log(result)})
