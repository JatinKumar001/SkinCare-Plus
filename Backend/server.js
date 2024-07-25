import express from 'express'
import cors from 'cors'
import multer from 'multer';
import { spawn } from 'child_process';
const app = express();

app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' }); // Folder to store uploaded files

export const getImagePrediction = (req, res) => {
    const { file } = req;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    const filePath = file.path;
    const childPython = spawn('python', ['sample.py', filePath]);

    childPython.stdout.on('data', (data) => {
        console.log(`${data}`);
        try {
            res.send(data.toString());
        } catch (err) {
            res.status(500).json(err);
        }
    });

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
};

// Define the route for image prediction
app.post('/api/prediction', upload.single('file'), getImagePrediction);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("Connected to Backend")
})