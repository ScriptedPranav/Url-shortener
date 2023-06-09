import { Request, Response } from "express";
import URL from "../models/url";
import { nanoid } from "nanoid";

async function postUrl(req: Request, res: Response) {
  try {
    const url = req.body.url;
    if (!url) {
      res.status(404).json("URL not found");
    } else {
      const exists = await URL.findOne({ redirectUrl: url });
      if (!exists) {
        const shortUrl = nanoid(8);

        const urlData = new URL({
          urlID: shortUrl,
          redirectUrl: url,
        });

        const result = await urlData.save();
        res.status(200).json(result);
      } else {
        res.status(203).json(exists)
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export default postUrl;
