/**
 * Represents a drawable object in the game.
 * 
 */
class DrawableObject {
    x = 120;
    y = 200;
    height = 200;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     * Loads an image from the specified path.
     * 
     * @param {string} path - The path to the image.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
       * Draws the drawable object on the canvas context.
       * 
       * @param {CanvasRenderingContext2D} ctx - The canvas context.
       */
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(e) {
            console.warn('Error loading image', e);
            console.log('Could not load image', this.img.src);
        }

    }

    /**
     * Draws a frame around the drawable object if it's a specific type.
     * 
     * @param {CanvasRenderingContext2D} ctx - The canvas context.
     */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof ChickenBig || this instanceof ChickenSmall || this instanceof ChickenBoss) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Loads multiple images from an array of paths.
     * 
     * @param {string[]} arr - Array of image paths.
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}
