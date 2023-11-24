import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

function Animate3(props) {
    const [active, IsActive] = useState(1);


    return (
        <div>
            <div className='mt-4'>

                <div className='container'>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className='container'>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className='row '>
                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/painting/u/c/b/30-5-ms-6mm-5p-1730-16227-masstone-original-imagtg63jgs97aec.jpeg?q=70" className="d-block slider1" alt="..."
                                                onClick={() => IsActive(1)} style={active === 1 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>

                                        <div className='col'>
                                            <img src="https://mixingimages.in/wp-content/uploads/2023/06/Khatu-Shyam-Image-HD-Wallpaper-Download.jpg" className="d-block slider1" alt="..."
                                                onClick={() => IsActive(2)} style={active === 2 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>
     
                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/w/l/s/15-24-7-62-adiyogi-black-color-trnsform-12-7-original-imagz83guyu6th3f.jpeg?q=70" className="d-block  slider1" alt="..."
                                                onClick={() => IsActive(3)} style={active === 3 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>

                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/diya/h/p/k/1-mspbansuiganeshagold-01-beckon-venture-6-original-imafuqzh7zgvf7cz.jpeg?q=70" className="d-block  slider1" alt="..."
                                                onClick={() => IsActive(4)} style={active === 4 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>

                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/b/c/g/8-8-hanuman-ji-chhariya-crafts-16-original-imagp5gy6ghhwfex.jpeg?q=70" className="d-block slider1" alt="..."
                                                onClick={() => IsActive(5)} style={active === 5 ? { border: '2px solid black' } : { border: "none" }} 
                                            />
                                        </div>
                                    </div>
                                </div>


                                <div class="carousel-item">
                                    <div className='row'>
                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/q/d/8/-original-imagu2f6yggwmmzf.jpeg?q=70" className="d-block slider1" alt="..."
                                                onClick={() => IsActive(6)} style={active === 6 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>

                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/0/k/6/printed-vo-db485-flat-chhavi-india-original-imagmw7mcfvtrmca.jpeg?q=70" className="d-block slider1" alt="..."
                                                onClick={() => IsActive(7)} style={active === 7 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>

                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70" className="d-block slider1" alt="..."
                                                onClick={() => IsActive(8)} style={active === 8 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>

                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/l12h1u80/bedsheet/v/7/1/double-00bd414-1-double-bedsheet050244-flat-decorum-original-imagcq25sr9rjutz.jpeg?q=70" className="d-block slider1" alt="..."
                                                onClick={() => IsActive(9)} style={active === 9 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>

                                        <div className='col'>
                                            <img src="https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70" className="d-block slider1 " alt="..."
                                                onClick={() => IsActive(10)} style={active === 10 ? { border: '2px solid black' } : { border: "none" }}
                                            />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button className="carousel-control-prev prevv2" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next prevv3" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>


                </div>



                {/* <div className='container mt-5'>
                    <div className='row mt-5 prevv4 d-flex'>
                        <div className='col-lg-4 prevv'>

                            <div className='mt-5 prevv1 '>
                                {
                                    active == 1 && <>   
                                        <div className='slider2'>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/u/c/b/30-5-ms-6mm-5p-1730-16227-masstone-original-imagtg63jgs97aec.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/u/c/b/30-5-ms-6mm-5p-1730-16227-masstone-original-imagtg63jgs97aec.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,

                                                    },
                                                }}
                                            />

                                        </div>



                                    </>
                                }

                                {
                                    active == 2 && <>

                                        <div className='slider8'>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://mixingimages.in/wp-content/uploads/2023/06/Khatu-Shyam-Image-HD-Wallpaper-Download.jpg",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://mixingimages.in/wp-content/uploads/2023/06/Khatu-Shyam-Image-HD-Wallpaper-Download.jpg",
                                                        width: 1646,
                                                        height: 1800,
                                                    },
                                                }}
                                            />

                                        </div>


                                    </>
                                }

                                {
                                    active == 3 && <>

                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/w/l/s/15-24-7-62-adiyogi-black-color-trnsform-12-7-original-imagz83guyu6th3f.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/w/l/s/15-24-7-62-adiyogi-black-color-trnsform-12-7-original-imagz83guyu6th3f.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,
                                                    },



                                                }}
                                            />

                                        </div>


                                    </>
                                }

                                {
                                    active == 4 && <>

                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/diya/h/p/k/1-mspbansuiganeshagold-01-beckon-venture-6-original-imafuqzh7zgvf7cz.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/diya/h/p/k/1-mspbansuiganeshagold-01-beckon-venture-6-original-imafuqzh7zgvf7cz.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,
                                                    },



                                                }}
                                            />

                                        </div>


                                    </>
                                }

                                {
                                    active == 5 && <>


                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/b/c/g/8-8-hanuman-ji-chhariya-crafts-16-original-imagp5gy6ghhwfex.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/b/c/g/8-8-hanuman-ji-chhariya-crafts-16-original-imagp5gy6ghhwfex.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,
                                                    },



                                                }}
                                            />

                                        </div>

                                    
                                    </>
                                }

                                {
                                    active == 6 && <>

                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/q/d/8/-original-imagu2f6yggwmmzf.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/q/d/8/-original-imagu2f6yggwmmzf.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,
                                                    },
                                                }}
                                            />

                                        </div>

                                    </>
                                }

                                {
                                    active == 7 && <>

                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/0/k/6/printed-vo-db485-flat-chhavi-india-original-imagmw7mcfvtrmca.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/0/k/6/printed-vo-db485-flat-chhavi-india-original-imagmw7mcfvtrmca.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,
                                                    },
                                                }}
                                            />

                                        </div>

                                    </>
                                }

                                {
                                    active == 8 && <>

                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,
                                                    },
                                                }}
                                            />

                                        </div>

                                    </>
                                }

                                {
                                    active == 9 && <>

                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/l12h1u80/bedsheet/v/7/1/double-00bd414-1-double-bedsheet050244-flat-decorum-original-imagcq25sr9rjutz.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/l12h1u80/bedsheet/v/7/1/double-00bd414-1-double-bedsheet050244-flat-decorum-original-imagcq25sr9rjutz.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,
                                                    },
                                                }}
                                            />

                                        </div>

                                    </>
                                }

                                {
                                    active == 10 && <>

                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70",
                                                        width: 1646,
                                                        height: 1800,
                                                    },
                                                }}
                                            />

                                        </div>


                                    </>
                                }

                            </div>

                        </div>

                        <div className='col-lg-8'>


                        </div>

                    </div>

                    <div>

                    </div>


                </div> */}

                <div className='container'>

                    <div className='d-flex mag-13 mt-5'>
                        
                        <div className='mt-2 '>
                            {
                                active == 1 && <>
                                    <div className='pp2' >
                                        <ReactImageMagnify  
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: false,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/u/c/b/30-5-ms-6mm-5p-1730-16227-masstone-original-imagtg63jgs97aec.jpeg?q=70",
                                                    width: 500,
                                                    height: 362,
                                                    // sizes: "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px", 
                                                },
                                                largeImage: {
                                                    isFluidWidth: true,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/painting/u/c/b/30-5-ms-6mm-5p-1730-16227-masstone-original-imagtg63jgs97aec.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },
                                                enlargedImageContainerStyle: {
                                          
                                                  }
                                            }}
                                        />
                                    </div>

                                </>
                            }

                            {
                                active == 2 && <>

                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: false,
                                                    src: "https://mixingimages.in/wp-content/uploads/2023/06/Khatu-Shyam-Image-HD-Wallpaper-Download.jpg",
                                                    width: 500,
                                                    height: 362,
                                                },
                                                largeImage: {
                                                    src: "https://mixingimages.in/wp-content/uploads/2023/06/Khatu-Shyam-Image-HD-Wallpaper-Download.jpg",
                                                    width: 1646,
                                                    height: 1800,
                                                },
                                            }}
                                        />

                                    </div>


                                </>
                            }

                            {
                                active == 3 && <>

                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: false,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/w/l/s/15-24-7-62-adiyogi-black-color-trnsform-12-7-original-imagz83guyu6th3f.jpeg?q=70",
                                                    width: 500,
                                                    height: 362,
                                                },
                                                largeImage: {
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/w/l/s/15-24-7-62-adiyogi-black-color-trnsform-12-7-original-imagz83guyu6th3f.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },



                                            }}
                                        />

                                    </div>


                                </>
                            }

                            {
                                active == 4 && <>

                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: false,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/diya/h/p/k/1-mspbansuiganeshagold-01-beckon-venture-6-original-imafuqzh7zgvf7cz.jpeg?q=70",
                                                    width: 500,
                                                    height: 362,
                                                },
                                                largeImage: {
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/diya/h/p/k/1-mspbansuiganeshagold-01-beckon-venture-6-original-imafuqzh7zgvf7cz.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },

                                            }}
                                        />
                                    </div>
                                </>
                            }

                            {
                                active == 5 && <>
                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: false,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/b/c/g/8-8-hanuman-ji-chhariya-crafts-16-original-imagp5gy6ghhwfex.jpeg?q=70",
                                                    width: 500,
                                                    height: 362,
                                                },
                                                largeImage: {
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/showpiece-figurine/b/c/g/8-8-hanuman-ji-chhariya-crafts-16-original-imagp5gy6ghhwfex.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },
                                            }}
                                        />
                                    </div>

                                    {/* <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/e/b/q/-original-imagunxghhkhvsx7.jpeg?q=70" className="d-block slider2" alt="..." /> */}
                                </>
                            }

                            {
                                active == 6 && <>

                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: true,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/q/d/8/-original-imagu2f6yggwmmzf.jpeg?q=70",
                                                    width: 140,
                                                    height: 162,
                                                },
                                                largeImage: {
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/q/d/8/-original-imagu2f6yggwmmzf.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },
                                            }}
                                        />
                                    </div>

                                    {/* <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/q/d/8/-original-imagu2f6yggwmmzf.jpeg?q=70" className="d-block slider2" alt="..." /> */}
                                </>
                            }

                            {
                                active == 7 && <>

                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: true,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/0/k/6/printed-vo-db485-flat-chhavi-india-original-imagmw7mcfvtrmca.jpeg?q=70",
                                                    width: 140,
                                                    height: 162,
                                                },
                                                largeImage: {
                                                    src: "https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/0/k/6/printed-vo-db485-flat-chhavi-india-original-imagmw7mcfvtrmca.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },
                                            }}
                                        />

                                    </div>

                                    {/* <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/0/k/6/printed-vo-db485-flat-chhavi-india-original-imagmw7mcfvtrmca.jpeg?q=70" className="d-block slider2" alt="..." /> */}
                                </>
                            }

                            {
                                active == 8 && <>

                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: true,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70",
                                                    width: 140,
                                                    height: 162,
                                                },
                                                largeImage: {
                                                    src: "https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },
                                            }}
                                        />
                                    </div>

                                    {/* <img src="https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70" className="d-block slider2" alt="..." /> */}
                                </>
                            }

                            {
                                active == 9 && <>

                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: true,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/l12h1u80/bedsheet/v/7/1/double-00bd414-1-double-bedsheet050244-flat-decorum-original-imagcq25sr9rjutz.jpeg?q=70",
                                                    width: 140,
                                                    height: 162,
                                                },
                                                largeImage: {
                                                    src: "https://rukminim2.flixcart.com/image/612/612/l12h1u80/bedsheet/v/7/1/double-00bd414-1-double-bedsheet050244-flat-decorum-original-imagcq25sr9rjutz.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },
                                            }}
                                        />
                                    </div>

                                    {/* <img src="https://rukminim2.flixcart.com/image/612/612/l12h1u80/bedsheet/v/7/1/double-00bd414-1-double-bedsheet050244-flat-decorum-original-imagcq25sr9rjutz.jpeg?q=70" className="d-block slider2" alt="..." /> */}
                                </>
                            }

                            {
                                active == 10 && <>

                                    <div className='pp2'>
                                        <ReactImageMagnify
                                            {...{
                                                smallImage: {
                                                    alt: "wristwatch by versace",
                                                    isFluidWidth: true,
                                                    src: "https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70",
                                                    width: 140,
                                                    height: 162,

                                                },
                                                largeImage: {
                                                    src: "https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70",
                                                    width: 1646,
                                                    height: 1800,
                                                },
                                            }}
                                        />
                                    </div>
                                    {/* <img src="https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70" className="d-block slider2" alt="..." /> */}
                                </>
                            }

                        </div>

                        <div className='mt-2 mag-2'>
                            <p className='mag-1'>Masstone Radha Krishna with Flute Religious 5 Piece Panel MDF Painting Digital Reprint 17 inch x 30 inch Painting.(With Frame)</p>

                            <div className='d-flex'>
                                <div className='mag-4 text-white text-center'>
                                    <p>4.5</p>
                                </div>
                                <p className='text-secondary mag-3'>2,191 Ratings & 282 Reviews</p>

                                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" className='mag-5' />
                            </div>

                            <div className='d-flex'>
                                <p className='mag-6'>Rs.299</p>
                                <p className='mag-7 text-secondary'>1,199</p>
                                <p className='mag-8'>75% off</p>
                            </div>

                            <div>
                                <ul>
                                    <h6 className='mag-9'>Available Offer</h6>
                                    <li>Buy for 100 get ₹50 off your Next Buy. <strong className='mag-10'>T&C</strong></li>

                                    <li>Buy for 100 get ₹75 off your Next Buy. <strong className='mag-10'>T&C</strong></li>

                                    <li> <strong>Bank Offer</strong> 10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above. <strong className='mag-10'>T&C</strong></li>

                                    <li> <strong>Bank Offer</strong> 10% off on Flipkart Axis Bank Credit Card EMI Transactions, up to ₹1500 on orders of ₹5000 and above. <strong className='mag-10'>T&C</strong></li>

                                </ul>
                            </div>

                            <p className='mag-11'>View 12 more offers</p>

                            <div>
                                <p className='text-secondary mag-12'>Description</p>
                                <p>We at Masstone believe in high quality product with affordable price to all. Each painting is perfectly crafted by our highly skilled designer for our valuable customer. painting is made up in high grade MDF thick wood with UV textured art work pasted on it. .  The digital reprint is made with high quality ultra-violet ink with matt textured finish which gives multi effect.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />  <br />  <br />  <br />  <br />
        </div>
    );
}

export default Animate3;