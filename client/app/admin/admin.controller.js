'use strict';

export default class AdminController {
  /*@ngInject*/
  constructor(User, Auth, $window) {
    'ngInject';
    // Use the User $resource to fetch all users
    this.users = User.query();
  	this.getCurrentUser = Auth.getCurrentUserSync;
  	this.$window = $window;
  }
  goBack(){
  	this.$window.history.back();
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}
