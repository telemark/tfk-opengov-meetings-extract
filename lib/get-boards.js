'use strict'

const config = require('../config')
const ogm = require('opengov-meetings')
const isActiveBoard = item => config.activeBoards.indexOf(item.id) > -1

module.exports = callback => {
  const options = {
    host: config.host,
    path: config.path
  }
  ogm.getBoards(options, (error, boards) => {
    if (error) {
      return callback(error, null)
    } else {
      const activeBoards = boards.filter(isActiveBoard)
      return callback(null, activeBoards)
    }
  })
}
