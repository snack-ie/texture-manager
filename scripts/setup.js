let spriteArray = require("sprites");
function setup(body) {
    Object.keys(body).forEach(sprite => {
        /*
        if (!globalConfig[sprite]) {
        */
            spriteArray[sprite] = body[sprite];
        /*
        } else {
            global.spriteConfig[sprite].push.apply(body[sprite])
        }
        */
    });
}

module.exports = setup