import {Schema, model} from 'mongoose';

interface Visitor {
    timestamp: Number,
    ip: string
}
interface Url {
    urlID: string,
    redirectUrl : string,
    visitors: Array<Visitor>
}

const urlSchema = new Schema<Url>({
    urlID : {
        type: String,
        required: true
    },
    redirectUrl: {
        type: String,
        required:true
    },
    visitors : [
        {
            timestamp: {
                type: Number,
                required:false
            },
            ip: {
                type: String,
                required: false
            }
        }
    ]
},{timestamps: true})

const URL = model<Url>('url',urlSchema)
export default URL