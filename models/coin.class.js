class Coin extends DrawableObject {
    IMAGES = [
        '../assets/img/8_coin/coin_1.png',
        '../assets/img/8_coin/coin_2.png'
    ];

    constructor(path) {
        super().loadImage(this.IMAGES);
        this.loadImages(path);
    }
}