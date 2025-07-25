require('dotenv').config({ path: __dirname + '/.env' }); const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));