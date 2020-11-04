scene.onOverlapTile(SpriteKind.Player, myTiles.transparency16, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setWallAt(location, true)
        tiles.setTileAt(location, sprites.castle.tilePath5)
    }
    if (controller.B.isPressed()) {
        tiles.setWallAt(tiles.getTileLocation(0, 0), false)
        tiles.setTileAt(location, myTiles.tile1)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setWallAt(location, false)
        tiles.setTileAt(location, myTiles.transparency16)
    }
    if (controller.B.isPressed()) {
        tiles.setWallAt(tiles.getTileLocation(0, 0), false)
        tiles.setTileAt(location, myTiles.tile1)
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    if (controller.A.isPressed()) {
        tiles.setWallAt(location, true)
        tiles.setTileAt(location, sprites.castle.tilePath5)
    }
    if (controller.B.isPressed()) {
        tiles.setWallAt(tiles.getTileLocation(0, 0), false)
        tiles.setTileAt(location, myTiles.transparency16)
    }
})
tiles.setTilemap(tiles.createTilemap(hex`1e000a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5], TileScale.Sixteen))
let mySprite = sprites.create(img`
    . . . . . . . . . . . 1 1 1 . . 
    . . . . . . . . . . . 1 1 1 . . 
    . . . . . . . . . . . 1 1 1 . . 
    . . . . . . . . . . . 1 1 1 . . 
    . . . . . . . . . . . 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 b 1 1 b 1 1 b 1 1 1 . . 
    . . 1 1 b 1 1 b 1 1 b 1 1 1 . . 
    . . 1 1 b 1 1 b 1 1 b 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(9)
