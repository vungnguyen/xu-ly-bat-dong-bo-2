
const axios = require('axios');
function getPictureOfDay() {
    return new Promise(function(resolve) {
        axios.get('https://www.pinterest.com/pin/595178906991956843/')
            .then(function(json){
                resolve(json.data);
            })
    })
}
getPictureOfDay.then(result => {console.log(result)})