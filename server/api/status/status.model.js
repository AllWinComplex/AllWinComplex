'use strict';

import mongoose from 'mongoose';

var StatusSchema = new mongoose.Schema({
  senderID: String,
  receipientID: String,
  type: String,
  content: String,
  active: Boolean
});

export default mongoose.model('Status', StatusSchema);
