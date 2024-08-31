function AnchorFour(){
    var lmao = ["https://www.youtube.com/watch?v=XDQLQpEAP3w", //wind waker
                "https://www.youtube.com/watch?v=Efmq_uXt1Rk", //welcome to hell
                "https://www.youtube.com/watch?v=NCtzkaL2t_Y", //don't let me down
                "https://www.youtube.com/watch?v=TMssLuZOrE0", //john hell
                "https://www.youtube.com/watch?v=dzANcb-VXd0", //get off the road
                "https://www.youtube.com/watch?v=vWW2SzoAXMo", //helter skelter
                "https://www.youtube.com/watch?v=sepcj45774I", //only acting
                "https://www.youtube.com/watch?v=lCv_XBTRVC0", //i
                "https://www.youtube.com/watch?v=lxj5bzgFoGI"]; //take off your dress
    var random = Math.floor(Math.random() * 9);
    var anchor4 = document.getElementById("anchor4");
    anchor4.href = lmao[random];
}

/*function oott(){
    var videoLmao = document.getElementById("videoLmao");
    if(new Date().getDay() == 4){
        videoLmao.style.display = "";
    }
    else{
        videoLmao.style.display = "none";
    }
}*/

function loadVideo(){
    var outOfTouch = document.getElementById("outOfTouch");
    if(outOfTouch.style.display == "none"){
        outOfTouch.style.display = "";
    }
    else{
        outOfTouch.style.display = "none";
    }
}