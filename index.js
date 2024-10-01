const increas = document.getElementById("increas");
const rest = document.getElementById("rest");
const decreas = document.getElementById("decreas");
const countlabel = document.getElementById("countlabel");
let count = 0;
increas.onclick = function(){
    count++;
    countlabel.textContent = count;
}
rest.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
decreas.onclick = function(){
    count--;
    countlabel.textContent = count;
}