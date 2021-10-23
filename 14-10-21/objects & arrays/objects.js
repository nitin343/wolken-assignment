var music = {
    "volume": "blaring",
    "current" :{
    "volume":'rednex',
    "song": "Cotton eye joe",
    "members": [
        {"firstname":"kemt","lastname":"olander"},
        {"firstname":"urban","lastname":"landgreen"},
        {"firstname":"jonas","lastname":"nilsson"},

    ]
},

"next": {
    "band":" the dubliners",
    "song": "finnegan's wake",
    "members": [
        {"firstname":"Ronnie","lastname":"Drew"},
        {"firstname":"Luke","lastname":"Kelly"},
        {"firstname":"barney","lastname":"mcKenna"},

    ] 
}
}

console.log({...music});
console.log(music.current.members[0].firstname);

music.current.members[0].firstname = "Lucky";

delete music.current.members[0];


console.log(music.current.members.length);

console.log({...music});


// var result = () => {

// }