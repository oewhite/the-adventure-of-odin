scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 19))
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 28))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(15, 19))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeCountdownBy(10)
    tiles.setTileAt(tiles.getTileLocation(47, 35), sprites.dungeon.darkGroundNorthWest1)
})
let mySprite: Sprite = null
game.showLongText("Hello adventurer to complete the quest find the chest near a grass block", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 . . . . . . . . 
    . . . . 4 4 4 4 . . . . . . . . 
    . . . . 8 8 8 8 . . . . . . . . 
    . . . . 4 4 4 4 . . . . . . . . 
    . . . . 4 4 8 4 . . . . . . . . 
    . . . . . 4 4 4 . . . . . . . . 
    . . . 4 4 4 4 4 4 4 . . . . . . 
    . . 4 4 . 4 4 4 . 4 4 . . . . . 
    . . . . . 4 . 4 . . . . . . . . 
    . . . . . 4 . 4 . . . . . . . . 
    . . . . . 4 . 4 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
