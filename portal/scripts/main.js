const d = new Date();
let year = d.getFullYear();
console.log(year);
document.querySelector("#year").innerHTML = year;
const changed = new Date(document.lastModified);
let month = changed.getMonth() + 1;
let day = changed.getDate();
let cyear = changed.getFullYear();
let hours = changed.getHours();
let mins = changed.getMinutes();
let seconds = changed.getSeconds();
document.querySelector("#changed").innerHTML = month + "/" + day + "/" + cyear + " " + hours + ":" + mins + ":" + seconds;