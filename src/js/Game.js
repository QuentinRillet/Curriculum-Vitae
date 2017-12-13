import * as BABYLON from 'babylonjs';
var Game = /** @class */ (function () {
    function Game(canvas) {
        var _this = this;
        this._canvas = canvas;
        this._engine = new BABYLON.Engine(this._canvas, false);
        this._engine.loadingUIText = "text";
        this._createScene();
        window.addEventListener("resize", function () {
            _this._engine.resize();
        });
    }
    ;
    Game.prototype._createScene = function () {
        var _this = this;
        this._scene = new BABYLON.Scene(this._engine);
        var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000 }, this._scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skybox", this._scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("static/3d/skybox/skybox", this._scene);
        skyboxMaterial.reflectionTexture.coordinatesMode =
            BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;
        var assetsManager = new BABYLON.AssetsManager(this._scene);
        assetsManager.addMeshTask("house", "", "./static/3d/", "house.babylon");
        assetsManager.onFinish = function (tasks) {
            _this._engine.runRenderLoop(function () {
                _this._scene.render();
            });
            _this._engine.resize();
            var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), _this._scene);
            var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), _this._scene);
            camera.setPosition(new BABYLON.Vector3(0, 10, -30));
            camera.attachControl(_this._canvas, true);
            camera.useAutoRotationBehavior = true;
        };
        assetsManager.load();
    };
    Game.prototype.fullScreen = function () {
        this._engine.switchFullscreen(true);
    };
    return Game;
}());
export { Game };
//# sourceMappingURL=Game.js.map