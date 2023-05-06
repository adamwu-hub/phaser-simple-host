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

        this.car = this.sound.add('cat');
        this.car.play();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 2000 }
        }
    },
    scene: Example
};

const game = new Phaser.Game(config);

