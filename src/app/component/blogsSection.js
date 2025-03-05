import React from 'react'
import BlogsStyle from '@/app/styles/blogs.module.css'
import Image from 'next/image'
const blogData = [
    {
        imgSrc: '/images/blog/blog1.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog2.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    },
    {
        imgSrc: '/images/blog/blog3.png',
        title: 'Turning Data Into Action – Why an Online Community is the Ultimate Insights Solution',
        description: 'We outline some of the benefits of tapping into an online community to gather and harness consumer insights that take your brand to the next level.',
    }
]

export default function BlogsSection({ mainHeading = 'Learn more about Brand Communities', blogs = blogData }) {
    return (
        <div className={`${BlogsStyle['blogs-section']} common-spacing`}>
            <div className='container'>
                <h3 className='main-heading text-center'>{mainHeading}</h3>
                {/* blog part */}
                <div className="row gy-4">
                    {blogs.map((blog, index) => (
                        <div className="col-lg-4">
                            <div>
                                <Image src={blog.imgSrc} className={`${BlogsStyle['blog-img']}`} width={378} height={240} alt='img' />

                                <h4>{blog.title}</h4>
                                <p>{blog.description}</p>
                                <hr />
                                <div className='d-flex align-items-center justify-content-between'><button>Read More</button><button className={`${BlogsStyle['arrow-btn']}`}><Image src='/images/blog/arrow-up-right.svg' width={24} height={24} alt='img' /></button></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
