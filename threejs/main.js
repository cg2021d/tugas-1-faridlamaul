let scene, camera, renderer;

// set up the environment -

// 1.1. OctaHedron MeshLambertMaterial with PointLighting
let octaHedron;
let createOctaHedron = () => {
	let geometry = new THREE.OctahedronGeometry(0.7, 0);
	let material = new THREE.MeshLambertMaterial({ color: "#AF0C89" });
	octaHedron = new THREE.Mesh(geometry, material);
	octaHedron.position.set(-3, 1, 0);
	scene.add(octaHedron);
};

// 1.2. Cube MeshLambertMaterial wireframe with PointLighting
let cube;
let createCube = () => {
	let geometry = new THREE.BoxGeometry(1, 1, 1, 10, 10, 10);
	let material = new THREE.MeshLambertMaterial({ color: "#EF0E3B", wireframe: true });
	cube = new THREE.Mesh(geometry, material);
	cube.position.set(-3, -1, 0);
	scene.add(cube);
};

// 2.1. Cylinder MeshPhongMaterial with PointLighting
let cylinder;
let createCylinder = () => {
	let geometry = new THREE.CylinderGeometry(0.7, 0.7, 1, 20, 20);
	let material = new THREE.MeshPhongMaterial({ color: "#27DD64", shininess: 60 });
	cylinder = new THREE.Mesh(geometry, material);
	cylinder.position.set(0, 1, 0);
	scene.add(cylinder);
};

// 2.2. Cylinder MeshLambertMaterial wireframe with PointLighting
let icosaHedron;
let createIcosaHedron = () => {
	let geometry = new THREE.IcosahedronGeometry(0.7, 3);
	let material = new THREE.MeshLambertMaterial({ color: "#DB5B30", wireframe: true });
	icosaHedron = new THREE.Mesh(geometry, material);
	icosaHedron.position.set(0, -1, 0);
	scene.add(icosaHedron);
};

// 3.1. TorusKnot MeshPhongMaterial with PointLighting
let torusKnot;
let createTorusKnot = () => {
	let geometry = new THREE.TorusKnotGeometry(0.4, 0.15, 20, 20);
	let material = new THREE.MeshPhongMaterial({ color: "#0D9193", shininess: 60 });
	torusKnot = new THREE.Mesh(geometry, material);
	torusKnot.position.set(3, 1, 0);
	scene.add(torusKnot);
};

// 3.2. Sphere MeshPhongMaterial wireframe with PointLighting
let sphere;
let createSphere = () => {
	let geometry = new THREE.SphereGeometry(0.7, 30, 30);
	let material = new THREE.MeshPhongMaterial({ color: "#2460D8", shininess: 60, wireframe: true });
	sphere = new THREE.Mesh(geometry, material);
	sphere.position.set(3, -1, 0);
	scene.add(sphere);
};

// Lighting
let createLight = () => {
	// pointLight
	const pointLight = new THREE.PointLight("#FCF9FA", 1);
	pointLight.position.set(0, 3, 2);

	// ambientLight
	const ambientLight = new THREE.AmbientLight("#FCF9FA", 1);
	ambientLight.position.set(0, 3, 2);

	// spotLight
	const spotLight = new THREE.SpotLight("#FCF9FA", 1);
	spotLight.position.set(0, 3, 2);

	// hemisphereLight
	const hemisphereLight = new THREE.HemisphereLight("#FCF9FA", "#FF0000", 1);
	hemisphereLight.position.set(0, 3, 2);

	// directionalLight
	const directionalLight = new THREE.DirectionalLight("#FCF9FA", 1);
	directionalLight.position.set(0, 3, 2);

	const lightArr = [pointLight, ambientLight, spotLight, hemisphereLight, directionalLight];

	lightArr.forEach((light) => {
		scene.add(light);
		light.visible = false;
	});

	lightArr[0].visible = true;

	const selectedLight = document.getElementById("lighting");
	selectedLight.addEventListener("change", (lighting) => {
		const selected = lighting.target.value;
		lightArr.forEach((light) => {
			light.visible = false;
		});
		lightArr[selected - 1].visible = true;
	});
};

// initiallize scene, camera, objects and renderer
let init = () => {
	// 1. create the scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color("#181919");

	// 2. create an locate the camera
	camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 8;

	// 3. create an locate the object on the scene
	createOctaHedron();
	createCube();
	createCylinder();
	createIcosaHedron();
	createTorusKnot();
	createSphere();
	createLight();

	createLight();

	// 4. create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
};

// main animation loop - calls 50-60 in a second.
let mainLoop = () => {
	octaHedron.rotation.x += 0.01;
	octaHedron.rotation.y += 0.01;

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	cylinder.rotation.x += 0.01;
	cylinder.rotation.y += 0.01;

	icosaHedron.rotation.x += 0.01;
	icosaHedron.rotation.y += 0.01;

	torusKnot.rotation.x += 0.01;
	torusKnot.rotation.y += 0.01;

	sphere.rotation.x += 0.01;
	sphere.rotation.y += 0.01;

	renderer.render(scene, camera);
	requestAnimationFrame(mainLoop);
};

init();
mainLoop();
