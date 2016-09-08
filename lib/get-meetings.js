'use strict'

const config = require('../config')
const ogm = require('opengov-meetings')

module.exports = (board, callback) => {
  const options = {
    host: config.host,
    path: config.path,
    boardId: board.id,
    year: config.year
  }

  ogm.getMeetings(options, (error, data) => {
    if (error) {
      return callback(error, null)
    } else {
      data.meetings.forEach(meeting => {
        meeting.composedId = `${board.id}-${meeting.year}-${meeting.month}-${meeting.day}-${meeting.id}`
        meeting.boardId = board.id
        meeting.boardName = board.name
      })
      return callback(null, data.meetings)
    }
  })
}
