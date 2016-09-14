'use strict'

const envs = process.env

module.exports = {
  host: envs.OPENGOV_HOST || 'http://opengov.cloudapp.net',
  path: envs.OPENGOV_PATH || '/Meetings/tfk',
  year: envs.OPENGOV_YEAR || new Date().getFullYear(),
  fileDirectory: envs.OPENGOV_FILE_DIRECTORY || 'meetings',
  activeBoards: envs.OPENGOV_ACTIVE_BOARDS ? envs.OPENGOV_ACTIVE_BOARDS.split(',') : [
    '216162', '216167', '217261', '217335', '217336', '217337', '217338', '217339', '217340', '217341', '217342', '217344', '217345', '218688', '220291', '222101', '225118'
  ]
}
