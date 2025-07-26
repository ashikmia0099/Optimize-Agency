import { ObjectId } from "mongodb";
import MongoDBConnection from "../../../../../../mongodbDatabase/mongodb";


export async function GET(req, { params }) {
    const { id } = params;  // Fetch id from params

    // Connect to the MongoDB collection
    const dbcollection = await MongoDBConnection("Sec_1_Big_Banner_Post_Form");

    // Find the document with the matching id (assuming '_id' is the MongoDB default primary key)
    const data = await dbcollection.findOne({ _id: new ObjectId(id) });

    if (!data) {
        return new Response(JSON.stringify({ message: "Data not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
}
