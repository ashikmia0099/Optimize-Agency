





import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";

// get all user

const UserInfo = "User_all_info"

export async function GET(req) {

    const dbcollection = await MongoDBConnection(UserInfo);
    const data = await dbcollection.find().toArray()

     
    return Response.json(data)

}


// post user SignIndata . akhane user jokon signup korbe tokon oi data golo store kora hobe


export async function POST(req) {
    const postedData = await req.json();
    const dbcollection = await MongoDBConnection(UserInfo);
    const result = await dbcollection.insertOne(postedData);

    return Response.json(result);
}



