import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// 文章表

const UserSchema = new Schema({ 
    username:       {type: String, required: true},
    email:          {type: String, required: true, unique: true},
    password:       {type: String, required: true},
    createdtime:    {type: Date,   default: Date.now()},
    avatar:         {type: String, default: 'img/avatar.jpg'}
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
