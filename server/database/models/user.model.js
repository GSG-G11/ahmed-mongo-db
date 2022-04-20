const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: { type: 'string', required: true },
  lastName: 'string',
  age: 'number',
  city: 'string',
});

const User = model('User', userSchema);

userSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author',
});

module.exports = User;
