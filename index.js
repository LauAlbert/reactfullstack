const express = require('express');
require('./services/passport');
const authoRoutes = require('./routes/authRoutes');

const app = express();

authoRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);