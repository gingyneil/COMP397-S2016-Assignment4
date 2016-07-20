var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Sand = (function (_super) {
        __extends(Sand, _super);
        function Sand(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        Sand.prototype._reset = function () {
            this.x = -800;
        };
        Sand.prototype._checkBounds = function () {
            if (this.x >= 0) {
                this._reset();
            }
        };
        Sand.prototype.start = function () {
            this._reset();
            this._dx = 5;
        };
        Sand.prototype.update = function () {
            this.x += this._dx;
            this._checkBounds();
        };
        return Sand;
    }(createjs.Bitmap));
    objects.Sand = Sand;
})(objects || (objects = {}));
//# sourceMappingURL=sand.js.map