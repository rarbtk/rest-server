const express = require('express')
const servidor = require("./server/server")
const servicio = new servidor()

servicio.listen()