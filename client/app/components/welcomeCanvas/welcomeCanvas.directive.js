'use strict';
const THREE = require('three');
const angular = require('angular');

export default angular.module('awcApp.welcomeCanvas', [])
.directive('welcomeCanvas', function() {
  var DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;

  var width, height;

  width = window.innerWidth;
  height = window.innerHeight - 50 - 44;


  var scene, camera, renderer;
  var geometry, material, lightBack, inner;

  var windowHalfX, windowHalfY;

  var mouseX = 0;
  var mouseXOnMouseDown = 0;
  var targetRotation = 0;
  var targetRotationOnMouseDown = 0;

  var frID;

  init();
  // animate();

  function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, width / height, 1, 10000 );
    camera.position.z = 20;

    material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

    material = new THREE.MeshLambertMaterial({
      color: 0xff0000,
      wireframe: true,
      wireframeLinewidth: 1,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.2,
    });

    inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(
        10,
        2
        ),
      material
      );
    scene.add(inner);



    lightBack = new THREE.DirectionalLight( 0xff00ff, 5, 1000 );
    lightBack.position.set( 0, 0, 400 );
    scene.add( lightBack );


        // mesh = new THREE.Mesh( geometry, material );
        // scene.add( mesh );

        renderer = new THREE.WebGLRenderer();
        renderer.setClearColor( 0xffffff ,  1.0);
        
        renderer.setSize( width, height );
        renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);


        window.ondevicemotion = function(event) {
          var accelerationX = event.accelerationIncludingGravity.x;
          var accelerationY = event.accelerationIncludingGravity.y;
          var accelerationZ = event.accelerationIncludingGravity.z;
          
          inner.rotation.y += 0.0075 * accelerationX;
          inner.rotation.x += 0.004 * accelerationY;
          inner.rotation.z += 0.0002 * accelerationZ;

        };
        

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;


      }



      function animate() {

        frID = requestAnimationFrame( animate );

        // inner.rotation.z += 0.001;
        // inner.rotation.x += 0.001;
        // inner.rotation.y += 0.001;

        inner.material.color.offsetHSL(0.001,0.0,0);
        
        inner.rotation.y += ( targetRotation - inner.rotation.y ) * 0.05;

        lightBack.rotation.z += 0.004;
        lightBack.rotation.x += 0.004;
        lightBack.rotation.y += 0.004;
        lightBack.color.offsetHSL(0.001,0.0,0);

        renderer.render( scene, camera );

      }

      return {
        template: '<div></div>',
        restrict: 'EA',
        link: function(scope, element, attrs) {
          animate();
          scope.$on('$destroy', function(){
            window.cancelAnimationFrame(frID);
          });

          var parentContainer = element.parent().parent()[0];

          element[0].appendChild( renderer.domElement );

          //element.text('this is the welcomeCanvas directive');

          function onWindowResize(){
              width = window.innerWidth;
              height = window.innerHeight - 50 - 44;

              camera.aspect = width / height;
              camera.updateProjectionMatrix();

              renderer.setSize( width, height );
          }


          function initLis(){
            parentContainer.addEventListener( 'mousedown', onDocumentMouseDown, false );
            parentContainer.addEventListener( 'touchstart', onDocumentTouchStart, false );
            parentContainer.addEventListener( 'touchmove', onDocumentTouchMove, false );
          
            window.addEventListener( 'resize', onWindowResize, false );
          }
          initLis();


          function onDocumentMouseDown( event ) {

            //event.preventDefault();

            parentContainer.addEventListener( 'mousemove', onDocumentMouseMove, false );
            parentContainer.addEventListener( 'mouseup', onDocumentMouseUp, false );
            parentContainer.addEventListener( 'mouseout', onDocumentMouseOut, false );

            mouseXOnMouseDown = event.clientX - windowHalfX;
            targetRotationOnMouseDown = targetRotation;

          }

          function onDocumentMouseMove( event ) {

            mouseX = event.clientX - windowHalfX;

            targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

          }

          function onDocumentMouseUp( event ) {

            parentContainer.removeEventListener( 'mousemove', onDocumentMouseMove, false );
            parentContainer.removeEventListener( 'mouseup', onDocumentMouseUp, false );
            parentContainer.removeEventListener( 'mouseout', onDocumentMouseOut, false );

          }

          function onDocumentMouseOut( event ) {

            parentContainer.removeEventListener( 'mousemove', onDocumentMouseMove, false );
            parentContainer.removeEventListener( 'mouseup', onDocumentMouseUp, false );
            parentContainer.removeEventListener( 'mouseout', onDocumentMouseOut, false );

          }

          function onDocumentTouchStart( event ) {

            if ( event.touches.length === 1 ) {

              // event.preventDefault();

              mouseXOnMouseDown = event.touches[ 0 ].pageX - windowHalfX;
              targetRotationOnMouseDown = targetRotation;

            }

          }

          function onDocumentTouchMove( event ) {

            if ( event.touches.length === 1 ) {

              //event.preventDefault();

              mouseX = event.touches[ 0 ].pageX - windowHalfX;
              targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.05;

            }

          }

        

      }
    };
  })
.name;
