let scene, camera, renderer, controls, rayCast;

// fungsi untuk me-random
let randomInRange = (from, to) => {
	let x = Math.random() * (to - from);
	return x + from;
};

// fungsi untuk membuat icosahedron geometry
let createIcosahedron = () => {
	// inisialisasi 5 warna yang berbeda
	const colorList = [0xaf0c89, 0xef0e3b, 0x27dd64, 0xdb5b30, 0x2460d8];
	let color = colorList[Math.floor(randomInRange(0, 5))];
	let emissive = color + 0.05;
	let geometry = new THREE.IcosahedronGeometry(4, 0);
	let material = new THREE.MeshLambertMaterial({ color: color, emissive: emissive });
	let icosahedron = new THREE.Mesh(geometry, material);

	// posisi icosahedron random saat dipanggil
	icosahedron.position.x = randomInRange(-40, 40);
	icosahedron.position.y = randomInRange(-40, 40);
	icosahedron.position.z = randomInRange(-40, 40);

	scene.add(icosahedron);
};

let scoreCorrect = 10;
let scoreWrong = 0;
let currentScore = 0;
let highScore = 0;
let elementScore = document.getElementById("score");
let elementHighScore = document.getElementById("highscore");

// variabel untuk menyimpan objek yang dipilih
let selectedObject = [];
// variabel untuk menyimpan warna asli yang telah di generate
let originalColors = [];

let onMouseClick = (e) => {
	mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
	mouse.z = 1;

	rayCast.setFromCamera(mouse, camera);
	let intersects = rayCast.intersectObjects(scene.children, false);

	// jika objek gagal diambil
	if (intersects.length == 0) {
		return;
	}
	// jika objek berhasil diambil
	else {
		selectedObject.push(intersects);
		originalColors.push(intersects[0].object.material.color.getHex());

		// jika objek yang dipilih lebih dari satu
		if (selectedObject.length > 1) {
			// jika objek yang dipilih sama
			if (selectedObject[0][0].object.uuid === selectedObject[1][0].object.uuid) {
				selectedObject[0][0].object.material.emissive.setHex(originalColors[0]);
				selectedObject[0][0].object.rotation.y = 0;
			}
			// jika warna objek yang dipilih sama
			else if (originalColors[0] == originalColors[1]) {
				selectedObject.forEach((object) => {
					object[0].object.geometry.dispose();
					object[0].object.material.dispose();
					scene.remove(object[0].object);
					renderer.renderLists.dispose();
				});
				currentScore += scoreCorrect;
				elementScore.innerHTML = currentScore;
			}
			// jika object dan warna yang dipilih berbeda
			else {
				selectedObject[0][0].object.material.emissive.setHex(originalColors[0]);
				selectedObject[0][0].object.rotation.y = 0;
				currentScore += scoreWrong;
				elementScore.innerHTML = currentScore;
			}
			selectedObject = [];
			originalColors = [];
		}
	}
};

// generate icosahedron yang baru
let speed = 4000;
const baseSpeed = 4000;

let generateIcosahedron = () => {
	if (scene.children.length >= 100) {
		speed = baseSpeed;

		if (currentScore > highScore) {
			highScore = currentScore;
			elementHighScore.innerHTML = highScore;
		}

		currentScore = 0;
		elementScore.innerHTML = currentScore;
	} else {
		speed -= 250;
		createIcosahedron();
	}
	setTimeout(generateIcosahedron, speed);
};

// set up the environment - initiallize scene, camera, objects and renderer
let init = () => {
	// create the scene
	scene = new THREE.Scene();
	const Texture = new THREE.TextureLoader().load("../assets/img/bg-galaxy.jpg");
	scene.background = Texture;

	// create an locate the camera
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.z = 60;

	// set up lighting dengan PointLight
	var light = new THREE.PointLight("#FCF9FA", 0.7);
	scene.add(light);
	light.position.set(0, 60, 60);

	// membuat dan memasukkan icosahedron ke dalam scene
	for (let i = 1; i <= 50; i++) createIcosahedron();

	// tambah icosahedron baru
	generateIcosahedron();

	// create the renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);
	document.addEventListener("click", onMouseClick, false);

	// control orbit
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;

	// inisialisasi raycaster
	rayCast = new THREE.Raycaster();
	mouse = new THREE.Vector2();
	mouse.x = mouse.y = -1;
};

let mainLoop = () => {
	if (selectedObject.length == 1) {
		selectedObject[0][0].object.material.emissive.setHex();
		selectedObject[0][0].object.rotation.y += 0.09;
	}

	renderer.render(scene, camera);
	controls.update();
	window.requestAnimationFrame(mainLoop);
};

init();
mainLoop();
