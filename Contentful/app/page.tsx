import React from 'react';
import style from './page.module.css';

async function getBlogs() {

    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`);

    if (!res.ok) {
        throw new Error('Failed to Fetch Data');
    }

    return res.json();
};

const page = async () => {

    const blogs = await getBlogs();

    return (
        <ul>
            {blogs.items.map((item: any) => (
                <li>{item.fields.name}</li>
            ))}
        </ul>
    )
};

export default page;