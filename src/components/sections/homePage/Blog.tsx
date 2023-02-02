import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from '../../UI/widget/button/Button';
import { motion } from 'framer-motion';

const Blog = () => {
  const [blogs, setBlogs] = useState<any>([]);

  const arrowMotion = {
    rest: {
      transition: {
        duration: 2,
        type: 'tween',
        ease: 'easeIn',
      },
    },
    hover: {
      width: '18px',
      height: '18px',
      transition: {
        duration: 0.4,
        type: 'tween',
        ease: 'easeInOut',
      },
    },
  };

  useEffect(() => {
    const fetchBlog = async () => {
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@intrapair'
      );
      const data = await response.json();
      setBlogs(data);
    };
    fetchBlog();
  }, []);
  return (
    <div className="container px-4 xl:px-[114px] m-auto">
      <div className=" flex flex-col gap-y-[70px] m-auto ">
        <div className="flex flex-col gap-3 w-[fit-content]">
          <motion.div
            className="pb-3 xl:pb-5 pr-12 border-b-[0.5px]  w-[fit-content] md:max-w-[270px] border-solid border-dark-blue "
            whileInView={{
              borderBottom: '2px solid #185EA1',
              paddingRight: 0,
            }}
            whileHover={{
              borderBottom: '2px solid #185EA1',
              paddingRight: '3rem',
            }}
            transition={{
              duration: 0.65,
              type: 'tween',
              ease: 'easeInOut',
            }}
          >
            <h3 className="font-bold text-dark-blue text-3xl xl:text-5xl ">
              Our Blog
            </h3>
          </motion.div>
          <p className="text-black-01 max-w-[400px] text-base">
            Check out our unique stories from digital experience to enterprise
            solutions.
          </p>
        </div>
        <div className="flex">
          <div className="mx-auto">
            {
              // Check if blog is sucessfully fetched from medium json
              blogs.status === 'ok' ? (
                <div className="xl:flex-nowrap flex-wrap flex  gap-[36px] justify-between w-full">
                  {blogs.items.slice(0, 3).map((item: any, id: any) => {
                    return (
                      <motion.div
                        key={id}
                        className="flex flex-col gap-1 max-w-[350px] sm:max-w-[300px] xl:max-w-[400px] mx-auto items-center"
                        style={{
                          boxShadow:
                            '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
                          // border: '1px solid red',
                        }}
                        whileHover="hover"
                        animate="rest"
                        initial="rest"
                      >
                        <Link
                          href={item.link}
                          target="_blank"
                          rel="nooponer noreferrer"
                        >
                          <div className="w-full">
                            <img src={item.thumbnail} alt="" />
                          </div>

                          <div className="flex flex-col gap-6 p-5 flex-1 w-full justify-between">
                            <p className="black01 text-base w-full sm:w-[80%]">
                              {item.title}
                            </p>
                            <div className="flex justify-between">
                              <p className="text-xs text-dark-blue">
                                {item.pubDate.split(' ')[0]}
                              </p>
                              {/* <Image
                              src={'/common/arrow-right.svg'}
                              width={12}
                              height={12}
                              alt=">"
                            /> */}
                              <motion.img
                                src="/common/arrow-right.svg"
                                alt="blog-arrow"
                                className="w-3 h-3"
                                variants={arrowMotion}
                              />
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <p>Something went wrong...</p>
              )
            }
          </div>
        </div>
        <Link href={'blog'} className="mx-auto">
          <Button
            text="Read A Story"
            style="hover:border hover:border-dark-blue mx-auto bg-dark-blue w-[146px] lg:w-[201px] xl:w-[212px] hover:bg-white hover:text-dark-blue"
          />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
