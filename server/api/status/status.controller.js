/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/statuses              ->  index
 * POST    /api/statuses              ->  create
 * GET     /api/statuses/:id          ->  show
 * PUT     /api/statuses/:id          ->  upsert
 * PATCH   /api/statuses/:id          ->  patch
 * DELETE  /api/statuses/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Status from './status.model';
import User from '../user/user.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

export function getWorld(req, res){
  return User.find({
    username: 'world',
  }, '-salt -password').exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

export function inBound(req, res) {
  var q = {
    receipient: req.user._id
  };

  if (typeof req.params.fType !== 'undefined' && req.params.fType !== 'all'){
    q.type = req.params.fType;
  }

  return Status.find(q).sort('-createdAt')
      .skip(parseInt(req.params.offset || '0'))
      .limit(50)
      .populate('sender', '-salt -password')
      .populate('receipient', '-salt -password')
      .exec()
      .then(respondWithResult(res))
      .catch(handleError(res));
}

export function outBound(req, res) {
  var q = {
    sender: req.user._id
  };

  if (typeof req.params.fType !== 'undefined' && req.params.fType !== 'all'){
    q.type = req.params.fType;
  }

  return Status.find(q).sort('-createdAt')
    .skip(parseInt(req.params.offset || '0'))
    .limit(50)
    .populate('sender', '-salt -password')
    .populate('receipient', '-salt -password')
    .exec()
    .then(respondWithResult(res))
    .catch(handleError(res));

  // return Status.find({
  //   sender: req.user._id
  // }).sort('-createdAt')
  //   .populate('receipient', '-salt -password')
  //   .limit(50)
  //   .exec()
  //   .then(respondWithResult(res))
  //   .catch(handleError(res));


}


// Gets a list of Statuss
export function index(req, res) {
  return Status.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Status from the DB
export function show(req, res) {
  return Status.findById(req.params.id)
    .populate('sender', '-salt -password')
    .populate('receipient', '-salt -password')
    .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Status in the DB
export function create(req, res) {
  return Status.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Status in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Status.findOneAndUpdate({_id: req.params.id}, req.body, {upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Status in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Status.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Status from the DB
export function destroy(req, res) {
  return Status.find({
    _id: req.params.id,
    sender: req.user._id
  }).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
