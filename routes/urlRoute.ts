import express,{ Router } from "express";
import postUrl from "../controllers/postUrl";
import redirectUrl from "../controllers/redirectUrl";
import clicksUrl from "../controllers/clicksUrl";

const router:Router = express.Router();

//POST URL TO DATABASE AND GENERATE A SHORT ID
router.post('/url',postUrl)

//REDIRECT SHORT URL TO ORIGINAL URL
router.get('/:shortId',redirectUrl)

//RETURNS THE NUMBER OF CLICKS TO THE SHORTENED URL
router.get('/analytics/clicks',clicksUrl)


export default router
