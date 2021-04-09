import Contact from '../models/contact-model.js';

export const getContact = async (req, res) => {
    try {
        const allContacts = await Contact.find();
        return res.render('all-contacts', {
            contacts: allContacts
        });
    } catch (error) {
        console.log(error);
    }
}

export const postContact = async (req, res) => {
    const { name, number, email, message } = req.body;

    const newContact = new Contact({ name, number, email, message });

    try {
        await newContact.save();
    } catch (error) {
        console.log(error);
    }
};

export const deleteContact = async (req, res) => {
    const { _id } = req.params;

    await Contact.deleteOne({ _id });
    res.redirect('/contact');
};
