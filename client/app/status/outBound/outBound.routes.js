'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('outbound', {
      url: '/outBound',
      template: '<out-bound></out-bound>',
      authenticate: true
	  
    })

    .state('outboundSkip', {
      url: '/outBound/skip/:skipNum',
      template: '<out-bound></out-bound>',
      authenticate: true
    })


    ;
}
