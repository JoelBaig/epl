/**
 * Class representing a boss chicken enemy.
 * 
 * Extends the MovableObject class.
 */
class ChickenBoss extends MovableObject {
    y = 50;
    height = 400;
    width = 200;
    IMAGES_WALKING = [
        '../assets/img/4_enemie_boss_chicken/2_alert/G5.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G6.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G7.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G8.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G9.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G10.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G11.png',
        '../assets/img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    BOSS_SOUND = new Audio('../assets/audio/endboss.mp3');

    /**
     * Creates an instance of ChickenBoss.
     * 
     * Sets initial properties, loads images, and starts animation.
     */
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2500;
        this.animate();
    }

    /**
     * Animates the walking animation of the boss chicken.
     * 
     */
    animate() {
        setStoppableInterval(() => this.bossAnimation(), 200);
    }


    bossAnimation() {
        this.playAnimation(this.IMAGES_WALKING);
        i++;
    }
}
