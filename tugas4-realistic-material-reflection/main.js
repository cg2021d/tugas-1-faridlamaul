import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js";

let camera, scene, renderer;

let count = 0,
	cubeCamera1,
	cubeCamera2,
	cubeRenderTarget1,
	cubeRenderTarget2;

(function init() {
	scene = new THREE.Scene();
	const color = 0x000000;
	const near = 1;
	const far = 100;

	// Panorama
	const panorama = new THREE.CubeTextureLoader();
	const textureBg = panorama.load([
		"img/posx.jpg",
		"img/negx.jpg",
		"img/posy.jpg",
		"img/negy.jpg",
		"img/posz.jpg",
		"img/negz.jpg",
	]);
	scene.background = textureBg;
	scene.fog = new THREE.Fog(color, near, far);

	//lighting
	const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
	directionalLight.position.set(24, 25, 60);
	directionalLight.castShadow = true;
	scene.add(directionalLight);

	camera = new THREE.PerspectiveCamera(75, 2, 0.1, 100);
	camera.position.x = 5;
	camera.position.y = 5;
	camera.position.z = 15;

	const floorMaterial = new THREE.MeshPhongMaterial({
		side: THREE.DoubleSide,
		map: new THREE.TextureLoader().load("./img/lantai.jpg"),
	});

	const floor = new THREE.Mesh(new THREE.PlaneGeometry(50, 50, 100, 100), floorMaterial);
	floor.receiveShadow = true;
	floor.rotation.x = -Math.PI / 2;
	floor.position.y = -3;
	scene.add(floor);

	const box1 = new GLTFLoader();
	box1.load("model/wooden_crate.glb", (gltf) => {
		gltf.scene.traverse(function (node) {
			if (node.isMesh) {
				node.castShadow = true;
				node.receiveShadow = true;
				node.position.set(-3, -0.9, -2);
				node.scale.set(2, 2, 2);
			}
		});
		scene.add(gltf.scene);
	});

	const box2 = new GLTFLoader();
	box2.load("model/wooden_crate.glb", (gltf) => {
		gltf.scene.traverse(function (node) {
			if (node.isMesh) {
				node.castShadow = true;
				node.receiveShadow = true;
				node.position.set(-2, -1.4, 5);
				node.scale.set(1.5, 1.5, 1.5);
			}
		});
		scene.add(gltf.scene);
	});

	cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget(256, {
		format: THREE.RGBFormat,
		generateMipmaps: true,
		minFilter: THREE.LinearMipmapLinearFilter,
		encoding: THREE.sRGBEncoding,
	});

	cubeCamera1 = new THREE.CubeCamera(1, 1000, cubeRenderTarget1);

	cubeRenderTarget2 = new THREE.WebGLCubeRenderTarget(256, {
		format: THREE.RGBFormat,
		generateMipmaps: true,
		minFilter: THREE.LinearMipmapLinearFilter,
		encoding: THREE.sRGBEncoding,
	});

	cubeCamera2 = new THREE.CubeCamera(1, 1000, cubeRenderTarget2);

	const refGeometry = new THREE.SphereGeometry(1, 32, 32);
	const refMaterial = new THREE.MeshBasicMaterial({
		envMap: cubeRenderTarget2.texture,
		combine: THREE.MultiplyOperation,
		reflectivity: 1,
	});
	const reflective = new THREE.Mesh(refGeometry, refMaterial);

	reflective.castShadow = true;
	reflective.receiveShadow = true;

	reflective.position.set(3, 2, -2);
	scene.add(reflective);

	renderer = new THREE.WebGLRenderer({ antialias: true });

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	controls.dampingFactor = 0.25;
	controls.enableZoom = true;

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMap.enabled = true;
	renderer.render(scene, camera);
	document.body.appendChild(renderer.domElement);

	function animation() {
		reflective.rotation.x += 0.01;
		reflective.rotation.y += 0.01;
		reflective.rotation.z += 0.01;

		if (count % 2 === 0) {
			cubeCamera1.update(renderer, scene);
		} else {
			cubeCamera2.update(renderer, scene);
		}

		count++;
		renderer.render(scene, camera);
		requestAnimationFrame(animation);
	}
	animation();
})();
