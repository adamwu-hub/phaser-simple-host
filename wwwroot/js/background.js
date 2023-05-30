export class background {

    constructor(scene) {
        this.scene = scene;
    }

    load() {
        this.scene.add.image(400, 300, 'sky');
    }
}