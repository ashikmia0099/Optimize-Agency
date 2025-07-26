import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";





// post api
export async function GET(req){
    const dbcollection = await MongoDBConnection('Right_Sec_2_Image_Second_Post_Data');
    const data = await dbcollection.find({}).toArray();
    return Response.json(data);
}



export async function POST(req){
    const postedData = await req.json();
    const dbcollection = await MongoDBConnection('Right_Sec_2_Image_Second_Post_Data');
    const result = await dbcollection.insertOne(postedData);

    return Response.json(result)

}