class BottleLeft extends MovableObject {
    width = 90;
    height = 80;
    x = 100;
    y = 100;
    IMAGES_BOTTLE_LEFT = [
        '../assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png'
    ];
    offset = {
        top: 15,
        left: 35,
        right: 15,
        bottom: 10
    };

    constructor() {
        super().loadImage(this.IMAGES_BOTTLE_LEFT[0]);
        this.x = 200 + Math.random() * 1800;
        this.y = 350;
    }
}