import { preloader } from './preloader.js'
import { background } from './background.js'
import { naruto } from './naruto.js'
import { logo } from './logo.js'
import { meow } from './meow.js'
import { fighter } from './fighter.js'
import { asteroid } from './asteroid.js'

class Example extends Phaser.Scene
{
    logos = [];

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
    
        (new asteroid(this, 'a', 400, 400, 0.6, 0, 30)).load();
        (new asteroid(this, 'b', 500, 200, 1, 32, 62)).load();

        this.logos.push(new logo(this));
        this.logos[this.logos.length - 1].load();
        /*window.setTimeout(() => {
            this.logos.push(new logo(this));
            this.logos[this.logos.length - 1].load();
        }, 2000);

        window.setTimeout(() => {
            for(var i = 0; i < this.logos.length; i++) {
                this.logos[i].destroy();
            }
        }, 10000);*/

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