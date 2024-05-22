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
    IMAGES_SLEEPING = [
        '../assets/img/2_character_pepe/1_idle/long_idle/I-11.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-12.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-13.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-14.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-15.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-16.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-17.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-18.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-19.png',
        '../assets/img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];
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
    offset = {
        top: 230,
        left: 100,
        right: 100,
        bottom: 150
    };
    WALKING_SOUND = new Audio('../assets/audio/walking.mp3');
    JUMPING_SOUND = new Audio('../assets/audio/jump.mp3');
    TAKING_DAMAGE_SOUND = new Audio('../assets/audio/taking_damage.mp3');
    DYING_SOUND = new Audio('../assets/audio/loose.mp3');

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
        this.loadImages(this.IMAGES_TIRED);
        this.loadImages(this.IMAGES_SLEEPING);
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
            if (!this.dead) {
                this.WALKING_SOUND.pause();
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.WALKING_SOUND.play();
                    // this.offset.top = this.x + 30;
                }

                if (this.world.keyboard.LEFT && this.x > 0) {
                    this.moveLeft();
                    this.otherDirection = true;
                    this.WALKING_SOUND.play();
                }

                if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                    this.JUMPING_SOUND.play();
                    this.jump();
                    // setInterval(this.offset.left = this.y + 100, 1000 / 60);
                }

                this.world.camera_x = -this.x + 100;
            }
        }, 1000 / 60);


        this.setStoppableInterval(() => {
            if (this.isDead()) {
                setTimeout(() => {
                    this.stopGame();
                }, 2000);
                this.DYING_SOUND.play();
                this.WALKING_SOUND.pause();
                this.playAnimation(this.IMAGES_DEAD);
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
                this.dead = true;
            } else if (this.isHurt()) {
                this.TAKING_DAMAGE_SOUND.play();
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.WALKING_SOUND.pause();
                this.playAnimation(this.IMAGES_JUMPING);
                // } else if (this.isAboveGround && this.isColliding()) {
                //     this.killEnemyByJump();
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

    /**
     * Makes the object jump by setting its vertical speed.
     * 
     */
    jump() {
        this.speedY = 30;
    }


    // killEnemyByJump() {
    //     this.level.enemies.forEach((enemy, index) => {
    //         this.killedEnemy(enemy, index);
    //     });
    // }


    // killedEnemy(enemy, index) {

    // }
}