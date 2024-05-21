class BottleLeft extends MovableObject {
    width = 90;
    height = 80;
    x = 100;
    y = 100;
    IMAGES_BOTTLE_LEFT = [
        '../assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOTTLE_LEFT[0]);
        this.x = 200 + Math.random() * 1800;
        this.y = 350;
        this.offset.top = this.x + 70;
        this.offset.left = this.y + 70;
        this.offset.right = this.width - 120;
        this.offset.bottom = this.height - 140;
    }
}