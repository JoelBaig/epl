/**
 * Represents a movable object in the game.
 * 
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energyStatus = 100;
    lastHitFromEnemy = 0;
    dead = false;
    coinAmount = 0;
    bottleAmount = 0;
    COLLECT_COIN_SOUND = new Audio('../assets/audio/collect_coin.mp3');
    COLLECT_BOTTLE_SOUND = new Audio('../assets/audio/collect_bottle.mp3');
    DYING_SOUND = new Audio('../assets/audio/loose.mp3');

    /**
     * Applies gravity to the object, making it fall downwards.
     * 
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 500 / 25);
    }

    /**
     * Checks if the object is above the ground.
     * 
     * @returns {boolean} True if the object is above the ground, false otherwise.
     */
    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 190;
        }
    }

    /**
     * Checks if the movable object is colliding with another movable object.
     * 
     * @param {MovableObject} mo - The other movable object to check collision with.
     * @returns {boolean} True if the objects are colliding, false otherwise.
     */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x + mo.width &&
            this.y < mo.y + mo.height;
    }

    /**
     * Checks if the movable object is colliding with a static object.
     * 
     * @param {MovableObject} mo - The other movable object to check collision with.
     * @returns {boolean} True if the objects are colliding, false otherwise.
     */
    // isColliding(mo) {
    //     return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
    //         this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
    //         this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
    //         this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    // }

    /**
     * Handles the object being hit, reducing its energy level.
     * 
     */
    hit() {
        this.energyStatus -= 10;
        if (this.energyStatus < 0) {
            this.energyStatus = 0;
        } else {
            this.lastHitFromEnemy = new Date().getTime();
        }
    }

    /**
     * Handles the object collecting coin, increase its coin amount.
     * 
     */
    collectCoin() {
        this.COLLECT_COIN_SOUND.play();
        this.coinAmount += 20;
        if (this.coinAmount <= 100) {
            console.log('coinAmount', this.coinAmount);
            return true;
        } else {
            return false;
        }
    }

    /**
     * Handles the object collecting bottle, increase its bottle amount.
     * 
     */
    collectBottle() {
        this.COLLECT_BOTTLE_SOUND.play();
        this.bottleAmount += 20;
        if (this.bottleAmount <= 100) {
            console.log('bottleAmount', this.bottleAmount);
            return true;
        } else {
            return false;
        }
    }

    /**
       * Checks if the object is hurt within a certain time frame.
       * 
       * @returns {boolean} True if the object is hurt, false otherwise.
       */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHitFromEnemy;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
         * Checks if the object is dead.
         * 
         * @returns {boolean} True if the object is dead, false otherwise.
         */
    isDead() {
        return this.energyStatus == 0;

    }

    /**
      * Plays an animation by updating the image of the object.
      * 
      * @param {string[]} images - Array of image paths for the animation.
      */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Moves the object to the right by its speed.
     * 
     */
    moveRight() {
        this.x += this.speed;
    }

    /**
     * Moves the object to the left by its speed.
     * 
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
     * Makes the object jump by setting its vertical speed.
     * 
     */
    jump() {
        this.speedY = 30;
    }
}