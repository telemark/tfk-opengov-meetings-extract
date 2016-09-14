'use strict'

const getBoards = require('./lib/get-boards')

getBoards((error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
