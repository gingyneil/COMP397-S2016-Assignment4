var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play() {
            _super.call(this);
        }
        /**
         *
         */
        Play.prototype.Start = function () {
            // ocean object
            //this._ocean = new objects.Ocean("ocean");
            //this.addChild(this._ocean);
            this._sand = new objects.Sand("sand");
            this.addChild(this._sand);
            // island object
            //this._island = new objects.Island("island");
            //this.addChild(this._island);
            // player object
            //this._player = new objects.Player("plane");
            //this.addChild(this._player);
            // cloud object
            //this._cloud = new objects.Cloud("cloud");
            //this.addChild(this._cloud);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            //  this._ocean.update();
            //  this._island.update();
            // this._player.update();
            //this._cloud.update();
            this._sand.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Play.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map