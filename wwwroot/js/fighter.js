export class fighter {
    constructor(scene) {
        this.keys = scene.input.keyboard.addKeys({
            up: 'up',
            down: 'down',
            left: 'left',
            right: 'right'
        });  // keys.up, keys.down, keys.left, keys.right
        
        this.fighter = scene.physics.add.sprite(100, 200, 'fighter');
        this.fighter.scale = 0.6;
        this.fighter.setCollideWorldBounds(true);

        this.setAnimes(scene);

        this.setKeys(this.keys);
    }

    flight() {
        this.fighter.play('flight');
    }

    setAnimes(scene) {
        scene.anims.create({
            key: 'flight',
            frames: scene.anims.generateFrameNumbers('fighter',
            {
                start: 12,
                end: 12
            }),
            frameRate: 8,
            repeat: 0
        });

        scene.anims.create({
            key: 'flight-left',
            frames: scene.anims.generateFrameNumbers('fighter',
            {
                start: 12,
                end: 10
            }),
            frameRate: 60,
            repeat: 0
        });
        
        scene.anims.create({
            key: 'flight-right',
            frames: scene.anims.generateFrameNumbers('fighter',
            {
                start: 12,
                end: 14
            }),
            frameRate: 60,
            repeat: 0
        });
    }

    setKeys(keys) {
        let fighter = this.fighter;

        keys.right.on('down',
            function(evt) {
                fighter.setVelocityX(300);
                fighter.play('flight-right');
            }
        );
        keys.right.on('up',
            function(evt) {
                if (!keys.left.isDown) {
                    fighter.setVelocityX(0);
                    fighter.play('flight');
                }
            }
        );
        keys.left.on('down',
            function(evt) {
                fighter.setVelocityX(-300);
                fighter.play('flight-left');
            }
        );
        keys.left.on('up',
            function(evt) {
                if (!keys.right.isDown) {
                    fighter.setVelocityX(0);
                    fighter.play('flight');
                }
            }
        );

        keys.down.on('down',
            function(evt) {
                fighter.setVelocityY(300);
            }
        );
        
        keys.down.on('up',
            function(evt) {
                if (!keys.up.isDown)
                    fighter.setVelocityY(0);
            }
        );
        
        keys.up.on('down',
            function(evt) {
                fighter.setVelocityY(-300);
            }
        );
        
        keys.up.on('up',
            function(evt) {
                if (!keys.down.isDown)
                    fighter.setVelocityY(0);
            }
        );
    }
}