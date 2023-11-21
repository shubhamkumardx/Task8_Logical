import React, { useState } from 'react';

function Tabbing(props) {
    const [active, IsActive] = useState(1);

    return (

        <div>
            <div className='container'>
                <div className='tab2'>
                    <p className='nav1 text-center mt-3 fw-bold'>TABBING</p>
                    <div className='d-flex text-center mt-5'>

                        <div className='col nav2' onClick={() => IsActive(1)} style={active === 1 ? { backgroundColor: 'white', color: "blue" } : { color: 'black' }}>
                            <p className='mt-2 tab4 '>TAB-1</p>
                        </div>

                        <div className=' col text-center' onClick={() => IsActive(2)} style={active === 2 ? { backgroundColor: 'white', color: "blue" } : { color: 'black' }}>
                            <p className=' mt-2 tab4'>TAB-2</p>
                        </div>

                        <div className=' col text-center' onClick={() => IsActive(3)} style={active === 3 ? { backgroundColor: 'white', color: "blue" } : { color: 'black' }}>
                            <p className='mt-2 tab4'>TAB-3</p>
                        </div>

                        <div className=' col text-center' onClick={() => IsActive(4)} style={active === 4 ? { backgroundColor: 'white', color: "blue" } : { color: 'black' }}>
                            <p className='mt-2 tab4'>TAB-4</p>
                        </div>

                    </div>


                    <div className='container d-flex nav5 '>

                        {
                            active == 1 && <>
                                <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </>
                        }

                        {
                            active == 2 && <>
                                <p className='mt-3'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            </>
                        }
                        {
                            active == 3 && <>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni cupiditate? Officia eligendi error accusamus optio ipsa tempore corporis. Veniam repellendus adipisci similique nisi, porro et maxime vitae laboriosam libero illum.</p>
                            </>
                        }
                        {
                            active == 4 && <>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, cupiditate? Officia eligendi error accusamus optio ipsa tempore corporis. Veniam repellendus adipisci similique nisi, porro et maxime vitae laboriosam libero illum.</p>
                            </>
                        }

                    </div>

                </div>


                {/* RESPONSIVE */}


                <div className='tab3'>
                    <p className='nav1 text-center mt-3 fw-bold'>ACCORDION</p>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button tab6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion-1
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed tab6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion-2
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.  Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed tab6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion-3
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electroni cupiditate? Officia eligendi error accusamus optio ipsa tempore corporis. Veniam repellendus adipisci similique nisi, porro et maxime vitae laboriosam libero illum.
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingfour">
                                <button className="accordion-button collapsed tab6" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                    Accordion-4
                                </button>
                            </h2>
                            <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample" >
                                <div className="accordion-body">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, cupiditate? Officia eligendi error accusamus optio ipsa tempore corporis. Veniam repellendus adipisci similique nisi, porro et maxime vitae laboriosam libero illum.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Tabbing;