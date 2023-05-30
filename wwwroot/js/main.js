import { preloader } from './preloader.js'
import { background } from './background.js'
import { naruto } from './naruto.js'
import { logo } from './logo.js'
import { meow } from './meow.js'
import { fighter } from './fighter.js'

class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        (new preloader(this)).load();
    }

    create ()
    {
        (new background(this)).load();
    
        (new logo(this)).load();
        window.setTimeout(() => { (new logo(this)).load(); }, 2000);

        (new naruto(this)).load();

        this.meow = new meow(this);

        this.fighter = new fighter(this);
        this.fighter.flight();    
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