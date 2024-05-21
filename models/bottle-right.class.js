class BottleRight extends MovableObject {
    width = 90;
    height = 80;
    x = 100;
    y = 100;
    IMAGES_BOTTLE_RIGHT = [
        '../assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOTTLE_RIGHT[0]);
        this.x = 200 + Math.random() * 1800;
        this.y = 370;
        this.offset.top = this.x + 60;
        this.offset.left = this.y + 70;
        this.offset.right = this.width - 120;
        this.offset.bottom = this.height - 140;
    }
}