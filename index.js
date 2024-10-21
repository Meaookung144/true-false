const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/data', async (req, res) => {
    const { lic, name } = req.body;

    try {
        const response = await axios.get(`http://api.meaookung144.xyz/dummy/status?lic=${lic}&name=${name}`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from external API');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});