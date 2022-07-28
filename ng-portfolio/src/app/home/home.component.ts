import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { gsap, Power2 } from 'gsap';

@Component({
  selector: 'app-top',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // GET DOM ELEMENT
  @ViewChild('container', { static: true })
  container: ElementRef<HTMLDivElement>;
  @ViewChild('myCanvas', { static: true }) myCanvas: ElementRef<HTMLDivElement>;
  @ViewChild('headline', { static: true }) headline: ElementRef<HTMLDivElement>;
  @ViewChild('logo', { static: true }) logo: ElementRef<HTMLDivElement>;
  @ViewChild('projects', { static: true }) projects: ElementRef<HTMLDivElement>;
  @ViewChild('about', { static: true }) about: ElementRef<HTMLDivElement>;
  @ViewChild('contact', { static: true }) contact: ElementRef<HTMLDivElement>;
  @ViewChild('topText', { static: true }) topText: ElementRef<HTMLDivElement>;
  @ViewChild('slider', { static: true }) slider: ElementRef<HTMLDivElement>;

  constructor() {}

  // OPENING ANIMATION
  timelineAnimation() {
    const tl = gsap.timeline();
    tl.fromTo(
      this.container.nativeElement,
      1.5,
      { height: '0' },
      { height: '100vh', ease: Power2.easeInOut }
    )
      .fromTo(
        this.container.nativeElement,
        1.7,
        { width: '0%' },
        { width: '100%', ease: Power2.easeInOut }
      )
      .fromTo(
        this.topText.nativeElement,
        1.5,
        { opacity: 1, left: '30%' },
        { opacity: 0, left: '0%', display: 'none', ease: Power2.easeOut },
        '-=1.5'
      )
      .fromTo(
        this.logo.nativeElement,
        1.8,
        { opacity: 0 },
        { opacity: 1, ease: Power2.easeInOut }
      )
      .fromTo(
        this.projects.nativeElement,
        1.8,
        { opacity: 0 },
        { opacity: 1, ease: Power2.easeInOut },
        '-=1.8'
      )
      .fromTo(
        this.about.nativeElement,
        1.8,
        { opacity: 0 },
        { opacity: 1, ease: Power2.easeInOut },
        '-=1.8'
      )
      .fromTo(
        this.headline.nativeElement,
        1.8,
        { opacity: 0 },
        { opacity: 1, ease: Power2.easeInOut },
        '-=1.8'
      )
      .fromTo(
        this.contact.nativeElement,
        1.8,
        { opacity: 0 },
        { opacity: 1, ease: Power2.easeInOut },
        '-=1.98'
      );
  }

  ngOnInit(): void {
    // SPACE BG
    let camera: any,
      scene: any,
      renderer: any,
      stars: any,
      vertices: any,
      velocities: any,
      accelerations: any;
    const vertex = new THREE.Vector3();
    const clock = new THREE.Clock();
    let controls: FlyControls;

    // SCENE
    scene = new THREE.Scene();

    // CAMERA
    camera = new THREE.PerspectiveCamera(
      90,
      this.container.nativeElement.clientWidth /
        this.container.nativeElement.clientHeight,
      1,
      15000
    );

    // RENDERER
    renderer = new THREE.WebGL1Renderer({
      canvas: this.myCanvas.nativeElement,
      antialias: true,
    });
    renderer.setSize(
      this.container.nativeElement.clientWidth,
      this.container.nativeElement.clientHeight
    );

    // CREATE Particle
    createStarField();
    function createStarField() {
      vertices = [];
      velocities = [];
      accelerations = [];
      for (let i = 0; i < 6000; i++) {
        vertices.push(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          velocities.push(0),
          accelerations.push(Math.random())
        );
      }

      // GEOMETORY
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      // MATERIAL
      const sprite = new THREE.TextureLoader().load('../../assets/star.png');
      const material = new THREE.PointsMaterial({
        size: 0.6,
        color: 0xffffff,
        map: sprite,
      });
      stars = new THREE.Points(geometry, material);
      scene.add(stars);
    }

    // FlyControls
    controls = new FlyControls(camera, renderer.domElement);
    // controls.movementSpeed = 1800;
    controls.rollSpeed = Math.PI / 30;

    animate();

    //WINDOW RESIZE
    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }

    // AUTO MOVE
    function move() {
      let positionAttribute = stars.geometry.getAttribute('position');
      for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute(positionAttribute, i);
        vertex.y -= 1;
        if (vertex.y < -300) {
          vertex.y = 300;
        }
        positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z);
      }
      positionAttribute.needUpdate = true;
    }

    // ANIMATION (RENDERING) CALLBACK FUNCTION
    function animate() {
      requestAnimationFrame(animate);
      move();
      const delta = clock.getDelta();
      controls.update(delta);
      renderer.render(scene, camera);
    }

    //EXECUTE WINDOW RESIZE
    window.addEventListener('resize', onWindowResize);

    //EXECUTE OPENING ANIMATION
    this.timelineAnimation();
  }
}
