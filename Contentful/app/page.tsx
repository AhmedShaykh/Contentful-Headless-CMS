import React from 'react';
import './page.css';

async function getBlogs() {

    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blogPost`);

    if (!res.ok) {
        throw new Error('Failed to Fetch Data');
    }

    return res.json();
};

const page = async () => {

    const blogs = await getBlogs();

    return (
        <div className="container">
            <ul>
                {blogs.items.map((item: any) => (
                    <li key={item.sys.id}>
                        {item.fields.title}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default page;