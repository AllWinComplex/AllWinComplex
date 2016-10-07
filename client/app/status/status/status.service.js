'use strict';
const angular = require('angular');

/*@ngInject*/
export class StatusService {
	// AngularJS will instantiate a singleton by calling "new" on this function
	constructor(){
		'ngInject';
    	
    	this.filters = [
	      {
	        key: 'all',
	        val: 'All Status',
	        title: 'Status',
	        active: true
	      },
	      {
	        key: 'thanks',
	        val: 'Thanks',
	        title: 'Thanks',
	        active: false
	      },
	      {
	        key: 'gooddeeds',
	        val: 'Good Deeds',
	        title: 'Good Deeds',
	        active: false
	      },
	      {
	        key: 'happiness',
	        val: 'Happiness',
	        title: 'Happiness',
	        active: false
	      },
	      {
	        key: 'applause',
	        val: 'Applause',
	        title: 'Applause',
	        active: false
	      },
	      {
	        key: 'others',
	        val: 'Others',
	        title: 'Others',
	        active: false
	      },

	    ];	
	}


    getCurrentFilter(){
    	return this.filters.filter(function(val){
    		return val.active === true;
    	})[0];
    }
    setCurrentFilter(sel){
    	return this.filters.forEach(function(val){
    		if (val === sel){
    			val.active = true;
    		}else{
    			val.active = false;
    		}
    	});
    }

}

export default angular.module('awcApp.status', [])
  .service('status', StatusService)
  .name;
