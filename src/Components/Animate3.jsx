import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

function Animate3(props) {
    const [active, IsActive] = useState(1);


    return (
        <div>
            <div className=' mt-5'>

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
                                        <img src="https://rukminim2.flixcart.com/image/612/612/ksxjs7k0hlty2aw/curtain/d/e/l/2cur7f-1117-eyelet-panipat-textile-hub-original-imag6h6vfmzfz4gd.jpeg?q=70" className="d-block slider1" alt="..."
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


                <div className='container mt-5'>
                    <div className='row mt-5 prevv4 d-flex'>
                        <div className='col-lg-4 prevv'>

                            <div className='mt-5 prevv1'>
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
                                                        width: 1046,
                                                        height: 1100,
                                                       
                                                    },
                                                }}
                                            />
   
                                        </div>



                                    </>
                                }

                                {
                                    active == 2 && <>

                                        <div className=''>
                                            <ReactImageMagnify
                                                {...{
                                                    smallImage: {
                                                        alt: "wristwatch by versace",
                                                        isFluidWidth: true,
                                                        src: "https://rukminim2.flixcart.com/image/612/612/ksxjs7k0hlty2aw/curtain/d/e/l/2cur7f-1117-eyelet-panipat-textile-hub-original-imag6h6vfmzfz4gd.jpeg?q=70",
                                                        width: 140,
                                                        height: 162,

                                                    },
                                                    largeImage: {
                                                        src: "https://rukminim2.flixcart.com/image/612/612/ksxjs7k0hlty2aw/curtain/d/e/l/2cur7f-1117-eyelet-panipat-textile-hub-original-imag6h6vfmzfz4gd.jpeg?q=70",
                                                        width: 1046,
                                                        height: 1100
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
                                                        width: 1046,
                                                        height: 1100
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
                                                        width: 1046,
                                                        height: 1100
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
                                                        width: 1046,
                                                        height: 1100
                                                    },



                                                }}
                                            />

                                        </div>

                                        {/* <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/e/b/q/-original-imagunxghhkhvsx7.jpeg?q=70" className="d-block slider2" alt="..." /> */}
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
                                                        width: 1046,
                                                        height: 1100
                                                    },
                                                }}
                                            />

                                        </div>

                                        {/* <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/q/d/8/-original-imagu2f6yggwmmzf.jpeg?q=70" className="d-block slider2" alt="..." /> */}
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
                                                        width: 1046,
                                                        height: 1100
                                                    },
                                                }}
                                            />

                                        </div>

                                        {/* <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/0/k/6/printed-vo-db485-flat-chhavi-india-original-imagmw7mcfvtrmca.jpeg?q=70" className="d-block slider2" alt="..." /> */}
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
                                                        width: 1046,
                                                        height: 1100
                                                    },
                                                }}
                                            />

                                        </div>

                                        {/* <img src="https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70" className="d-block slider2" alt="..." /> */}
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
                                                        width: 1046,
                                                        height: 1100
                                                    },
                                                }}
                                            />

                                        </div>

                                        {/* <img src="https://rukminim2.flixcart.com/image/612/612/l12h1u80/bedsheet/v/7/1/double-00bd414-1-double-bedsheet050244-flat-decorum-original-imagcq25sr9rjutz.jpeg?q=70" className="d-block slider2" alt="..." /> */}
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
                                                        width: 1046,
                                                        height: 1100
                                                    },
                                                }}
                                            />

                                        </div>


                                        {/* <img src="https://rukminim2.flixcart.com/image/612/612/kxhvf680/bed-cover/r/t/0/double-1-sukha-ped-black-devatwal-fashion-original-imag9x2ugmdhw73t.jpeg?q=70" className="d-block slider2" alt="..." /> */}
                                    </>
                                }

                            </div>

                        </div>

                        <div className='col-lg-8'>
                         
                       
                        </div>

                    </div>

                    <div>

                    </div>





                </div>



            </div>

            <br />  <br />  <br />  <br />  <br />
        </div>
    );
}

export default Animate3;