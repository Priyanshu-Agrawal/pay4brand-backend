const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'})



router.use('/auth/register', require('./auth/Register'));
router.use('/auth/login', require('./auth/Login'));
router.use('/home', require('./home'));

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', {title: 'Express'});
});



router.get('/upload-test', (req, res) => {
	console.log("requested")
	res.send('recieved')
})

router.post('/upload-test', upload.single('file'),(req, res) => {
	console.log("request recieved")
  console.log("Uploaded file:", req.file.filename);
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

module.exports = router;
