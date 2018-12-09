if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: 'mongodb://johno:sugoi101@ds061777.mlab.com:61777/vidjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}