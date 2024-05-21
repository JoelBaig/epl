class Coin extends MovableObject {
    IMAGES_COIN = [
        '../assets/img/8_coin/coin_1.png',
        '../assets/img/8_coin/coin_2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.animateCoin();
        this.x = 200 + Math.random() * 1800;
        this.y = 100 + Math.random() * 200;
        this.width = 150;
        this.height = 150;
        this.offset.top = this.x + 50;
        this.offset.left = this.y + 50;
        this.offset.right = this.width - 100;
        this.offset.bottom = this.height - 100;
    }


    animateCoin() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 400);
    }
}