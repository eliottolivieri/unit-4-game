

var wins = 0;
var losses = 0;
var ranNumber;
var crys1;
var crys2;
var crys3;
var crys4;
var totScore;

function onStart(){
    ranNumber= Math.floor(Math.random()*120)+19;
    crys1= Math.floor(Math.random()*12)+1;
    crys2= Math.floor(Math.random()*12)+1;
    crys3= Math.floor(Math.random()*12)+1;
    crys4= Math.floor(Math.random()*12)+1;
    totScore = 0;
}


$(document).ready(function(){
    $("#c1").click(function(){
        totScore = totScore + crys1;
        $("#crystalNum").text(totScore);

        $
    });
});

$(document).ready(function(){
    $("#c2").click(function(){
        $(this).animate({ height: "200px" });
        $
    });
});
