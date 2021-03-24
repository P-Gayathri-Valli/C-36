class Form{
    constructor(){}

    display(){
        var title=createElement('h1');
        title.html("WELCOME TO OUR CAR RACING GAME");
        title.position(130,10);
        var input=createInput("NAME")
        var greeting=createElement('h3');
        var button=createButton("REGISTER");
        input.position(130,160);
        button.position(250,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value()
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello "+name);
            greeting.position(130,160);
        })
       

    }
    
}