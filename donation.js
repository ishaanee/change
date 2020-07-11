class Donation {
    constructor(){}

     getstate ()
     {
         var gamestateref=database.ref('gamestate');
         gamestateref.on("value",function(data){
            gamestate=data.val()

         })
     }
     update(state)
     {
         database.ref ('/').update({
             gamestate:state
         })

         
     }
async start ()
{
    if (gamestate===0)
    {
        player=new People();
        var playercountref=await database.ref('playercount').once("value");
    if (playercountref.exists()){
        count=playercountref.val();
        player.getcount();}
        form=new Form();
        form.display();
    }
}
play(){
    form.hide();
    text("Game start", 120, 100);
    Player.getplayerinfo();
    if (allplayers!=undefined){
        var displayposition =130
        for(var plr in allplayers)
        {
            if (plr==="player"+player.index)
            {
                fill("red");
            }
                else{
                    fill("black");
                }

        displayposition+=20;
        textSize(20)
        text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition)
    }
}
    if (keyIsDown (UP_ARROW)&&(player.index!=null)){
       player.distance+=50;

       player.update();
    }

    
}
    
}

