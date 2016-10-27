'use strict';
const angular = require('angular');



/*@ngInject*/
export class StatusService {
	// AngularJS will instantiate a singleton by calling "new" on this function
	constructor($sessionStorage, $http){
		'ngInject';
		this.$http = $http;

		$sessionStorage.awcDraft = $sessionStorage.awcDraft || {
			type: '',
			note: '',
			receipient: '',
			sender: ''
		};

		this.draft = $sessionStorage.awcDraft;


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

	updateDraft({ type, note, receipient, sender }){
		this.draft.type = type || this.draft.type;
		this.draft.note = note || this.draft.note;
		this.draft.receipient = receipient || this.draft.receipient;
		this.draft.sender = sender || this.draft.sender;
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
    createStatus(){
    	return this.$http({
    		method: 'POST',
    		url: '/api/status',
    		data: this.draft
    	});
    }
    deleteStatus(id){
    	return this.$http({
    		method: 'DELETE',
    		url: '/api/status/' + id,
    	});
    }
    getWorld(){
    	return this.$http({
    		method: 'GET',
    		url: '/api/status/world',
    	});
    }
	viewStatus(id){
    	return this.$http({
    		method: 'GET',
    		url: '/api/status/' + id,
    	});
    }
    viewMyOutBoundStatus(offset, filterType){
    	return this.$http({
    		method: 'GET',
    		url: '/api/status/me/outBound/skip/' + ((!isNaN(offset)) ? offset : 0) + '/filter/' + (filterType || 'all'),
    	});
    }
    viewMyInBoundStatus(offset, filterType){
		return this.$http({
			method: 'GET',
			url: '/api/status/me/inBound/skip/' + ((!isNaN(offset)) ? offset : 0) + '/filter/' + (filterType || 'all'),
		});
    }

}

export default angular.module('awcApp.status', [])
  .service('status', StatusService)
  .name;

