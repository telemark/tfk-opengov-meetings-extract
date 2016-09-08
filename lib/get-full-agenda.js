'use strict'

const config = require('../config')
const ogm = require('opengov-meetings')

module.exports = (meeting, callback) => {
  var result = JSON.parse(JSON.stringify(meeting))

  if (!meeting.id) {
    result.agenda = []
    result.documents = []
    return callback(null, result)
  } else {
    const options = {
      host: config.host,
      path: config.path,
      meetingId: meeting.id
    }
    ogm.getAgenda(options, (error, data) => {
      if (error) {
        return callback(error, null)
      } else {
        result.place = data.details.place
        result.documents = data.documents || []
        result.agenda = data.agenda || []
        return callback(null, result)
      }
    })
  }
}
