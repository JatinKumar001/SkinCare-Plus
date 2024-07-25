import { spawn } from 'child_process'

let image1;

export const updateimage = (req, res) => {

    const { image } = req.body;

    image1 = image;

    res.json({ message: "Image updated successfullu" });
}

export const getimageprediction = (req, res) => {

    const childPython = spawn('python', ['sample.py', image1]);

    let dataString = '';

    childPython.stdout.on('data', (data) => {
        dataString += data.toString();
        console.log(dataString);
    });

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) {
            res.send(dataString);
        } else {
            res.status(500).json({ message: "Error processing image" });
        }
    });

    childPython.on('error', (err) => {
        console.error('Failed to start subprocess.', err);
        res.status(500).json({ message: "Failed to start subprocess", error: err });
    });
}