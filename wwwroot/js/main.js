class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        //this.load.setBaseURL('https://labs.phaser.io');

        this.load.image('sky', 'images/space3.png');
        this.load.image('logo', 'images/phaser3-logo.png');
        this.load.image('red', 'images/red.png');

        this.load.spritesheet('naruto', 'images/naruto-run.png', { frameWidth: 80, frameHeight: 120 });
        this.load.spritesheet('fighter', 'images/fighter.png', { frameWidth: 200, frameHeight: 200 });

        this.load.audio('cat', ['audios/meow.mp3', 'audios/meow.ogg']);
    }

    create ()
    {
        this.add.image(400, 300, 'sky');
    
        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });
    
        const logo = this.physics.add.image(400, 50, 'logo');
    
        logo.setVelocity(-200, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
    
        particles.startFollow(logo);

        // sprite example: naruto

        this.naruto = this.add.sprite(50, 430, 'naruto');
        
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('naruto',
            {
                start: 0,
                end: 5
            }),
            frameRate: 8,
            repeat: -1
        });

        this.naruto.play('run');

        // play sound

        this.cat = this.sound.add('cat');
        this.cat.play();

        // keyboard control fighter

        let keys = this.input.keyboard.addKeys({
            up: 'up',
            down: 'down',
            left: 'left',
            right: 'right'
        });  // keys.up, keys.down, keys.left, keys.right
        
        var fighter = this.physics.add.sprite(100, 200, 'fighter');
        fighter.scale = 0.6;
        fighter.setCollideWorldBounds(true);

        this.anims.create({
            key: 'flight',
            frames: this.anims.generateFrameNumbers('fighter',
            {
                start: 12,
                end: 12
            }),
            frameRate: 8,
            repeat: 0
        });
        this.anims.create({
            key: 'flight-left',
            frames: this.anims.generateFrameNumbers('fighter',
            {
                start: 12,
                end: 10
            }),
            frameRate: 60,
            repeat: 0
        });
        this.anims.create({
            key: 'flight-right',
            frames: this.anims.generateFrameNumbers('fighter',
            {
                start: 12,
                end: 14
            }),
            frameRate: 60,
            repeat: 0
        });
        
        fighter.play('flight');

        // flight left/right

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

        // flight up/down

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

    update()
    {
        //console.log("x");
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);

