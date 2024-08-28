import express from "express"
import axios from "axios";

const app = express();


app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://picsum.photos/200', { responseType: 'arraybuffer' });
    res.set('Content-Type', 'image/jpeg'); // Adjust content type based on image format
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching random image');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});