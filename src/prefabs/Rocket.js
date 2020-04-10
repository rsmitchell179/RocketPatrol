// Rocket Prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        
        scene.add.existing(this); // Add to existing Scene, DisplayList, UpdateList
        this.isFiring = false;  // Track rocket's firing status 
    }

    update() {
        // Left/right movement 
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= 47) {
                this.x -= 3;
            } else if(keyRIGHT.isDown && this.x <= 578) {
                this.x += 3;
            }
        }
        // Fire Button 
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true; 
        }
        // If fired, move up
        if(this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        // Reset on miss
        if(this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }
}