export class logo {
    constructor(scene) {
        this.scene = scene;

        this.particles = this.scene.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        this.logo = this.scene.physics.add.image(400, 50, 'logo');
    }

    load() {
        this.logo.setVelocity(-200, 200);
        this.logo.setBounce(1, 1);
        this.logo.setCollideWorldBounds(true);

        this.particles.startFollow(this.logo);
    }
}