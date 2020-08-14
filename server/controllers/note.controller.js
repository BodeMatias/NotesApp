const Note = require('../models/note')
const mongo = require('mongodb')
const notesCtrl = {}

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find()
    res.json(notes)
}

notesCtrl.createNotes = async (req, res) => {
    let note = new Note();
    note.name = req.body.name;
    note.note = req.body.note;
    await Note.create(note);
    res.json(note);
}

notesCtrl.editNote = async (req, res) => {
    let id = req.params.id;
    await Note.findOne({_id: id}, (err, note) => {
        note.name = req.body.name;
        note.note = req.body.note;
        note.save();
        res.json(note);
    })
}

notesCtrl.deleteNote = async (req, res) => {
    var id = req.params.id
    await Note.deleteOne({_id: id})
    res.json({success: id})
}

module.exports = notesCtrl