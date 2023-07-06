export class preloader {

    constructor(scene) {
        this.scene = scene;
    }

    load() {
        let scene = this.scene;

        //scene.load.setBaseURL('https://labs.phaser.io');

        scene.load.image('sky', 'images/space3.png');
        scene.load.image('logo', 'images/phaser3-logo.png');
        scene.load.image('red', 'images/red.png');

        scene.load.spritesheet('naruto', 'images/naruto-run.png', { frameWidth: 80, frameHeight: 120 });
        scene.load.spritesheet('fighter', 'images/fighter.png', { frameWidth: 200, frameHeight: 200 });
        scene.load.spritesheet('asteroid', 'images/asteroid.png', { frameWidth: 128, frameHeight: 127 });

        scene.load.audio('meow', ['audios/meow.mp3', 'audios/meow.ogg']);
    }
}