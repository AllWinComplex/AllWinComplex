'use strict';

import mongoose, {Schema} from 'mongoose';

var mongoosePaginate = require('mongoose-paginate');


var StatusSchema = new mongoose.Schema({
  sender: 	{ type: Schema.Types.ObjectId, ref: 'User' },
  receipient: { type: Schema.Types.ObjectId, ref: 'User' },
  type: String,
  note: String,
  active: {
  	type: Boolean,
  	default: true
  }
},{
    timestamps: true
});

StatusSchema.plugin(mongoosePaginate);

export default mongoose.model('Status', StatusSchema);
