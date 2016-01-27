/**
 *
 * Created by cfrei on 27.01.16.
 */
'use strict';

const exec = require('child_process').exec;
var express = require('express')
var app = express()

Object.keys(process.env).filter(key => key.match(/^SHSERVER_/)).forEach(key => {
	console.log(`Installing ${ key }`)
	app.get(`/${ key.substr(9) }`, function (req, res) {
		exec(process.env[key], (error, stdout, stderr) => {
			res.send({ error, stdout, stderr });
		});
	})
})

app.listen(3000)
