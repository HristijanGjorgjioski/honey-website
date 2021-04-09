import mongoose from 'mongoose';

const contactSchema = mongoose.Schema({
    name: String,
    number: String,
    email: String,
    message: String,
});

let Contact = mongoose.model('Contact', contactSchema);

export default Contact;
