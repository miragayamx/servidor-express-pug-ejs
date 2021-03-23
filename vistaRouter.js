const express = require('express');
const productos = require('./productos');

const router = express.Router();

router.get('/vista', (req, res) => {
    const lista = productos.getList();
	if (!lista.length) return res.render("productos-vista", {lista: lista, existe: false});
	res.render("productos-vista", {lista: lista, existe: true})
});

router.get('/registrar', (req, res) => {
	res.render("ingreso-producto");
});

module.exports = router;