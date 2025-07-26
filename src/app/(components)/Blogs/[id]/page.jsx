

import { ObjectId } from "mongodb";
import { FaRegUserCircle } from "react-icons/fa";
import React from "react";
import MongoDBConnection from "../../../../../mongodbDatabase/mongodb";

export default async function SinglePost({ params }) {
    const { id } = params;
    let blog = null;

    try {
        const collection1 = await MongoDBConnection("Sec_1_Big_Banner_Post_Form");
        blog = await collection1.findOne({ _id: new ObjectId(id) });

        if (!blog) {
            const collection2 = await MongoDBConnection("Sec_1_2_half_Banner_Post_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }


        if (!blog) {
            const collection2 = await MongoDBConnection("Sec_2_half_Banner_Post_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }


        if (!blog) {
            const collection2 = await MongoDBConnection("Sec_3_Card_Post_Form_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }
        if (!blog) {
            const collection2 = await MongoDBConnection("Sec_4_Card_Auto_Post_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }

        if (!blog) {
            const collection2 = await MongoDBConnection("Sec_5_Single__half_Banner_Post_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }
        if (!blog) {
            const collection2 = await MongoDBConnection("Sec_6_Signgle_Half_Banner_Post_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }
        if (!blog) {
            const collection2 = await MongoDBConnection("Right_Sec_1_List_Post_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }
        if (!blog) {
            const collection2 = await MongoDBConnection("Right_Sec_1_Second_List_Post_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }
        if (!blog) {
            const collection2 = await MongoDBConnection("Right_Sec_2_List_Post_Data");
            blog = await collection2.findOne({ _id: new ObjectId(id) });
        }


    } catch (err) {
        return <div className="text-red-500 text-center py-20">Error fetching blog: {err.message}</div>;
    }

    if (!blog) {
        return <div className="text-red-500 text-center py-20">Blog not found</div>;
    }

    return (
        <div className='bg-[#191919]'>
            <div className='max-w-[1596px] mx-auto pt-16'>
                {/* User and title section */}
                <div className='gap-10 grid md:grid-cols-2 border-b pb-10 px-5 xl:px-0'>
                    {/* Image section */}
                    <div>
                        <img src={blog.BlogImage} alt="" className='w-full h-40 md:h-64 lg:h-80 xl:h-[450px]' />
                    </div>

                    {/* Text section */}
                    <div className='pr-5'>
                        <h1 className='text-xl lg:text-2xl xl:text-4xl leading-7 lg:leading-10 xl:leading-14 font-semibold uppercase text-white'>
                            {blog.BlogTitle}
                        </h1>
                        <div className='flex items-center gap-6 mt-10 md:mt-5 lg:mt-10'>
                            <div>
                                <FaRegUserCircle className='text-5xl text-white' />
                            </div>
                            <div>
                                <div className='lg:flex gap-7 py-2 text-white'>
                                    <h1 className='text-[16px] lg:text-lg xl:text-2xl font-semibold'>
                                        {blog.AuthorName}<span className='pl-3'> |</span>
                                    </h1>
                                    <h1 className='text-[16px] lg:text-lg xl:text-2xl font-semibold -pl-1 text-white'>{blog.PassionName}</h1>
                                </div>
                                <div className='flex gap-5 font-semibold text-[12px] xl:text-[16px] text-white'>
                                    <h4>{blog.createdOn}</h4>
                                </div>
                            </div>
                        </div>

                        {/* Rating */}
                        <div className='py-4 flex gap-6 items-center text-sm'>
                            <div className="rating text-white">
                                <div className="mask mask-star text-3xl" aria-label="1 star"></div>
                                <div className="mask mask-star text-3xl" aria-label="2 star"></div>
                                <div className="mask mask-star text-3xl" aria-label="3 star" aria-current="true"></div>
                                <div className="mask mask-star text-3xl" aria-label="4 star"></div>
                                <div className="mask mask-star text-3xl" aria-label="5 star"></div>
                            </div>
                            <div className='text-sm lg:text-[16px] xl:text-xl font-semibold text-white'>
                                Rating 4.5/5
                            </div>
                        </div>
                    </div>
                </div>

                {/* Paragraph section */}

                <div className='w-[90%] py-16 mx-auto pb-20'>
                    <h3 className='text-xl md:text-2xl xl:text-3xl font-semibold py-6 text-white'>{blog.DescriptionTitle}</h3>
                    <p className='text-sm lg:text-[16px] xl:text-xl text-white'>{blog.Description}</p>
                    <div>
                        <img src={blog.DescriptionImage} alt="" className='h-40 md:h-64 lg:h-[450px] w-full md:w-[80%] lg:w-[70%] my-10 mb-14 mx-auto' />
                    </div>
                </div>
                {/* dynamic blog data */}

                {
                    blog.dynamicDescriptions && blog.dynamicDescriptions.length > 0 && (
                        <div className=''>
                            {
                                blog.dynamicDescriptions.map((section, index) => (
                                    <div key={index} className='w-[90%] py-16 mx-auto pb-20'>
                                        <h3 className='text-xl md:text-2xl xl:text-3xl font-semibold py-6 text-white'>{section.title}</h3>
                                        <p className='text-sm lg:text-[16px] xl:text-xl text-white'>{section.text}</p>
                                        <div>
                                            <img src={section.image} alt="" className='h-40 md:h-64 lg:h-[450px] w-full md:w-[80%] lg:w-[70%] my-10 mb-14 mx-auto' />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}

