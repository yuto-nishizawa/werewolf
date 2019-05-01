
function start(){
    //card random
    for(i = ORDER_CARD.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = ORDER_CARD[i];
        ORDER_CARD[i] = ORDER_CARD[j];
        ORDER_CARD[j] = tmp;
    }

    //card furiwake
    for(i=0;i<USER_LIST.length; i++){
        USER_POSITION[i] = ORDER_CARD[i]
    }
    console.log(USER_POSITION);
}