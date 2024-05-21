/**
 * Represents a health bar that displays the player's health status.
 * 
 */
class Healthbar extends Statusbar {
    x = 15;
    y = 0;
    IMAGES = [
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/20.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/orange/40.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        '../assets/img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

    /**
     * Constructs a new Healthbar object.
     * 
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.percentage = 100;
        this.setPercentage(this.percentage);
    }
}