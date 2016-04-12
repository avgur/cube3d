System.register(['angular2/core', '../domain/cube', '../domain/block_library', '../domain/shape_library', './block.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cube_1, block_library_1, shape_library_1, block_component_1;
    var CubeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cube_1_1) {
                cube_1 = cube_1_1;
            },
            function (block_library_1_1) {
                block_library_1 = block_library_1_1;
            },
            function (shape_library_1_1) {
                shape_library_1 = shape_library_1_1;
            },
            function (block_component_1_1) {
                block_component_1 = block_component_1_1;
            }],
        execute: function() {
            CubeComponent = (function () {
                function CubeComponent() {
                    this.axisX = [true, true, true];
                    this.axisY = [true, true, true];
                    this.axisZ = [true, true, true];
                    this.texturesVisible = true;
                    this.trimmedVisible = false;
                    this.cube = new cube_1.Cube();
                    this.cube.fillRegion(block_library_1.BlockLibrary.getRegionV1());
                    this.cube.applyShapes(shape_library_1.ShapeLibrary.getShapeCollectionV1());
                }
                CubeComponent.prototype.ngOnInit = function () {
                    activateCubeRun();
                };
                CubeComponent.prototype.canToggleAxis = function (axis, current) {
                    return axis.filter(function (v) { return v; }).length > 1 || !axis[current];
                };
                CubeComponent.prototype.toggleAxisVisibility = function (axis, current) {
                    axis[current] = !axis[current];
                    this.cube.hideAxes({
                        x: this.axisX.map(function (v) { return !v; }),
                        y: this.axisY.map(function (v) { return !v; }),
                        z: this.axisZ.map(function (v) { return !v; })
                    });
                };
                CubeComponent.prototype.toggleShapeVisibility = function (shape) {
                    shape.toggleVisibility();
                };
                CubeComponent.prototype.reset = function () {
                    this.texturesVisible = true;
                    this.trimmedVisible = false;
                    this.axisX = [true, true, true];
                    this.axisY = [true, true, true];
                    this.axisZ = [true, true, true];
                    this.cube.shapes.forEach(function (s) { return s.visible = true; });
                };
                CubeComponent = __decorate([
                    core_1.Component({
                        selector: 'app-cube',
                        templateUrl: './app/components/cube.component.html',
                        directives: [
                            block_component_1.BlockComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CubeComponent);
                return CubeComponent;
            }());
            exports_1("CubeComponent", CubeComponent);
        }
    }
});
