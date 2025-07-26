

import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";


// post api
export async function GET(req){
    const dbcollection = await MongoDBConnection('Sec_3_Card_Post_Form_Data');
    const data = await dbcollection.find({}).toArray();
    return Response.json(data);
}



export async function POST(req){
    const postedData = await req.json();
    const dbcollection = await MongoDBConnection('Sec_3_Card_Post_Form_Data');
    const result = await dbcollection.insertOne(postedData);

    return Response.json(result)

}