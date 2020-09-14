#! /usr/bin/env node

const { information } = require('./information')
const { render } = require('./render')

information.map(info => render[Object.keys(info)[0]](Object.values(info)[0]))