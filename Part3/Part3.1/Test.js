//1
let me = {Name:"Erekle", age: 20};

for (let x in me){
    console.log(x, "-", me[x]);
}

//2
let ppl = [{Name:"Erekle", Age: 12}, {Name:"Erekle1", Age: 5}, {Name:"Erekle2", Age: 122}, {Name:"Erekle3", Age: 512}, {Name:"Erekle4", Age: -5}]
ppl.sort((x, y) => x["Age"] > y["Age"] ? 1 : -1);

for (let i = 0; i < ppl.length; i++){
    console.log(ppl[i]["Name"], ppl[i]["Age"]);
}

//3
const t = function(...x){
    let ret = {};
    for (let obj of x){
        for(let prp in obj){
            ret[String(obj[prp])] = prp;
        }
    }

    return ret;
};

let subj = {FirstName:"Saxeli", LastName:"Gvari"};
console.log(t({...subj}));

//4
const findAlgorithm = function(list, item){
    for(let i = 0; i < list.length; i++){
        pos = list[i];

        if(pos == item){
            return i;
        }
    }

    return -1;
}
me = {Name:"Erekle", Age: 12}
ppl = [me, {Name:"Erekle1", Age: 5}, {Name:"Erekle2", Age: 122}, {Name:"Erekle3", Age: 512}, {Name:"Erekle4", Age: -5}]
console.log(findAlgorithm(ppl, me));

//5
function highlightb() {
    let links = document.querySelectorAll('.highlightpls b');
    links.forEach(word => {
        word.style.backgroundColor = 'yellow';
    });
}

function highlighta() {
    let boldWords = document.querySelectorAll('#highlightlink');
    boldWords.forEach(word => {
        word.style.backgroundColor = 'yellow';
    });
}