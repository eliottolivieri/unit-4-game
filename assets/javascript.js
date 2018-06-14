

var wins = 0;


var losses = 0;


var ranNumber = 0;


crys1= Math.floor(Math.random()*12)+1;
crys2= Math.floor(Math.random()*12)+1;
crys3= Math.floor(Math.random()*12)+1;
crys4= Math.floor(Math.random()*12)+1;

var totScore = 0;



function onStart(){
    ranNumber= Math.floor(19+Math.random()*101);
    crys1= Math.floor(Math.random()*12)+1;
    crys2= Math.floor(Math.random()*12)+1;
    crys3= Math.floor(Math.random()*12)+1;
    crys4= Math.floor(Math.random()*12)+1;
    totScore = 0;
    $("#crystalNum").text(totScore);
    $("#RanNum").text(ranNumber);

}


$(document).ready(function(){
    $("#c1").click(function(){
        
        totScore = totScore + crys1;
        $("#crystalNum").text(totScore);
        if($("#RanNum").text === "0"){
            onstart();
            
        } 
        if(totScore === ranNumber){
            wins++;
            $("#w").text("wins: " + wins);
            onStart();
        }
        
        if(totScore > ranNumber){
                losses++;
                $("#l").text("losses: " + losses);
                onStart();
        }
    
         
    });
});

$(document).ready(function(){
    $("#c2").click(function(){
        
        totScore = totScore + crys2;
        $("#crystalNum").text(totScore); 
        if($("#RanNum").text === "0"){
            onstart();
            
        } 
        if(totScore === ranNumber){
            wins++;
            $("#w").text("wins: " + wins);
            onStart();
        }
        if(totScore > ranNumber){
            losses++;
            $("#l").text("losses: " + losses);
            onStart();
        }
    });
});

$(document).ready(function(){
    $("#c3").click(function(){
        
        totScore = totScore + crys3;
        $("#crystalNum").text(totScore); 
        if($("#RanNum").text === "0"){
            onstart();
           
        } 
        if(totScore === ranNumber){
            wins++;
            $("#w").text("wins: " + wins);
            onStart();
        }
        if(totScore > ranNumber){
            losses++;
            $("#l").text("losses: " + losses);
            onStart();
        } 
    });
});

$(document).ready(function(){
    $("#c4").click(function(){
        
        totScore = totScore + crys4;
        $("#crystalNum").text(totScore);
        if($("#RanNum").text === "0"){
            onstart();
           
        } 
        if(totScore === ranNumber){
            wins++;
            $("#w").text("wins: " + wins);
            onStart();
        }
        if(totScore > ranNumber){
            losses++;
            $("#l").text("losses: " + losses);
            onStart();
        }
    });
});

