class CloudTypeTwo extends MovableObject {
    y = 30;
    height = 300;
    width = 400;

    constructor() {
        super().loadImage('assets/img/5_background/layers/4_clouds/2.png');
        this.x = 1600 + Math.random() * 600;
        this.animate();
    }


    animate() {
        this.moveLeft();
    }
}