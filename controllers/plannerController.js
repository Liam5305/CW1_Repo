const { response } = require('express');
const nedb = require('nedb');

const plannerDAO = require('../models/plannerModel');

const db = new plannerDAO();

exports.landing_page = function(req, res) {
    res.send("Welcome to my application");
    db.init();
}

exports.entries_list = function(req, res) {
    db.getExistingEntries().then((list)=>{
        res.render('entries', {
            'title':'Agenda',
            'entries': list
        });
        console.log('Promise Resolved');
    }).catch((err)=> {
        console.log('Promise Rejected', err)
    })
};

exports.new_entry = function(req, res) {
    res.render('newEntry', {
        'title': 'Training Logs'
    });
}

exports.update_entry = function(req, res) {
    res.render('update_entries', {
        'title': 'Updated Logs'
    });
}

exports.delete_entry = function(req, res) {
    res.render('update_entries', {
        'title': 'Updated Logs'
    })
    console.log(req,body.Type, req.body.Exercise, req.body.Period);
    db.editEntry(req.body.Type, req.body.Exercise, req.body.Period);
    res.redirect('/agenda');
}

exports.delete_entries = function(req, res) {
    db.DeleteEntry();
    res.redirect('/agenda');
}

/**exports.delete_entry = function(req, res) {
    db.editEntry().then((list)=>{
        res.render('update_entries', {
            'title':'Updated Agenda',
            'update_entries': list
        });
        console.log('Promise was Resolved');
    }).catch((err)=> {
        console.log('Promise was Rejected', err)
    })
}*/

/**exports.update_entry = function(req, res) {

    res.render('newEntry', {
        'title': 'Update Logs'
    })
    console.log(req,body.Type, req.body.Exercise, req.body.Period);
    db.editEntry(req.body.Type, req.body.Exercise, req.body.Period);
    res.redirect('/agenda');
}*/

exports.post_new_entry = function(req, res) {

    console.log("Post new entry", req.body.Type, req.body.Exercise, req.body.Period);
    db.addEntry(req.body.Type, req.body.Exercise, req.body.Period);
    res.redirect('/agenda');
}

exports.about_page = function(req, res) {
    res.send('Not implemented yet');
}

exports.sign_in_page = function(req, res) {
    res.redirect('sign_in.html');
}

exports.login_page = function(req, res) {
    res.redirect('login.html');
}