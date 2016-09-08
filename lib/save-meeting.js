'use strict'

const config = require('../config')
const fs = require('fs')
const getAgenda = require('./get-full-agenda')
const getDetails = require('./get-details')

module.exports = (meeting, callback) => {
  const filename = `${config.fileDirectory}/${meeting.composedId}.json`
  console.log('save-meeting: starting')

  const handleDetails = (error, data) => {
    if (error) {
      return callback(error, null)
    } else {
      console.log('save-meeting: got details')
      fs.writeFile(filename, JSON.stringify(data, null, 2), err => {
        if (err) {
          return callback(err, null)
        } else {
          return callback(null, {ok: true, filename: filename})
        }
      })
    }
  }

  const handleAgenda = (error, data) => {
    if (error) {
      return callback(error, null)
    } else {
      console.log('save-meeting: got agenda')
      getDetails(data, handleDetails)
    }
  }

  getAgenda(meeting, handleAgenda)
}
