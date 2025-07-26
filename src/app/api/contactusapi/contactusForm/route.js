
import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";


// get api

export async function GET(req) {
    const dbcollection = await MongoDBConnection("Phone_Email_Loacation_Data")
    const data = await dbcollection.find({}).toArray();
    return Response.json(data);

}





// post api

export async function POST(req) {
    const postedData = await req.json();
    const dbcollection = await MongoDBConnection("Phone_Email_Loacation_Data");
    const result = await dbcollection.insertOne(postedData);
    return Response.json(result);
}

