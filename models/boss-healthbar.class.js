/**
 * Represents a health bar that displays the endbosses health status.
 * 
 */
class BossHealthbar extends Statusbar {
    x = 1800;
    y = 0;
    IMAGES = [
        '../assets/img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        '../assets/img/7_statusbars/2_statusbar_endboss/blue/blue100.png'
    ];

    /**
     * Constructs a new Healthbar object.
     * 
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 2500;
    }
}