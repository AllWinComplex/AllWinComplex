'use strict';
const angular = require('angular');

/*@ngInject*/
export class StatusService {
	// AngularJS will instantiate a singleton by calling "new" on this function
	constructor(){
		'ngInject';

		this.draft = {
			type: '',
			note: '',
			receipient: [],
		};

	    this.starters = [
			{
				key: 'gooddeeds',
				val: 'Good Deeds',
			},
			{
				key: 'thanks',
				val: 'Thank you',
			},
			{
				key: 'applause',
				val: 'Applause',
			},
			{
				key: 'kudos',
				val: 'Kudos',
			},
			{
				key: 'encouragement',
				val: 'Encouragement',
			},
			{
				key: 'randomActOfKindness',
				val: 'Random Act of Kindness',
			},
			{
				key: 'happiness',
				val: 'Happiness',
			},
			{
				key: 'others',
				val: 'Others',
			}
		];

		this.filters = (function(){
			var arr = [{
				key: 'all',
				val: 'All Status',
				title: 'Status',
				active: true
			}];

			this.starters.forEach(function(val){
				arr.push({
					key: val.key,
					val: val.val,
					title: val.val,
					active: false
				});
			});

			return arr;
		}.bind(this))();

	}

	clearDraft(){
		this.draft = '';
	}

	getStatusCompose(key){
    	return this.filters.filter(function(val){
    		return val.key === key;
    	})[0];
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

