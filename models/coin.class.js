class Coin extends MovableObject {
    IMAGES_COIN = [
        '../assets/img/8_coin/coin_1.png',
        '../assets/img/8_coin/coin_2.png'
    ];
    offset = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50
    };

    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.animateCoin();
        this.x = 200 + Math.random() * 1800;
        this.y = 100 + Math.random() * 200;
        this.width = 150;
        this.height = 150;
    }


    animateCoin() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 400);
    }
}