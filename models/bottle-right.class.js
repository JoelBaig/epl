class BottleRight extends MovableObject {
    width = 90;
    height = 80;
    x = 100;
    y = 100;
    IMAGES_BOTTLE_RIGHT = [
        '../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];
    offset = {
        top: 15,
        left: 25,
        right: 25,
        bottom: 10
    };

    constructor() {
        super().loadImage(this.IMAGES_BOTTLE_RIGHT[0]);
        this.x = 200 + Math.random() * 1800;
        this.y = 370;
    }
}