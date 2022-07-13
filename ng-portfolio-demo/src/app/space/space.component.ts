import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import {FlyControls} from "three/examples/jsm/controls/FlyControls";


@Component({
  selector: 'space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
  // @ViewChild('myCanvas', { static: true })
  // public myCanvas!: ElementRef<HTMLCanvasElement>;
  // canvas = this.myCanvas.nativeElement;



  constructor() { }

  ngOnInit(): void {
    const container = document.querySelector('#container') as HTMLCanvasElement;
    const myCanvas = document.querySelector("#myCanvas") as HTMLCanvasElement;
    const clock = new THREE.Clock();
    let controls: FlyControls;
  

    // SCENE
    const scene = new THREE.Scene();
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      1,
      15000
    );
    camera.position.z = 250;
    const renderer = new THREE.WebGL1Renderer({ canvas: myCanvas, antialias: true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    // document.body.appendChild(renderer.domElement);


    createStarField();

    function createStarField() {
      const vertices= [];
      for (let i = 0; i < 5000; i++) {
        const x = 5000 * (Math.random() - 0.5);
        const y = 5000 * (Math.random() - 0.5);
        const z = 5000 * (Math.random() - 0.5);
        vertices.push(x, y, z);
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      const material = new THREE.PointsMaterial({
        size:8,
        color:0xffffff
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
    }

    const directionalLight = new THREE.DirectionalLight(0xfffffff, 1.9);
    directionalLight.position.set(1,1,1);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xfffffff, 2, 1000);
    scene.add(pointLight);


    controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 1000;
    controls.rollSpeed = Math.PI /50;

    animate();
   

    function animate(){
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      controls.update(delta);
      renderer.render(scene, camera);
    }

  }

}
