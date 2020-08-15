class Paper {
    constructor(x, y, width, height, angle) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image = loadImage("paper.png");
      }
}