let x = {name : "ekeeke", gvari : "xomski"};
let zd = {child : x};
zd.child.gvari = "qanava";
console.log(x.gvari);

Object.defineProperty(x, "asaki", {value: 12, writable: false});
x["asakii"] = 14;
console.log(x);

des([1, 2, 3, 4, 5])
console.log(x?.nameee);
console.log(JSON.stringify(x));

console.log(city({address: {city: "Toronto"}}));
// → Toronto
console.log(city({name: "Vera"}));
// → undefined

function des([a, b, c, d]){
    console.log({a, b, c, d});
}

function city(object) {
    return object.address?.city;
}