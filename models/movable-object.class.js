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
    energy = 100;
    lastHit = 0;
    dead = false;

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
     * Checks if the object is colliding with another object.
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
     * Handles the object being hit, reducing its energy level.
     * 
     */
    hit() {
        this.energy -= 10;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
       * Checks if the object is hurt within a certain time frame.
       * 
       * @returns {boolean} True if the object is hurt, false otherwise.
       */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
         * Checks if the object is dead.
         * 
         * @returns {boolean} True if the object is dead, false otherwise.
         */
    isDead() {
        return this.energy == 0;
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