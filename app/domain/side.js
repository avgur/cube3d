System.register(['./enums'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var enums_1;
    var Side;
    return {
        setters:[
            function (enums_1_1) {
                enums_1 = enums_1_1;
            }],
        execute: function() {
            Side = (function () {
                function Side(sideKind, sideType, parent) {
                    this.sideKind = sideKind;
                    this.sideType = sideType;
                    this.parent = parent;
                    this.coordMap = {
                        x: [0, 1, 2],
                        y: [2, 1, 0],
                        z: [0, 1, 2]
                    };
                    this.trimmed = false;
                    this.selected = false;
                }
                Object.defineProperty(Side.prototype, "sideTypeTrimmedName", {
                    get: function () {
                        var name = this.trimmed ? 'Undefined' : this.sideTypeName;
                        return name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Side.prototype, "sideTypeName", {
                    get: function () {
                        var name = enums_1.SideType[this.sideType];
                        return name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Side.prototype, "sideKindName", {
                    get: function () {
                        var name = enums_1.SideKind[this.sideKind];
                        return name;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Side.prototype, "sideKindIndex", {
                    get: function () {
                        return this.sideKind + 1;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Side.prototype, "title", {
                    get: function () {
                        var sideTypeTitle = this.sideTypeTrimmedName;
                        var kindNumber = this.sideKindIndex;
                        var sideKindTitle = this.sideKindName + ("(#" + kindNumber + ")");
                        var belongsToMessage = "";
                        if (this.parent.parentShape) {
                            var shapeName = this.parent.parentShape.name || "NoName";
                            belongsToMessage = " belongs to '" + shapeName + "'";
                        }
                        var x = this.parent.displayCoord.x;
                        var y = this.parent.displayCoord.y;
                        var z = this.parent.displayCoord.z;
                        var title = sideTypeTitle + " (x:" + x + ", y:" + y + ", z:" + z + ", " + sideKindTitle + ") " + belongsToMessage;
                        return title;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Side;
            }());
            exports_1("Side", Side);
        }
    }
});
