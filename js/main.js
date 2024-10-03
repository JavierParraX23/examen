import * as THREE from 'three';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera ( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );  


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild (renderer.domElement);

const geometry = new THREE.BoxGeometry (1,1,1);
//const material = new THREE.MeshBasicMaterial ({color: 0Xff0000});
const material = new THREE.MeshStandardMaterial ({color: 0X00ff00});
const cube = new THREE.Mesh ( geometry, material );

const light = new THREE.AmbientLight( 0x404040 );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5);

//AGREGAR PLANO
const geometryPlane= new THREE.PlaneGeometry(5, 5)
const materialPlane= new THREE.MeshBasicMaterial({ color: 0xFF0000, wireframe: false })
const plane= new THREE.Mesh( geometryPlane, materialPlane)
scene.add(plane)
plane.rotation.x = Math.PI * -0.5
plane.position.set(-1,-1,-1)



//FIN

scene.add(cube);
scene.add(light);
scene.add(directionalLight);

camera.position.set(1,1,1);
directionalLight.position.set(10,1,5);
camera.lookAt (cube.position);


console.log(THREE.AmbientLight);

function animate()
{
  renderer.render( scene, camera );
}

