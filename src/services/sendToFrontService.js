import fs from 'fs';

const fineDust = (req, res)  => {
    const jsonFile1 = fs.readFileSync('./src/data/finedust.json', 'utf-8')
    res.status(200).send(jsonFile1);   
};

const ultraFineDust = (req, res)  => {
    const jsonFile2 = fs.readFileSync('./src/data/ultrafinedust.json', 'utf-8')
    res.status(200).send(jsonFile2);
};  

const flooding = (req, res)  => {
    const jsonFile3 = fs.readFileSync('./src/data/flooding.json', 'utf-8')
    res.status(200).send(jsonFile3);
};   

const housingSatisfaction = (req, res)  => {
    const jsonFile4 = fs.readFileSync('./src/data/housingsatisfaction.json', 'utf-8')
    res.status(200).send(jsonFile4);
};   

export { fineDust, ultraFineDust, flooding, housingSatisfaction }