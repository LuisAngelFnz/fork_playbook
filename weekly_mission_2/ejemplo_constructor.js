function Tree (name) {
   this.name = name;
}

// var theTree = new Tree( "Redwood" );
// console.log( "theTree.constructor is " + theTree.constructor );

function Type () {}

var types = [
    new Array(),
    [],
    new Boolean(),
    true,             // no cambia
    new Date(),
    new Error(),
    new Function(),
    function () {},
    Math,
    new Number(),
    1,                // no cambia
    new Object(),
    {},
    new RegExp(),
    /(?:)/,
    new String(),
    "test"            // no cambia
];

for( var i = 0; i < types.length; i++ ) {
    types[i].constructor = Type;
    types[i] = [
        types[i].constructor,
        types[i] instanceof Type,
        types[i].toString()
    ];
}

console.log( types.join( "\n" ) );
//Los constructores de los tipos string,boolean y number(al parecer los mas nativos) no cambian