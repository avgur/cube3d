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
                    this.showTextures = true;
                    this.trimmed = false;
                    this.selected = false;
                }
                Object.defineProperty(Side.prototype, "title", {
                    get: function () {
                        var sideTypeTitle = enums_1.SideType[this.sideType];
                        var kindNumber = this.sideKind + 1;
                        var sideKindTitle = enums_1.SideKind[this.sideKind] + ("(#" + kindNumber + ")");
                        var belongsToMessage = "";
                        if (this.parent.parentShape) {
                            var shapeName = this.parent.parentShape.name || "NoName";
                            belongsToMessage = " belongs to '" + shapeName + "'";
                        }
                        var coord = this.parent.coord;
                        var title = sideTypeTitle + " (x:" + coord.x + ", y:" + coord.y + ", z:" + coord.z + ", " + sideKindTitle + ") " + belongsToMessage;
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
