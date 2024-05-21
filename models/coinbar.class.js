/**
 * Represents a coin bar that displays the player's coin status.
 * 
 */
class Coinbar extends Statusbar {
    x = 15;
    y = 50;
    IMAGES = [
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        '../assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png'
    ];
    percentage = 0;

    /**
     * Constructs a new Coinbar object.
     * 
     */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(this.coinAmount);
    }
}