import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    name: String,
    number: String,
    password: String,
});

let Admin = mongoose.model('Admin', adminSchema);

export default Admin;