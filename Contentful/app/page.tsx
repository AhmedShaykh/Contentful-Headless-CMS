import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import './page.css';

async function getBlogs() {

    const res = await fetch(`https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type?`, { cache: 'no-cache' });

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

                // const blogImg = blogs.includes.Asset.filter((img: any) => img.sys.id === item.fields.image.sys.id);
                // console.log(blogImg);

                return (
                    <div key={item.sys.id} className="container">
                        <div className="title">
                            {item.fields.title}
                        </div>
                        <div className="box">{documentToReactComponents(item.fields.articleText)}</div>
                        <div className="author">{item.fields.name}</div>
                        <div>
                            <img
                                className='image'
                                src={blogs.includes.Asset[1].fields.file.url}
                                alt="Image"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    )
};

export default page;