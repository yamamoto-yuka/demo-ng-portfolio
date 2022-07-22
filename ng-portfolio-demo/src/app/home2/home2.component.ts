import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { gsap ,Power2,TweenMax, TimelineMax } from 'gsap';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
})
export class Home2Component implements OnInit {
  @ViewChild('container', { static: true })
  container: ElementRef<HTMLDivElement>;
  @ViewChild('myCanvas', { static: true }) myCanvas: ElementRef<HTMLDivElement>;
  @ViewChild('resumeText', { static: true }) resumeText: ElementRef<HTMLDivElement>;

  // scene:any;
  // camera:any;
  // renderer:any;
  // stars:any;
  // geometry:any;
  // vertices:any = [];

  progressValue = 0;
  progressEndValue:number;
  speed =50;
  conicGradient:any;
  skillProgress:any;

  skills:any[]=[
    {
      name:'HTML',
      level:60
    },
    {
      name:'CSS',
      level:50
    }
    ,
    {
      name:'JavaScript',
      level:30
    }
    ,
    {
      name:'Typescript',
      level:20
    }
    ,
    {
      name:'Angular',
      level:20
    }
    ,
    {
      name:'Node.js',
      level:20
    }
  ]

  constructor() {}




  ngOnInit(): void {
    // this.skillProgress =
    // setInterval(() =>{
    // this.progressValue++;
    // console.log(this.progressValue);
    // this.conicGradient = {background: `conic-gradient(
    //   #4d5bf9 ${this.progressValue * 3.6}deg,
    //   #cadcff ${this.progressValue * 3.6}deg
    // )`}
    // if(this.progressValue == this.progressEndValue){
    //   clearInterval(this.skillProgress);
    // }
    // },this.speed)

    
  
    let camera: any, scene: any, renderer: any, stars: any, vertices:any,velocities:any,accelerations:any;
    const vertex = new THREE.Vector3();

    const clock = new THREE.Clock();
    let controls: FlyControls;

    // SCENE
    scene = new THREE.Scene();

    // CAMERA
    camera = new THREE.PerspectiveCamera(
      60,
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

    createStarField();

    // CREATE Particle
    function createStarField() {
      vertices = [];
      velocities = [];
      accelerations = [];
      for (let i = 0; i < 6000; i++) {
        vertices.push(
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          Math.random() * 600 - 300,
          velocities.push( 0 ),
          accelerations.push( Math.random() )
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
        size: .9,
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

    function move() {
      let positionAttribute = stars.geometry.getAttribute('position');
      for (let i = 0; i < positionAttribute.count; i++) {
        vertex.fromBufferAttribute( positionAttribute, i );
		
        vertex.y -= 1;
		
        if (vertex.y < - 200) {
            vertex.y = 200;
        }
		
        positionAttribute.setXYZ( i, vertex.x, vertex.y, vertex.z );
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

    let r =100;
    let adjustJank = 4;

    let text = this.resumeText.nativeElement;


  }


}


