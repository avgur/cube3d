System.register(['./shape'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var shape_1;
    var ShapeBuilder, ShapeLibrary;
    return {
        setters:[
            function (shape_1_1) {
                shape_1 = shape_1_1;
            }],
        execute: function() {
            ShapeBuilder = (function () {
                function ShapeBuilder() {
                }
                ShapeBuilder.prototype.getShapeCollectionV1 = function () {
                    var collection = new shape_1.ShapeCollection();
                    collection.create([[0, 0, 0], [1, 0, 0], [2, 0, 0], [1, 1, 0]], "Trinity");
                    collection.create([[1, 0, 1], [2, 0, 1], [2, 0, 2], [2, 1, 2]], "Jimmy");
                    collection.create([[0, 0, 1], [0, 0, 2], [1, 0, 2], [0, 1, 2]], "Robot");
                    collection.create([[0, 1, 0], [0, 2, 0], [1, 2, 0], [2, 2, 0]], "Tetris");
                    collection.create([[2, 1, 0], [2, 1, 1], [2, 2, 1], [2, 2, 2]], "Zetta");
                    collection.create([[0, 2, 2], [1, 2, 2], [1, 1, 2], [1, 1, 1]], "Solver");
                    collection.create([[0, 1, 1], [0, 2, 1], [1, 2, 1]], "Angle");
                    return collection;
                };
                return ShapeBuilder;
            }());
            exports_1("ShapeLibrary", ShapeLibrary = new ShapeBuilder());
        }
    }
});
