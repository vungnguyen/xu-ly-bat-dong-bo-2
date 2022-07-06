async function getDivision(a,b){
    if(b !== 0) {
        return a/b;
    }else{
        return new Error("Math error")
    }
}
async function f() {
    try {
        let result = await getDivision(6,2)
        console.log(result)
    }catch(e){
        console.log(e.message)
    }
}
f();

// const promise = (a,b) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(b !==0 ){
//                 resolve(a/b)
//             }else{
//                 reject(new Error('Math error'))
//             }
//         })
//     })
// }
// promise(2,1).then(x => {console.log(x)})
// .catch(e => {console.log(e)})