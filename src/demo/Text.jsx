import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';


function Text() {
  const canvasRef = useRef()

  useEffect(() => {
    if (!canvasRef) {
      return;
    }

    //canvas 绘制文字
    const textCanvas = document.createElement('canvas');
    // const textCanvas = document.getElementById('textCanvas');
    const textCanvasCtx = textCanvas.getContext('2d');
    textCanvas.width = 200;
    textCanvas.height = 200;
    textCanvasCtx.fillStyle = "orange";
    textCanvasCtx.font = "48px serif";
    textCanvasCtx.fillText("THREE", 0, 50);

    const texture = new THREE.TextureLoader().load(textCanvas.toDataURL("image/png"));
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 4, 4 );


    var scene = new THREE.Scene(); //场景
    var camera = new THREE.PerspectiveCamera( 75, window.innerHeight / window.innerWidth, 0.1, 1000);
    //相机 参数（视野角度、长宽比、远剪切面、近剪切面）
    var renderer = new THREE.WebGLRenderer(); //渲染器
    renderer.setSize( window.innerWidth, window.innerHeight );//将使得你的应用程序分辨率来进行渲染。
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1); //立方体对象
    var material = new THREE.MeshBasicMaterial({ map: texture }) //材质
    var cube = new THREE.Mesh( geometry, material); //网格
    scene.add( cube );

    camera.position.z = 5;

    function animate(){
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera);
    }
    animate();

  }, [canvasRef])


  return (
    <div ref={canvasRef} style={{ position: 'fixed', height: 1000, width: 1000 }} id="canvas" width={1000} height={1000} >
      {/* <canvas id="textCanvas"></canvas> */}
    </div>

  )
}

export default Text;
