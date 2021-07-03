class paper{

    constructor(x,y,radius){

        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }

        this.x=x
        this.y=y
        this.radius=radius
        this.body=Bodies.circle(x,y,radius,options)
        this.image=loadImage("paper.png")
        World.add(world,this.body)
        



    }
    display(){
    var store= this.body.position
    push()
    translate(store.x,store.y)
    image(this.image,0,0,this.radius,this.radius)
    pop()
    
        
    }
}
