/**
 * Class representing a small chicken enemy.
 * 
 * Extends the MovableObject class.
 */
class ChickenSmall extends MovableObject {
    y = 375;
    height = 50;
    width = 40;
    IMAGES_WALKING = [
        '../assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        '../assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ];
    IMAGES_DEAD = [
        '../assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];
    dying_sound = new Audio('../assets/audio/chicken.mp3');
    offset = {
        top: 50,
        left: 40,
        right: 40,
        bottom: 50
    };
    energyStatus = 100;

    /**
     * Creates an instance of ChickenSmall.
     * 
     * Sets initial properties, loads images, and starts animation.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);

        this.x = 400 + Math.random() * 2000;
        this.speed = 0.15 + Math.random() * 0.25;

        this.animate();
    }

    /**
     * Animates the movement and walking animation of the chicken.
     * 
     * Moves the chicken horizontally and plays its walking animation.
     */

    animate() {
        setInterval(() => {
            this.moveLeft();
            // this.offset.top = this.x + 5;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 100);


        setInterval(() => {
            if (this.isDead()) {
                // this.DYING_SOUND.play();
                this.playAnimation(this.IMAGES_DEAD);
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                this.dead = true;
            }
        }, 100);
    }
}

