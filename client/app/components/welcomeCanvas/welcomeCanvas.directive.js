'use strict';
const angular = require('angular');

export default angular.module('awcApp.welcomeCanvas', [])
  .directive('welcomeCanvas', function() {
    
    var scene, camera, renderer;
    var geometry, material, mesh;
     
    init();
    animate();
     
    function init() {
     
        scene = new THREE.Scene();
     
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;
     
        geometry = new THREE.BoxGeometry( 200, 200, 200 );
        material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );
     
        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
     
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
     
        
     
    }
     
    function animate() {
     
        requestAnimationFrame( animate );
     
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
     
        renderer.render( scene, camera );
     
    }

    return {
      template: '<canvas></canvas>',
      restrict: 'EA',
      link: function(scope, element, attrs) {
        
        element[0].appendChild( renderer.domElement );

        element.text('this is the welcomeCanvas directive');
      
      }
    };
  })
  .name;