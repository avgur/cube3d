System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BlockType, findDefaultSideType, SideType, SideKind;
    return {
        setters:[],
        execute: function() {
            (function (BlockType) {
                BlockType[BlockType["Coal"] = 0] = "Coal";
                BlockType[BlockType["Diamand"] = 1] = "Diamand";
                BlockType[BlockType["Gold"] = 2] = "Gold";
                BlockType[BlockType["Grass"] = 3] = "Grass";
                BlockType[BlockType["Ground"] = 4] = "Ground";
                BlockType[BlockType["Sand"] = 5] = "Sand";
                BlockType[BlockType["Stone"] = 6] = "Stone";
                BlockType[BlockType["Tree"] = 7] = "Tree";
                BlockType[BlockType["Undefined"] = 8] = "Undefined";
            })(BlockType || (BlockType = {}));
            exports_1("BlockType", BlockType);
            ;
            exports_1("findDefaultSideType", findDefaultSideType = function (blockType) {
                switch (blockType) {
                    case BlockType.Coal:
                        return SideType.Coal;
                    case BlockType.Diamand:
                        return SideType.Diamand;
                    case BlockType.Gold:
                        return SideType.Gold;
                    case BlockType.Grass:
                        return SideType.Grass;
                    case BlockType.Ground:
                        return SideType.Ground;
                    case BlockType.Sand:
                        return SideType.Sand;
                    case BlockType.Stone:
                        return SideType.Stone;
                    case BlockType.Tree:
                        return SideType.Tree;
                    case BlockType.Undefined:
                        return SideType.Undefined;
                }
            });
            (function (SideType) {
                SideType[SideType["Coal"] = 0] = "Coal";
                SideType[SideType["Diamand"] = 1] = "Diamand";
                SideType[SideType["Gold"] = 2] = "Gold";
                SideType[SideType["GoldWithFlower"] = 3] = "GoldWithFlower";
                SideType[SideType["GoldWithGrass"] = 4] = "GoldWithGrass";
                SideType[SideType["Grass"] = 5] = "Grass";
                SideType[SideType["GrassWithCStairs"] = 6] = "GrassWithCStairs";
                SideType[SideType["GrassWithHStairs"] = 7] = "GrassWithHStairs";
                SideType[SideType["GrassWithVStairs"] = 8] = "GrassWithVStairs";
                SideType[SideType["Ground"] = 9] = "Ground";
                SideType[SideType["GroundWithBottomGrass"] = 10] = "GroundWithBottomGrass";
                SideType[SideType["GroundWithFlowerStick"] = 11] = "GroundWithFlowerStick";
                SideType[SideType["GroundWithFlowerStickAndGrass"] = 12] = "GroundWithFlowerStickAndGrass";
                SideType[SideType["GroundWithGrassAndFlowerHead"] = 13] = "GroundWithGrassAndFlowerHead";
                SideType[SideType["GroundWithGrass"] = 14] = "GroundWithGrass";
                SideType[SideType["GroundWithGrassAndStairs"] = 15] = "GroundWithGrassAndStairs";
                SideType[SideType["Sand"] = 16] = "Sand";
                SideType[SideType["SandWithFlower"] = 17] = "SandWithFlower";
                SideType[SideType["SandWithGrass"] = 18] = "SandWithGrass";
                SideType[SideType["SandWithStairs"] = 19] = "SandWithStairs";
                SideType[SideType["SandWithStairsAndGrass"] = 20] = "SandWithStairsAndGrass";
                SideType[SideType["ShearTree"] = 21] = "ShearTree";
                SideType[SideType["Stone"] = 22] = "Stone";
                SideType[SideType["StoneOnGrass"] = 23] = "StoneOnGrass";
                SideType[SideType["StoneWithFlower"] = 24] = "StoneWithFlower";
                SideType[SideType["StoneWithGrass"] = 25] = "StoneWithGrass";
                SideType[SideType["Tree"] = 26] = "Tree";
                SideType[SideType["TreeWithGrass"] = 27] = "TreeWithGrass";
                SideType[SideType["Undefined"] = 28] = "Undefined";
            })(SideType || (SideType = {}));
            exports_1("SideType", SideType);
            (function (SideKind) {
                SideKind[SideKind["Front"] = 0] = "Front";
                SideKind[SideKind["Right"] = 1] = "Right";
                SideKind[SideKind["Left"] = 2] = "Left";
                SideKind[SideKind["Top"] = 3] = "Top";
                SideKind[SideKind["Back"] = 4] = "Back";
                SideKind[SideKind["Bottom"] = 5] = "Bottom";
            })(SideKind || (SideKind = {}));
            exports_1("SideKind", SideKind);
        }
    }
});
