const database = require('./database-connection')

module.exports = {
    listAll() {
        return database('students')
    },
    getById(id) {
        return database('students').where('id', id)
    },
    createStudent(newStudent) {
        return database('students').insert(newStudent).returning('*')
    }
}