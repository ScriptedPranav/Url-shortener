import { Request, Response } from "express";
import URL from "../models/url";

async function redirectUrl(req: Request, res: Response) {
  try {
    const { shortId } = req.params;
    const ip = req.ip

    const urlData = await URL.findOne({ urlID: shortId});;
    if(!urlData) {
        res.status(400).json('Requested Url doesnt exist yet');
    } else {
        const redirectUrl = urlData.redirectUrl;
        urlData.visitors.push({timestamp: Date.now(),ip})
        await urlData.save();
        res.status(200).redirect(redirectUrl)
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export default redirectUrl;
