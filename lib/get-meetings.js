'use strict'

const config = require('../config')
const ogm = require('opengov-meetings')

module.exports = (boardId, callback) => {
  const options = {
    host: config.host,
    path: config.path,
    boardId: boardId,
    year: config.year
  }

  ogm.getMeetings(options, (error, meetings) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, meetings)
    }
  })
}
