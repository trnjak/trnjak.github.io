function AnchorFour(){
    var lmao = ["https://www.youtube.com/watch?v=XDQLQpEAP3w", 
                "https://www.youtube.com/watch?v=Efmq_uXt1Rk", 
                "https://www.youtube.com/watch?v=NCtzkaL2t_Y",
                "https://www.youtube.com/watch?v=TMssLuZOrE0",
                "https://www.youtube.com/watch?v=dzANcb-VXd0"]
    var random = Math.floor(Math.random() * 5)
    var anchor4 = document.getElementById("anchor4");
    anchor4.href = lmao[random]
}