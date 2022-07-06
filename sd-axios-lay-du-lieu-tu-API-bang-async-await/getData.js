import axios from "axios";

axios = require("axios");
async function getJSONAPI() {
    let json = await axios.get('http://jsonplaceholder.typicode.com/posts/1');
    console.log(json.data);
}
getJSONAPI.then(result => {console.log(result)})