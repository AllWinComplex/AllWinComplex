/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

import Status from '../api/status/status.model';


Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, '
            + 'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, '
            + 'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, '
            + 'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep '
            + 'tests alongside code. Automatic injection of scripts and '
            + 'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more '
            + 'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript '
            + 'payload, minifies your scripts/css/images, and rewrites asset '
            + 'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku '
            + 'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      username: 'test',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      username: 'admin',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then((data) => {
      console.log('finished populating users', data);
      

      User.create({
        npc: true,
        provider: 'local',
        username: 'world',
        role: 'user',
        name: 'The World',
        email: 'world@example.com',
        password: 'world'
      }).then((data2) => {

        Status.find({}).remove()
          
          .then(() => {

            Status.create({
              sender: data._id,
              receipient: data2._id,
              type: 'thanks',
              note: 'Thank you!!! woop woop yayyy',
              active: true
            },
            {
              sender: data._id,
              receipient: data2._id,
              type: 'kudos',
              note: 'Kudos to you!! :D Thank you!!! woop woop yayyy',
              active: true
            }
            );

          });


      })

      


    });
  });
