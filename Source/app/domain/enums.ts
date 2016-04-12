export enum BlockType
{
    Coal,
    Diamand,
    Gold,
    Grass,
    Ground,
    Sand,
    Stone,
    Tree,
    Undefined
};

export var findDefaultSideType = (blockType: BlockType) : SideType => {
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
}

export enum SideType
{
    Coal,
    Diamand,
    Gold,
    GoldWithFlower,
    GoldWithGrass,
    Grass,
    GrassWithCStairs,
    GrassWithHStairs,
    GrassWithVStairs,
    Ground,
    GroundWithBottomGrass,
    GroundWithFlowerStick,
    GroundWithFlowerStickAndGrass,
    GroundWithGrassAndFlowerHead,
    GroundWithGrass,
    GroundWithGrassAndStairs,
    Sand,
    SandWithFlower,
    SandWithGrass,
    SandWithStairs,
    SandWithStairsAndGrass,
    ShearTree,
    Stone,
    StoneOnGrass,
    StoneWithFlower,
    StoneWithGrass,
    Tree,
    TreeWithGrass,
    Undefined
}

export enum SideKind{
    Front,
    Right,
    Left,
    Top,
    Back,
    Bottom
}