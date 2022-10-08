
function alertSpam() {
    function remindSpam() {
        alert("well played, I will stop now");
    }
    let num = 1;
    while(num < 10){
        alert("Welcome, press ok please");
        num = num + 1
        if(num == 10){
            remindSpam();
        }
    }
    

}

alertSpam();

window.onscroll = function (e){
    scrollAnnoy();
}

function newSpam () {
    alert("You really tried good sir!");
}

function scrollAnnoy() {
    let num = 1;
    while(num<10){
        newSpam();
    }
}