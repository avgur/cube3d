import { Shape, ShapeCollection } from './shape'

class ShapeBuilder{
    getShapeCollectionV1() : ShapeCollection {
        let collection: ShapeCollection = new ShapeCollection();
        
        collection.create([[0,0,0],[1,0,0],[2,0,0],[1,1,0]], "Trinity");
        collection.create([[1,0,1],[2,0,1],[2,0,2],[2,1,2]], "Jimmy");
        collection.create([[0,0,1],[0,0,2],[1,0,2],[0,1,2]], "Robot");
        collection.create([[0,1,0],[0,2,0],[1,2,0],[2,2,0]], "Tetris");
        collection.create([[2,1,0],[2,1,1],[2,2,1],[2,2,2]], "Zetta");
        collection.create([[0,2,2],[1,2,2],[1,1,2],[1,1,1]], "Solver");
        collection.create([[0,1,1],[0,2,1],[1,2,1]], "Angle");
        
        return collection; 
    }
}

export var ShapeLibrary = new ShapeBuilder(); 