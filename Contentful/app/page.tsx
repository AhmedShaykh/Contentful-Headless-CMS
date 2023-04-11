import React from 'react';

async function getBlogs() {

    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/content_types?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`);

    if (!res.ok) {
        throw new Error('Failed to Fetch Data');
    }   

    return res.json();
};

const page = async () => {

    const blogs = await getBlogs();
    console.log(blogs);

    return (
        <ul>
            {/* {blogs.items.map((item: any) => (
                <li>{item.fields.name}</li>
            ))} */}
        </ul>
    )
};

export default page;