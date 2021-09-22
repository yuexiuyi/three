import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';


function Three(): JSX.Element {
	// var scene = new THREE.Scene(); //场景
  // var camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerWidth, 0.1, 1000);
  let canvas: HTMLCanvasElement = document.createElement("canvas");
  if (!canvas) {
    return (<div></div>);
  }
  let context = canvas.getContext('webgl2');
  if (!context) {
    return (<div></div>);
  }
  let renderer = new THREE.WebGLRenderer({ canvas, context });
  // var renderer = new THREE.WebGLRenderer(); //渲染期
  renderer.setSize( window.innerWidth, window.innerHeight );
  var geometry = new THREE.BoxGeometry( 1, 1, 1); //立方体对象

  let vertexShader = `\n
    void main() {\n
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n
    }\n
    \n`;

  let fragmentShader = `\n
    precision highp float;\n
    precision highp int;\n
    out vec4 out_FragColor;\n
    void main() {\n
      out_FragColor = vec4( 1.0 );\n
    }\n
    \n`;


  let material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader
  })


  var cube = new THREE.Mesh( geometry, material); //网格
  // scene.add(cube);

  // camera.position.z = 5;

  // function animate(){
  //   requestAnimationFrame( animate );
  //   cube.rotation.x += 0.01;
  //   cube.rotation.y += 0.01;
  //   renderer.render( scene, camera);
  // }
  // animate();


  return (
    <div/>
  )
}

export default Three
