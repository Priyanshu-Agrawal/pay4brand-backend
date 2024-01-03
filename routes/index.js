const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

router.use('/auth', require('./auth'));
router.use('/home', require('./home'));
router.use('/business', require('./seller'));
router.use('/products', require('./products'));
router.use('/user', require('./user'));

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', {title: 'Express'});
});

router.post('/upload-test', upload.single('file'),(req, res) => {
	console.log("request received")
  console.log("Uploaded file:", req.file.filename);
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

module.exports = router;
