import fs from 'fs';

const fineDust = (req, res)  => {
    const jsonFile = fs.readFileSync('./src/data/finedust.json', 'utf-8')
    res.status(200).send(jsonFile);   
};

const ultraFineDust = (req, res)  => {
    const jsonFile = fs.readFileSync('./src/data/ultrafinedust.json', 'utf-8')
    res.status(200).send(jsonFile);
};  

const flooding = (req, res)  => {
    const jsonFile = fs.readFileSync('./src/data/flooding.json', 'utf-8')
    res.status(200).send(jsonFile);
};   

const housingSatisaction = (req, res)  => {
    const jsonFile = fs.readFileSync('./src/data/housingsatisfaction.json', 'utf-8')
    res.status(200).send(jsonFile);
};   

export { fineDust, ultraFineDust, flooding, housingSatisaction }