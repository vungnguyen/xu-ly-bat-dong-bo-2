async function onMyBirthday(isKayoSick) {
    if(isKayoSick) {
        return 2;
    }
    throw new Error('I am sad')
}
async function f() {
    try {
        let result = await onMyBirthday(true);
        console.log(result)
    }catch(e) {
        console.log(e.message)
    }finally {
        console.log('party')
    }
}
f();