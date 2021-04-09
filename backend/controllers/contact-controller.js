import Contact from '../models/contact-model.js';

export const postContact = async (req, res) => {
    const { name, number, email, message } = req.body;

    const newContact = new Contact({ name, number, email, message });

    try {
        await newContact.save();
    } catch (error) {
        console.log(error);
    }
}
