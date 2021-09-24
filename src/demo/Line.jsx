import React, {  useEffect, useRef } from 'react';
import * as THREE from 'three';


function Line() {
  const canvasRef = useRef()

  useEffect(() => {
    if (!canvasRef) {
      return;
    }
    let canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer();//渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);////将使得你的应用程序分辨率来进行渲染。
    canvas.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);//相机 参数（视野角度、长宽比、远剪切面、近剪切面）
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    //接下来我们要做的事情是定义一个材质。对于线条来说，我们能使用的材质只有LineBasicMaterial 或者 LineDashedMaterial。
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    //带有一些顶点的geometry
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    //线是画在每一对连续的顶点之间的

    const line = new THREE.Line(geometry, material);

    //添加到场景，并调用render
    scene.add(line);
    renderer.render(scene, camera);



  }, [canvasRef])


  return (
    <div ref={canvasRef} style={{ position:'fixed' ,height:1000,width:1000}} id ="canvas" width={1000} height={1000} />
  )
}

export default Line;
