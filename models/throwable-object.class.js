/**
 * Represents a throwable object in the game.
 * 
 */
class ThrowableObject extends MovableObject {
    /**
     * Creates an instance of ThrowableObject.
     * 
     * @param {number} x - The initial x-coordinate of the throwable object.
     * @param {number} y - The initial y-coordinate of the throwable object.
     */
    constructor(x, y) {
        super().loadImage('../assets/img/7_statusbars/3_icons/icon_salsa_bottle.png');
        this.x = x;
        this.y = y;
        this.height = 70;
        this.width = 60;
        this.throw();
    }

    /**
     * Throws the throwable object.
     * d
     */
    throw() {
        this.speedY = 35;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 15);
    }
} 