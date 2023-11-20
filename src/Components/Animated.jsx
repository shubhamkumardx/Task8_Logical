import React, { useEffect, useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { SiProcesswire } from 'react-icons/si';
import { SiSimpleanalytics } from 'react-icons/si';


function Animated(props) {
    const [isLarge, setIsLarge] = useState(true);


    return (
        <div>
            <div className='container'>
                <div
                    className='ab1'
                    onMouseOver={() => setIsLarge(!isLarge)}
                    onMouseLeave={() => setIsLarge(false)}
                >
                    <p className='mt-5 an1 '
                        style={{ fontSize: isLarge ? "20px" : "30px" }}
                    >Smart Animate Template</p>
                </div>
            </div>
            <hr></hr>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 ab4'>

                        <div className='ab2 mt-5'>
                            <div className='an3 text-center'>
                                <CgWebsite className='an2' />
                            </div>
                            <p className='mt-2 an4'>Web Development</p>
                            <p className='an5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                        </div>

                    </div>

                    <div className='col-lg-4'>
                        <div className='mt-5 an6 text-center'>
                            <FiSettings className='an2' />
                        </div>
                        <p className='mt-4 an4'>Search Engine Optimization</p>
                        <p className='an5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mt-5 an7 text-center'>
                            <SiProcesswire className="an2" />
                        </div>
                        <p className='mt-4 an4'>Contextual Advertising</p>
                        <p className='an5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>

                    </div>

                </div>


                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='mt-5 an8 text-center'>
                            <SiSimpleanalytics className='an2 ' />
                        </div>
                        <p className='mt-4 an4'>Web Analysis</p>
                        <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mt-5 an9 text-center'>
                            <CgWebsite className='an2' />
                        </div>
                        <p className='mt-4 an4'>Web Design</p>
                        <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mt-5 an10 text-center'>
                            <SiProcesswire className="an2" />
                        </div>
                        <p className='mt-4 an4'>Social Media</p>
                        <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>

                    </div>

                </div>


                {/* <div className='row'>
                    <div className='col-lg-4'>
                        <div className='mt-5 an8 text-center'>
                            <SiSimpleanalytics className='an2 ' />
                        </div>
                        <p className='mt-4 an4'>Web Analysis</p>
                        <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mt-5 an9 text-center'>
                            <CgWebsite className='an2' />
                        </div>
                        <p className='mt-4 an4'>Web Design</p>
                        <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mt-5 an10 text-center'>
                            <SiProcesswire className="an2" />
                        </div>
                        <p className='mt-4 an4'>Social Media</p>
                        <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>

                    </div>

                </div> */}


                {/* <div className='row'>
                    <div className='col-lg-4'>
                        <div className='mt-5 an8 text-center'>
                            <SiSimpleanalytics className='an2' />
                        </div>
                        <p className='mt-4 an4'>Web Analysis</p>
                        <p className='an5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mt-5 an9 text-center'>
                            <CgWebsite className='an2' />
                        </div>
                        <p className='mt-4 an4'>Web Design</p>
                        <p className='an5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mt-5 an10 text-center'>
                            <SiProcesswire className="an2" />
                        </div>
                        <p className='mt-4 an4'>Social Media</p>
                        <p className='an5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>

                    </div>

                </div> */}

            </div>


        </div>
    );
}

export default Animated;