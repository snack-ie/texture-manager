Events.on(ClientLoadEvent, () => {
    let sprites = require("sprites");
    let dialog = new BaseDialog("Texture Manager");
    let searchFilter = Object.keys(sprites)
    let pane1;
    let coolSearch;
    dialog.addCloseButton();
    coolSearch = (s) => {
        searchFilter = Object.keys(sprites).filter(el => el.startsWith(s));
        dialog.cont.clear();
        dialog.cont.field(s, coolSearch);
        dialog.cont.row();
        dialog.cont.pane(pane1).width(300);
    };
    dialog.cont.field("", coolSearch);
    dialog.cont.row();
    pane1 = (p1) => {
        searchFilter.forEach(sprite => {
            Core.atlas.addRegion(sprite + "-default", Core.atlas.find(sprite));
            let coolIcon = new TextureRegionDrawable(Core.atlas.find(sprite));
            p1.button(sprite, coolIcon, () => {
                let selectionDialog = new BaseDialog(sprite);
                selectionDialog.addCloseButton();
                selectionDialog.cont.pane(p2 => {
                    p2.button("Default", Icon.star, () => {
                        Core.atlas.find(sprite).set(Core.atlas.find(sprite + "-default"));
                    }).width(200).padTop(10);
                    p2.row();

                    sprites[sprite].forEach(spr => {
                        let coolerIcon = new TextureRegionDrawable(Core.atlas.find(spr))
                        p2.button(spr, coolerIcon, () => {
                            Core.atlas.find(sprite).set(Core.atlas.find(spr));
                        }).width(200).padTop(10);
                        p2.row();
                    });
                }).width(300);
                selectionDialog.show();
            }).width(200).padTop(10);
            p1.row();
        });
    } //
    dialog.cont.pane(pane1).width(300);

    Vars.ui.settings.shown(() => {
        Vars.ui.settings.children.get(1).children.get(0).children.get(0).row();
        Vars.ui.settings.children.get(1).children.get(0).children.get(0).button("Texture Manager",
            Styles.cleart,
            () => {
                dialog.show();
            });
    });
});