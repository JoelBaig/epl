/**
 * Class representing a background object.
 * 
 * Extends the MovableObject class.
 */
class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    /**
     * Creates an instance of BackgroundObject.
     * 
     * @param {string} imagePath - The path to the image of the background object.
     * @param {number} x - The x-coordinate of the background object on the canvas.
     */
    constructor(imagePath, x) {
        super().loadImage(imagePath);

        this.x = x;
        this.y = 480 - this.height;
    }
}

