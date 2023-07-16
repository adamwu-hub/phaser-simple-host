export class asteroid {

    constructor(scene, id, posX, posY, scale, startFrame, endFrame) {
        this.id = id;
        this.scene = scene;
        
        this.asteroid = this.scene.physics.add.sprite(posX, posY, 'asteroid');
        this.asteroid.scale = scale;

        this.scene.anims.create({
            key: 'roll' + this.id,
            frames: this.scene.anims.generateFrameNumbers('asteroid',
            {
                start: startFrame,
                end: endFrame
            }),
            frameRate: 8,
            repeat: -1
        });
    }

    load() {
        this.asteroid.setVelocity(130, 50);
        this.asteroid.play('roll' + this.id);
    }
}