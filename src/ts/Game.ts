import * as BABYLON from 'babylonjs';


export class Game {
    private _canvas: HTMLCanvasElement;
    private _engine: BABYLON.Engine;
    private _scene: BABYLON.Scene;
    private _camera: BABYLON.FreeCamera;
    private _light: BABYLON.Light;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas
        this._engine = new BABYLON.Engine(this._canvas, false);
        this._engine.loadingUIText = "text";
        this._createScene();

        window.addEventListener("resize", () => {
            this._engine.resize();
        });
    };

    private _createScene() {
        this._scene = new BABYLON.Scene(this._engine);

        var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000 }, this._scene);

        var skyboxMaterial = new BABYLON.StandardMaterial("skybox", this._scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture(
            "static/3d/skybox/skybox",
            this._scene
        );
        skyboxMaterial.reflectionTexture.coordinatesMode =
            BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;

        let assetsManager = new BABYLON.AssetsManager(this._scene);
        assetsManager.addMeshTask("house", "", "./static/3d/", "house.babylon");
        assetsManager.onFinish = tasks => {
            this._engine.runRenderLoop(() => {
                this._scene.render();
            });
            this._engine.resize();
            var light = new BABYLON.HemisphericLight(
                "light",
                new BABYLON.Vector3(0, 1, 0),
                this._scene
            );
            var camera = new BABYLON.ArcRotateCamera(
                "Camera",
                0,
                0,
                10,
                new BABYLON.Vector3(0, 0, 0),
                this._scene
            );
            camera.setPosition(new BABYLON.Vector3(0, 10, -30));
            camera.attachControl(this._canvas, true);
            camera.useAutoRotationBehavior = true;
        };
        assetsManager.load();
    }

    public fullScreen() {
        this._engine.switchFullscreen(true);
    }
}

