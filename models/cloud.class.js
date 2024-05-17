class Cloud extends MovableObject {
    y = 10;
    height = 300;
    width = 400;
    distanceBteweenClouds = 300;
    IMAGES_CLOUD = [
        '../assets/img/5_background/layers/4_clouds/1.png'
    ];
    constructor() {
        super().loadImage(this.IMAGES_CLOUD[0]);
        this.x = 10 + Math.random() * 2500;
        this.animate();
    }


    animate() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}