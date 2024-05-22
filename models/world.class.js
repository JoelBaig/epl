/**
 * Represents the game world.
 * 
 */
class World {
    character = new Character();
    healthBar = new Healthbar();
    coinBar = new Coinbar();
    bottleBar = new Bottlebar();
    bossHealthBar = new BossHealthbar();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    throwableObjects = [];
    throwBottle = false;

    /**
     * Creates an instance of World.
     * 
     * @param {HTMLCanvasElement} canvas - The canvas element for rendering.
     * @param {Object} keyboard - The keyboard input handler.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Sets the world reference for the character.
     * 
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Starts the game loop.
     * 
     */
    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkCollisionsCoin();
            this.checkCollisionsBottleLeft();
            this.checkCollisionsBottleRight();
            this.checkThrowObjects();
        }, 200);
    }

    /**
     * Checks collisions between the character and enemies.
     * 
     */
    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                console.log('is Coliding');
                this.character.hit();
                this.healthBar.setPercentage(this.character.energyStatus);
                // } else if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                //     this.level.enemies.splice(index, 1);
                //     this.dead = true;
            }
        });
    }

    /**
     * Checks collisions between the character and coins.
     * 
     */
    checkCollisionsCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                if (this.character.collectCoin()) {
                    this.coinBar.setPercentage(this.character.coinAmount);
                }
            }
        });
    }

    /**
     * Checks collisions between the character and bottles.
     * 
     */
    checkCollisionsBottleLeft() {
        this.level.bottleLeft.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottleLeft.splice(index, 1);
                if (this.character.collectBottle()) {
                    this.bottleBar.setPercentage(this.character.bottleAmount);
                }
            }
        });
    }


    checkCollisionsBottleRight() {
        this.level.bottleRight.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottleRight.splice(index, 1);
                if (this.character.collectBottle()) {
                    this.bottleBar.setPercentage(this.character.bottleAmount);
                }
            }
        });
    }

    /**
     * Checks if the player wants to throw objects.
     * 
     */
    checkThrowObjects() {
        if (this.keyboard.D && this.bottleAmount >= 1) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
            this.bottleAmount--;
        }
    }

    /**
     * Renders the game world.
     * 
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.healthBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.bossHealthBar);

        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottleLeft);
        this.addObjectsToMap(this.level.bottleRight);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }

    /**
     * Adds objects to the map for rendering.
     * 
     * @param {Object[]} objects - The objects to be added.
     */
    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        })
    }

    /**
     * Adds an object to the map for rendering.
     * 
     * @param {Object} mo - The object to be added.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawFrameRed(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * Flips the image horizontally for rendering.
     * 
     * @param {Object} mo - The object whose image is flipped.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * Restores the image to its original orientation.
     * 
     * @param {Object} mo - The object whose image is restored.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}