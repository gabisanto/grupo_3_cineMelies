const express = require ('express');
const controlMain = require ('../controllers/controlMain');
const router = express.Router();

router.get('/',controlMain.home)
router.get('/agenda',controlMain.agenda)
router.get('/nosotros',controlMain.about)
router.get('/precios',controlMain.precios)
router.get('/combos',controlMain.combos)


module.exports = router;
