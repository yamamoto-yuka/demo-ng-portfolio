import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // For Timeline Animation
  @ViewChild('headline', { static: true }) headline: ElementRef<HTMLDivElement>;
  @ViewChild('logo', { static: true }) logo: ElementRef<HTMLDivElement>;
  @ViewChild('container', { static: true }) container: ElementRef<HTMLDivElement>;
  @ViewChild('projects', { static: true }) projects: ElementRef<HTMLDivElement>;
  @ViewChild('about', { static: true }) about: ElementRef<HTMLDivElement>;
  @ViewChild('contact', { static: true }) contact: ElementRef<HTMLDivElement>;
  @ViewChild('footer', { static: true }) footer: ElementRef<HTMLDivElement>;
  @ViewChild('desc', { static: true }) desc: ElementRef<HTMLDivElement>;
  @ViewChild('slider', { static: true }) slider: ElementRef<HTMLDivElement>;

  // For 3D Bg
  @ViewChild('myCanvas', { static: true }) myCanvas: ElementRef<HTMLDivElement>;

  constructor(private router: Router, private cs:CommonService) {}


  logo2 = '';
  thubnail = '';

  ngOnInit(): void {
    this.cs.getHomedata().subscribe(homeData =>{
      console.log(homeData);
      this.thubnail = 'http://localhost:1337' + homeData.data.attributes.bannerimage.data.attributes.formats.thubanil.url;

    })

    const clock = new THREE.Clock();
    let controls: FlyControls;

    const scene = new THREE.Scene();
    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      50,
      this.container.nativeElement.clientWidth /
        this.container.nativeElement.clientHeight,
      1,
      15000
    );

    const renderer = new THREE.WebGL1Renderer({
      canvas: this.myCanvas.nativeElement,
      antialias: true,
    });
    renderer.setSize(
      this.container.nativeElement.clientWidth,
      this.container.nativeElement.clientHeight
    );

    createStarField();

    function createStarField() {
      const vertices = [];
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
        size: 6,
        color: 0xffffff,
      });

      const stars = new THREE.Points(geometry, material);
      scene.add(stars);
    }
    controls = new FlyControls(camera, renderer.domElement);
    controls.movementSpeed = 1800;
    controls.rollSpeed = Math.PI / 30;

    animate();

    function onWindowResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }

    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      controls.update(delta);
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', onWindowResize);
    this.timelineAnimation();

    let navigateToAbout = () => {
      this.router.navigate(['about']);
    };

    let navigateToProjects = () => {
      this.router.navigate(['projects']);
    };

    this.about.nativeElement.addEventListener('click', () => {
      this.wideScreen();
      onWindowResize();
      this.wipeTransitionLeft();
      setTimeout(navigateToAbout, 2500);
    });

    this.projects.nativeElement.addEventListener('click', () => {
      this.wideScreen();
      onWindowResize();
      this.wipeTransitionRight();
      setTimeout(navigateToProjects, 2500);
    });

 
  }

  // TIME LINE ANIMATION
  timelineAnimation() {
    const tl = gsap.timeline();
    tl.fromTo(
      this.container.nativeElement,
      1.5,
      { height: '0%' },
      { height: '70%', ease: Power2.easeInOut }
    )
      .fromTo(
        this.container.nativeElement,
        1.7,
        { width: '0%' },
        { width: '100%', ease: Power2.easeInOut }
      )
      .fromTo(
        this.logo.nativeElement,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.projects.nativeElement,
        0.5,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.about.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.projects.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.headline.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.contact.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.footer.nativeElement,
        0.5,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0 },
        '-=0.5'
      )
      .fromTo(
        this.desc.nativeElement,
        1.6,
        { opacity: 1, left: '30%' },
        { opacity: 0, left: '0%', display: 'none', ease: Power2.easeInOut },
        '-=1.8'
      );
  }

  wideScreen() {
    const tl = gsap.timeline();
    tl.fromTo(this.contact.nativeElement, 1, { opacity: 1 }, { opacity: 0 })
      .fromTo(
        this.container.nativeElement,
        1,
        { position: 'relative', height: '90%' },
        { position: 'absolute', top: 0, height: '100%', ease: Power2.easeInOut }
      )
      .fromTo(
        this.container.nativeElement,
        1,
        { position: 'relative', widows: '100%' },
        { position: 'absolute', width: '100%', ease: Power2.easeInOut }
      );
  }

  wipeTransitionLeft() {
    const tl = gsap.timeline();
    tl.fromTo(
      this.slider.nativeElement,
      2.5,
      { opacity: 1, left: 0, width: '0%' },
      { width: '100%', ease: Power2.easeInOut }
    )
      .fromTo(
        this.projects.nativeElement,
        2.5,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeInOut },
        '-=2.5'
      )
      .fromTo(
        this.about.nativeElement,
        2,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeOut },
        '-=1'
      );
  }

  wipeTransitionRight() {
    const tl = gsap.timeline();
    tl.fromTo(
      this.slider.nativeElement,
      2.5,
      { opacity: 1, right: 0, width: '0%' },
      { width: '100%', ease: Power2.easeInOut }
    )
      .fromTo(
        this.about.nativeElement,
        2,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeInOut },
        '-=2'
      )
      .fromTo(
        this.projects.nativeElement,
        2,
        { opacity: 1 },
        { opacity: 0, ease: Power2.easeOut },
        '-=1'
      );
  }
}
