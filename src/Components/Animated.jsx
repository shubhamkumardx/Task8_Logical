import React, { useEffect, useState } from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { SiProcesswire } from 'react-icons/si';
import { SiSimpleanalytics } from 'react-icons/si';


function Animated(props) {
    const [isLarge, setIsLarge] = useState(true);

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header").style.fontSize = "25px";
        } else {
            document.getElementById("header").style.fontSize = "40px";
        }
    }


    return (
        <div>
            <div className='container-fluid stic'>

                <div className='' id='header'  >
                    <p className='mt-5 an1'>SMART ANIMATE TEMPLATE</p>
                </div>
                <hr></hr>
            </div>

        

            <div className='container mt-5'>
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


                        <div className='abb3 mt-5'>
                            <div className='an6 text-center'>
                                <FiSettings className='an2' />
                            </div>
                            <p className='mt-2 an44'>Search Engine Optimization</p>
                            <p className='an5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>

                        </div>

                    </div>

                    <div className='col-lg-4'>

                        <div className='abb4 mt-5'>
                            <div className=' an7 text-center'>
                                <SiProcesswire className="an2" />
                            </div>
                            <p className='mt-4 aan4'>Contextual Advertising</p>
                            <p className='an5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>
                        </div>


                    </div>

                </div>


                <div className='row mt-4'>
                    <div className='col-lg-4'>

                        <div className='mt-5 bb1'>
                            <div className=' an8 text-center'>
                                <SiSimpleanalytics className='an2 ' />
                            </div>
                            <p className='mt-4 n4'>Web Analysis</p>
                            <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>

                        </div>

                    </div>

                    <div className='col-lg-4'>
                        <div className='bb2 mt-5'>
                            <div className=' an9 text-center'>
                                <CgWebsite className='an2' />
                            </div>
                            <p className='mt-4 n5'>Web Design</p>
                            <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>

                        </div>

                    </div>

                    <div className='col-lg-4'>
                        <div className='bb3 mt-5'>
                            <div className=' an10 text-center'>
                                <SiProcesswire className="an2" />
                            </div>
                            <p className='mt-4 n6'>Social Media</p>
                            <p className='an5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque inventore vel harum sunt, dignissimos</p>

                        </div>


                    </div>

                </div>


          
            </div>

            <br /> <br /> <br />


            
            
        </div>
    );
}

export default Animated;