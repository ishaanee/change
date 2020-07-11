class Form{
    constructor(){
this.input=createInput("email");
this.button=createButton("open");
this.greeting =createElement("h3");

        
    }

    hide()
        {
            this.greeting.hide()
            this.button.hide()
            this.input.hide()

        }
    
    display()
    {
        var title=createElement('h1')
        title.html("Donation for schools");
        title.position(130,10);
        this.input.position(130,160);
        this.button.position(250,200)
        this.button.mousePressed(()=>

        {
    this.input.hide()
    this.button.hide()
    player.name = this.input.value();
    count=count+1;
    player.index=count;
    player.update();
    player.updatecount(count);
    this.greeting.html("Welcome "+player.name);
    this.greeting.position(150,100);





        })
        
    }
}