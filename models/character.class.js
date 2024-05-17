/**
 * Represents a character object that can move and interact in the game world.
 * 
 */
class Character extends MovableObject {
    x = 100;
    y = 90;
    height = 240;
    width = 120;
    speed = 8;
    IMAGES_TIRED = [
        '../assets/img/2_character_pepe/1_idle/idle/I-1.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-2.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-3.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-4.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-5.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-6.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-7.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-8.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-9.png',
        '../assets/img/2_character_pepe/1_idle/idle/I-10.png'
    ];
    IMAGES_WALKING = [
        '../assets/img/2_character_pepe/2_walk/W-21.png',
        '../assets/img/2_character_pepe/2_walk/W-22.png',
        '../assets/img/2_character_pepe/2_walk/W-23.png',
        '../assets/img/2_character_pepe/2_walk/W-24.png',
        '../assets/img/2_character_pepe/2_walk/W-25.png',
        '../assets/img/2_character_pepe/2_walk/W-26.png'
    ];
    IMAGES_JUMPING = [
        '../assets/img/2_character_pepe/3_jump/J-31.png',
        '../assets/img/2_character_pepe/3_jump/J-32.png',
        '../assets/img/2_character_pepe/3_jump/J-33.png',
        '../assets/img/2_character_pepe/3_jump/J-34.png',
        '../assets/img/2_character_pepe/3_jump/J-35.png',
        '../assets/img/2_character_pepe/3_jump/J-36.png',
        '../assets/img/2_character_pepe/3_jump/J-37.png',
        '../assets/img/2_character_pepe/3_jump/J-38.png',
        '../assets/img/2_character_pepe/3_jump/J-39.png'
    ];
    IMAGES_HURT = [
        '../assets/img/2_character_pepe/4_hurt/H-41.png',
        '../assets/img/2_character_pepe/4_hurt/H-42.png',
        '../assets/img/2_character_pepe/4_hurt/H-43.png'
    ];
    IMAGES_DEAD = [
        '../assets/img/2_character_pepe/5_dead/D-51.png',
        '../assets/img/2_character_pepe/5_dead/D-52.png',
        '../assets/img/2_character_pepe/5_dead/D-53.png',
        '../assets/img/2_character_pepe/5_dead/D-54.png',
        '../assets/img/2_character_pepe/5_dead/D-55.png',
        '../assets/img/2_character_pepe/5_dead/D-56.png',
        '../assets/img/2_character_pepe/5_dead/D-57.png'
    ];
    world;
    walking_sound = new Audio('../assets/audio/running.mp3');

    /**
     * Constructs a new Character object.
     * 
     */

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.applyGravity();
        this.animate();
    }

    /**
     * Animates the character's actions and updates its state.
     * 
     * This method uses two intervals:
     * - The first interval handles movement and user input.
     * - The second interval handles character animations and state changes.
     */
    animate() {

        setInterval(() => {
            this.walking_sound.pause();

            if (!this.dead) {
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.walking_sound.play();
                }

                if (this.world.keyboard.LEFT && this.x > 0) {
                    this.moveLeft();
                    this.otherDirection = true;
                    this.walking_sound.play();
                }

                if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                    this.jump();
                }

                this.world.camera_x = -this.x + 100;
            }
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                this.dead = true;
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING);
            } else {
                if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.IMAGES_WALKING);
                } else if (this.doingNothing()) {
                    this.loadImage(this.IMAGES_WALKING[0]);
                }
            }
        }, 100);
    }

    /**
     * Checks if the character should remain idle.
     * 
     * @returns {boolean} True if the character should remain idle, false otherwise.
     */
    doingNothing() {
        if (!this.world.keyboard.RIGHT || !this.world.keyboard.LEFT || !this.world.keyboard.SPACE || !this.isHurt()) {
            return true;
        }
    }
}