import fs from 'fs';
import noExistFile from "../middleware/errorMiddleware.js";


export const findDust = (req, res)  => {
    const jsonFile = fs.readFile('./src/data/finedust.json', 'utf-8',
     (err, data) => {

        try {
            res.status(200).send(data);
        } catch (error) {
            return { noExistFile };
        }
    })};

export const ultraFineDust = (req, res)  => {
    const jsonFile = fs.readFile('./src/data/ultrafinedust.json', 'utf-8',
        (err, data) => {

        try {
            res.status(200).send(data);
        } catch (error) {
            return { noExistFile };
        }
    })};

export const flooding = (req, res)  => {
    const jsonFile = fs.readFile('./src/data/flooding.json', 'utf-8',
        (err, data) => {

        try {
            res.status(200).send(data);
        } catch (error) {
            return { noExistFile };
        }
    })};

export const housingSatisfaction = (req, res)  => {
    const jsonFile = fs.readFile('./src/data/housingsatisfaction.json', 'utf-8',
        (err, data) => {

        try {
            res.status(200).send(data);
        } catch (error) {
            return { noExistFile };
        }
    })};