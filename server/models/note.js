const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
autoIncrement.initialize(mongoose.connection);

const noteSchema = mongoose.Schema({
    name: { type: String, required: true },
    note: { type: String }
})

noteSchema.plugin(autoIncrement.plugin, 'Book')
module.exports = mongoose.model('Note', noteSchema)