export class naruto {

    constructor(scene) {
        this.scene = scene;
        
        this.naruto = this.scene.add.sprite(50, 430, 'naruto');
        
        this.scene.anims.create({
            key: 'run',
            frames: this.scene.anims.generateFrameNumbers('naruto',
            {
                start: 0,
                end: 5
            }),
            frameRate: 8,
            repeat: -1
        });
    }

    load() {
        this.naruto.play('run');
    }
}