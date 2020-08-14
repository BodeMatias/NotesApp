const express = require('express')
const router = express.Router()
const note = require('../controllers/note.controller')

router.get('/', note.getNotes)
router.post('/', note.createNotes)
router.put('/:id', note.editNote)
router.delete('/:id', note.deleteNote)

module.exports = router