import React from 'react';
import Image from 'next/image'; 
import newletterStyles from '@/app/styles/newsletter.module.css'; 

const NewsletterSection = ({ heading, description }) => {
  return (
    <section className={newletterStyles['newsletter-section']}>
      <div className='container'>
        <div className={newletterStyles['newsletter']}>
          <div className='d-flex justify-content-between align-items-center flex-wrap gap-4 gap-lg-0'>
            <div className={newletterStyles['left-part']}>
              <h6>{heading}</h6>
              <p>{description}</p>
            </div>
            <div className={newletterStyles['right-part']}>
              <div className='d-flex flex-column align-items-lg-end justify-content-lg-end gap-3'>
                <div className='d-flex gap-2 align-items-center'>
                  <Image src='/images/newsletter/users.svg' alt='users' height={32} width={80} />
                  <p>900K+ Download Application</p>
                </div>

                <div className='d-flex gap-2 align-items-center'>
                  <Image src='/images/newsletter/app-store.png' alt='app store' height={40} width={140} />
                  <Image src='/images/newsletter/google-play.png' alt='google play' height={40} width={140} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
