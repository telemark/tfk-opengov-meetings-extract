'use strict'

const envs = process.env

module.exports = {
  host: envs.OPENGOV_HOST || 'http://opengov.cloudapp.net',
  path: envs.OPENGOV_PATH || '/Meetings/tfk',
  year: envs.OPENGOV_YEAR || new Date().getFullYear(),
  fileDirectory: envs.OPENGOV_FILE_DIRECTORY || 'meetings',
  activeBoards: envs.OPENGOV_ACTIVE_BOARDS.split(',') || [
    '216162'
  ]
}
