System.register(['angular2/core', '../domain/block', '../domain/enums'], function(exports_1, context_1) {
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
    var core_1, block_1, enums_1;
    var BlockSize, BlockComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (block_1_1) {
                block_1 = block_1_1;
            },
            function (enums_1_1) {
                enums_1 = enums_1_1;
            }],
        execute: function() {
            BlockSize = 150;
            BlockComponent = (function () {
                function BlockComponent() {
                }
                BlockComponent.prototype.setBlockStyles = function () {
                    var x = BlockSize * (this.block.coord.x - 1);
                    var y = BlockSize * (this.block.coord.y - 1);
                    var z = BlockSize * (this.block.coord.z - 1);
                    var styles = {
                        'transform-style': 'preserve-3d',
                        'transform': "translate3d(" + x + "px, " + y + "px, " + z + "px)",
                        'display': this.block.visible ? 'block' : 'none'
                    };
                    return styles;
                };
                BlockComponent.prototype.setBlockClass = function () {
                    var str = '';
                    this.block.sides.forEach(function (side) {
                        if (side.trimmed) {
                            var sideKindName = enums_1.SideKind[side.sideKind];
                            var k = "trimmed-" + sideKindName;
                            str += k + ' ';
                        }
                    });
                    return str;
                };
                BlockComponent.prototype.setSideClass = function (side) {
                    var name = enums_1.SideType[side.sideType];
                    var className = "sideType-" + name;
                    if (side.selected) {
                        className += ' side-selected';
                    }
                    return className;
                };
                BlockComponent.prototype.selected = function (side) {
                    if (this.block.parentCube.selectedSide) {
                        this.block.parentCube.selectedSide.selected = false;
                    }
                    side.selected = true;
                    this.block.parentCube.selectedSide = side;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', block_1.Block)
                ], BlockComponent.prototype, "block", void 0);
                BlockComponent = __decorate([
                    core_1.Component({
                        selector: 'app-cube-block',
                        templateUrl: './app/components/block.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], BlockComponent);
                return BlockComponent;
            }());
            exports_1("BlockComponent", BlockComponent);
        }
    }
});
