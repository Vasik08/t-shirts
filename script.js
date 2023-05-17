console.log("hello world")
function vasilisa(){
    console.log( "vasilisa");
}
vasilisa()
function vidget(){
    var telegram="telegram: vsss_sim"
    let tel="tel:89226150046"
    alert(telegram+"\n"+tel)
}
// function age(){
//     let name = prompt('Введите ваше имя')
//     alert( 'Ваше имя ' + name + '\n' + 'ВАШЕ ИМЯ ' + name.toUpperCase() + '\n' + 'ваше имя ' + name.toLowerCase())
// }
// age()
// function age(){
//     let year = prompt('Введите ваш год рождения')
//     let age = 2022 - year
//     alert('Вы родились в ' + year + ' году' + '\n' + 'вам ' + age + ' лет')
// }
// age()
let button = document.getElementById('test')
console.log(button)
button.style.backgroundColor = 'red'
function mynumber(){
    let number = prompt('введи любимое число')
    let myfav = 4 
    if(myfav==number){
        console.log('ты угадал')
    }
    else if(myfav!=number){
        console.log('ты не угадал')
    }

    
}
// mynumber()
for(let i = 1;i<100;i++){
    console.log(i)
}
function showModel() {
let model = document.getElementById('model');
if(model.style.display === 'none'){
    model.style.display = 'block' 
}
else {
    model.style.display = 'none'
}
}
function fillStars(n){
    let stars = document.getElementsByClassName('star');
 for(let i = 0; i < n; i++){
    stars[i].src = "img/star.png"
 }
 for(let i = 4; i >= n; i--){
    stars[i].src = "img/star1.png"
 }
}
function showPodarok(){
    let pod = document.getElementById('pod');

if(pod.style.display === 'block'){
    pod.style.display = 'none' 
}
else {
    pod.style.display = 'block'
}
}

setInterval(showPodarok ,3000);

function CheckInput(){
let phone = document.getElementById('phone');
console.log(phone.value)
let pattern = RegExp(/\d/ , 'gi');
if (phone.value.match(pattern))

if (phone.value.length == 10) {
    console.log('Длинна правильная');
    phone.style.border = "5px solid green";

    
} else {
    phone.style.border = "5px solid red"
}
}
function checkName(){
let name = document.getElementById('name');
console.log(name.value)
if(name.value === ''){
    alert('ошибка')
}
}
function chargeTshirts(dir){
    let futbolkas = ['img/depositphotos_74690493-stock-photo-blank-black-t-shirt.jpg' , 'img/foot.jpg', 'img/photo.png', 'img/photo_1.png', 'img/footbolka.jpg', 'img/footb1.jpg', 'img/foot5.png']

let imgL = document.getElementById('imgL');
let imgR = document.getElementById('imgR');

let t = imgL.src.lastIndexOf('img');
let sub = imgL.src.slice(t);

let idL = futbolkas.indexOf(sub);

if(dir === 'r'){
    if(idL === 0){
        idL = futbolkas.length - 1
    }
    else{
        idL--
    }
    
}
else if (dir === 'l'){
    if(idL === futbolkas.length - 1){
        idL = 0 
    }
    else{
        idL++
    }
}
let idR = idL + 1;
    if(idR === futbolkas.length){
        idR = 0 
    }

imgL.src = futbolkas[idL]
imgR.src = futbolkas[idR]
}