Events.on(ClientLoadEvent, () => {
    let dialog = new BaseDialog("Texture Manager");
    dialog.addCloseButton();
    let sprites = require("sprites");

    dialog.cont.pane(p1 => {
        Object.keys(sprites).forEach(sprite => {
            Core.atlas.addRegion(sprite + "-default", Core.atlas.find(sprite));
            let coolIcon = new TextureRegionDrawable(Core.atlas.find(sprite));
            p1.button(sprite, coolIcon, () => {
                let selectionDialog = new BaseDialog(sprite);
                selectionDialog.addCloseButton();
                selectionDialog.cont.pane(p2 => {
                    p2.button("Default", Icon.star, () => {
                        Core.atlas.find(sprite).set(Core.atlas.find(sprite + "-default"));
                    }).width(200);
                    p2.row();

                    sprites[sprite].forEach(spr => {
                        let coolerIcon = new TextureRegionDrawable(Core.atlas.find(spr))
                        p2.button(spr, coolerIcon, () => {
                            Core.atlas.find(sprite).set(Core.atlas.find(spr));
                        }).width(200);
                        p2.row();
                    });
                }).width(300);
                selectionDialog.show();
            }).width(200);
            p1.row();
        });
    }).width(300);

    Vars.ui.settings.shown(() => {
        Vars.ui.settings.children.get(1).children.get(0).children.get(0).row();
        Vars.ui.settings.children.get(1).children.get(0).children.get(0).button("Texture Manager",
            Styles.cleart,
            () => {
                dialog.show();
            });
    });
});