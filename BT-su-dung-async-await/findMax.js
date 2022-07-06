//  async function findMax(array){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             if (array instanceof Array){
//                 let max = array[0];
//                 for (let i = 0; i < array.length; i++){
//                     if (array[i] > max){
//                         max = array[i];
//                     }
//                 }
//                 resolve(max);
//
//             }else {
//                 reject(new Error('tham số nhập vào phải là 1 mảng'))
//             }
//         })
//     })
// }
async function findMax(array){
    if(array instanceof Array){
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]
            }
        }
        return max;
    }else {
        throw new Error('nhập vào 1 mảng')
    }
}
async function maxValue() {

    try {
        const max = await findMax([1, 2, 3, 4, 5, 6, 7, 8])
        console.log(max);
    }catch (err) {
        console.error(err)
    }
}
maxValue();


