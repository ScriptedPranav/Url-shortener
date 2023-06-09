import {Request, Response} from 'express';
import URL from '../models/url';

async function clicksUrl(req:Request, res:Response) {
    try {
        const {shortUrl} = req.query;
        const urlData = await URL.findOne({urlID:shortUrl});
        if(!urlData) {
            res.status(400).json("Requested short url doesn't exist")
        } else {
            const clicks = urlData.visitors.length;
            res.status(200).json(clicks)
        }
    } catch(err) {
        res.status(500).json(err)
    }
}

export default clicksUrl