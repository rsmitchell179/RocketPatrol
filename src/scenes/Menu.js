class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    
    create() {
        // Display Menu text
        this.add.text(20, 20, "Rocket Patrol Menu");

        // Launches the playScene
        this.scene.start("playScene");
    }
}