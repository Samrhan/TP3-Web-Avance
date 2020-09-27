const express = require('express')
const router = express.Router()

router.post('/login', function(req, res, next) {
  res.status(500)
  res.send({ message: 'Not implemented' })
})

router.post('/logout', function(req, res, next) {
  res.status(500)
  res.send({ message: 'Not implemented' })
})

router.post('/register', function(req, res, next) {
  res.status(500)
  res.send({ message: 'Not implemented' })
})

module.exports = router
