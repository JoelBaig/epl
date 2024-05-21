/**
 * Represents a big chicken enemy in the game.
 * 
 * Extends the MovableObject class.
 */
class ChickenBig extends MovableObject {
    height = 80;
    width = 60;
    IMAGES_WALKING = [
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    dying_sound = new Audio('../assets/audio/chicken.mp3');
    offset = {
        top: 25,
        left: 350,
        right: 50,
        bottom: 70
    };

    /**
     * Creates an instance of ChickenBig.
     * 
     * Sets initial properties, loads images, and starts animation.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
        this.x = 400 + Math.random() * 2000;
        this.y = 350;
        this.speed = 0.15 + Math.random() * 0.25;
    }

    /**
     * Animates the movement and walking animation of the chicken.
     * 
     * Moves the chicken horizontally and plays its walking animation.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
            this.offset.top = this.x +5;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);
    }
}