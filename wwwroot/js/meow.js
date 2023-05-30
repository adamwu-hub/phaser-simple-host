export class meow {
    constructor(scene) {
        this.sound = scene.sound.add('meow');
    }

    play() {
        this.sound.play();
    }
}