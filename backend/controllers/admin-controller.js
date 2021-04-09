import bcrypt from 'bcryptjs';

import Admin from '../models/admin-model.js';

export const getAdmin = async (req, res) => {
    res.render('admin');
}

export const postAdmin = async (req, res) => {
    const { name, number, password } = req.body;

    Admin.findOne({ number })
        .then(admin => {
            if(!admin) {
                return res.render('admin');
            }
            bcrypt.compare(password, admin.password)
                .then(doMatch => {
                    if(doMatch) {
                        req.session.isLoggedIn = true;
                        req.session.admin = admin;
                        return req.session.save(err => {
                            console.log(err);
                            res.redirect('/');
                        });
                    }
                })
        })
}
