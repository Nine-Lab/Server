import fs from 'fs';
import noExistFile from "../middleware/errorMiddleware.js";


const findDust = (req, res)  => {
    const jsonFile = fs.readFile('./src/data/finedust.json', 'utf-8',
     (err, data) => {

        try {
            res.status(200).send(data);
        } catch (error) {
            return { noExistFile };
        }
    })};

const ultraFineDust = (req, res)  => {
    const jsonFile = fs.readFile('./src/data/ultrafinedust.json', 'utf-8',
        (err, data) => {

        try {
            res.status(200).send(data);
        } catch (error) {
            return { noExistFile };
        }
    })};

const flooding = (req, res)  => {
    const jsonFile = fs.readFile('./src/data/flooding.json', 'utf-8',
        (err, data) => {

        try {
            res.status(200).send(data);
        } catch (error) {
            return { noExistFile };
        }
    })};

const housingSatisaction = (req, res)  => {
    const jsonFile = fs.readFile('./src/data/housingsatisfaction.json', 'utf-8',
        (err, data) => {

        try {
            res.status(200).send(data);
        } catch (error) {
            return { noExistFile };
        }
    })};
export { findDust, ultraFineDust, flooding, housingSatisaction }