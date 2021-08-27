let spriteArray = require("sprites");
function setup(body) {
    Object.keys(body).forEach(sprite => {
        /*
        if (!globalConfig[sprite]) {
        */
        if (sprite in spriteArray) {
            print("oh.")
            body[sprite].forEach(b => spriteArray[sprite].push(b))
        } else {
            spriteArray[sprite] = body[sprite];
        }
        /*
        } else {
            global.spriteConfig[sprite].push.apply(body[sprite])
        }
        */
    });
}

module.exports = setup