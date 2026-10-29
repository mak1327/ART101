function paintPage (color){
 $("body").css( "background-color", color );
}

paintPage("pink");

let count=0;

let colors=["green", "orange", "brown", "yellow", "gold", "purple", "red", "pink"];
let colorsCount=0;
let buttonText="";

$("#needy-button").click( function(){ 

    count = count +1; 

    console.log(count);
    console.log(colors[count-1]);

    buttonText="I was kicked " + count + " times and color is " + colors[colorsCount];

    $("#needy-button").html( buttonText ); 

    $("body").css( "background-color", colors[colorsCount] );

    colorsCount = colorsCount +1;

    $("body").append("<img src='" + colors[colorsCount]);
    if (colorsCount >= 8) {colorsCount=0;}
});