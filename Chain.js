class Chain {

constructor(bodyA,pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
stiffness:0.4,
length:10
}
this.pointB=pointB
this.chain=Matter.Constraint.create(options)
World.add(world,this.chain)


}
fly(){
this.chain.bodyA=null



}
display(){
strokeWeight(5)
if(this.chain.bodyA){


line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)

}


}







}

