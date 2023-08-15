const express = require('express');
const app = express();
const port = 3000;

app.get('/calculate', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operation = req.query.operation;

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return res.status(400).json({ error: 'Division by zero is not allowed' });
            }
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation provided' });
    }

    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
