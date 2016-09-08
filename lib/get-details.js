'use strict'

const config = require('../config')
const ogm = require('opengov-meetings')

module.exports = (meeting, callback) => {
  var result = JSON.parse(JSON.stringify(meeting))
  result.agenda = []

  const next = () => {
    if (meeting.agenda.length > 0) {
      var agenda = meeting.agenda.pop()
      const options = {
        host: config.host,
        path: config.path,
        agendaId: agenda.id
      }
      ogm.getDetails(options, (error, data) => {
        if (error) {
          return callback(error, null)
        } else {
          agenda.documents = data || []
          result.agenda.unshift(agenda)
          next()
        }
      })
    } else {
      return callback(null, result)
    }
  }

  next()
}
