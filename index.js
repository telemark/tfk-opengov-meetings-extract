'use strict'

const getBoards = require('./lib/get-boards')
const getMeetings = require('./lib/get-meetings')
const saveMeeting = require('./lib/save-meeting')

var todo = 0
var done = 0
var allMeetings = []

const next = () => {
  if (allMeetings.length > 0) {
    const meeting = allMeetings.pop()
    saveMeeting(meeting, (error, message) => {
      if (error) {
        console.error(error)
      } else {
        console.log(message)
        next()
      }
    })
  } else {
    console.log('Done')
  }
}

const handleMeetings = (error, meetings) => {
  if (error) {
    console.error(error)
  } else {
    done++
    meetings.forEach(meeting => allMeetings.push(meeting))
    if (todo === done) {
      console.log('tfk-opengod-meetings-extract: meetings collected')
      next()
    }
  }
}

const handleBoards = (error, boards) => {
  if (error) {
    console.error(error)
  } else {
    console.log('tfk-opengod-meetings-extract: boards collected')
    boards.forEach(board => {
      todo++
      getMeetings(board, handleMeetings)
    })
  }
}

getBoards(handleBoards)
