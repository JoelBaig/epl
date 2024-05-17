class Bottle extends MovableObject {
    width = 90;
    height = 80;
    x = 100;
    y = 100;
    IMAGES_BOTTLE = [
        '../assets/img/7_statusbars/3_icons/icon_salsa_bottle.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOTTLE[0]);
        this.x = 200 + Math.random() * 1800;
        this.y = 100 + Math.random() * 200;
    }
}