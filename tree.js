class Tree
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.width = 450;
		this.height = 600;
		this.thickness = 10;
		
		this.image = loadImage("pluckingMangoes/tree.png")
		this.bottomTree = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true})
		this.leftTree = Bodies.rectangle(0, this.y-this.height/2, this.thickness, this.height, {isStatic:false})
		this.rightTree = Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:false})
		
		World.add(world, this.bottomTree)
		World.add(world, this.leftTree)
		World.add(world, this.rightTree);

	}
	display()
	{
			var posBottom=this.bottomTree.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			pop()
			
	}

}
