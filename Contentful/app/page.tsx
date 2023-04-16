import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './page.css';

async function getBlogs() {

    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blogPost`, { cache: 'no-cache' });

    if (!res.ok) {
        throw new Error('Failed to Fetch Data');
    }

    return res.json();
};

const page = async () => {

    const blogs = await getBlogs();

    return (
        <div>
            {blogs.items.map((item: any) => {

                const blogImg = blogs.includes.Asset.find((img: any) => img.sys.id === item.fields.image.sys.id);

                const authorData = blogs.includes.Entry.find((author: any) => author.sys.id === item.fields.authorName.sys.id);

                return (
                    <div key={item.sys.id} className="container">
                        <div className="title">
                            {item.fields.title}
                        </div>

                        <div className="box">{documentToReactComponents(item.fields.articleText)}</div>

                        <div>
                            <img
                                className="image"
                                src={blogImg.fields.file.url}
                                alt="Image"
                            />
                        </div>

                        <div className="author">
                            {authorData.fields.name}
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default page;