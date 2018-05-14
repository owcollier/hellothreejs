'use strict';

import * as THREE from 'three';

let scene, camera, renderer;

let geometry, material;

let cube;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  geometry = new THREE.BoxGeometry( 1, 1, 1 );
  material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  cube = new THREE.Mesh( geometry, material );
  scene.add( cube );

  camera.position.z = 5;

  // let controls = new THREE.OrbitControls( camera, renderer.domElement );
  // controls.maxPolarAngle = Math.PI * 0.5;
  // controls.minDistance = 1000;
  // controls.maxDistance = 5000;
}

function animate() {
  requestAnimationFrame( animate );
  cube.rotation.x += 0.005;
  cube.rotation.y += 0.005;
  renderer.render( scene, camera );
}

init();
animate();