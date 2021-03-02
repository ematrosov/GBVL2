var str = 'name'
reg = /^[a-zа-яё]+$/i
console.log(str.match(reg)[1])


var phone = '+70000000000'
reg = /^\+7(\d{10})$/
console.log(phone.match(reg)[1])


function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}