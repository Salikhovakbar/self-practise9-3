const btnEl = document.getElementById("btn");
console.log(btnEl);
const box = document.querySelector(".containerstyle");
console.log(box);
btnEl.addEventListener('click', () => {
if(document.body.style.backgroundColor == "black"){
    document.body.style.backgroundColor = "white";
}
else{
    document.body.style.backgroundColor = "black";
}
if(box.style.display == "none"){
    box.style.display = "flex";
}
else{
    box.style.display = "none";
}
})
var sd = {
    userscars: ["BMW", "MERC", "SHEVROLET"],
    usersAge: ["20", "30", "18"]
};
console.log(sd.usersAge[sd.usersAge.length - 1])