/**
 * Represents a bottle bar that displays the player's bottle status.
 * 
 */
class Bottlebar extends Statusbar {
    x = 15;
    y = 100;
    IMAGES = [
        '../assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        '../assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        '../assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        '../assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        '../assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        '../assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];

    /**
     * Constructs a new Bottlebar object.
     * 
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.percentage = 0;
        this.setPercentage(this.percentage);
    }
}