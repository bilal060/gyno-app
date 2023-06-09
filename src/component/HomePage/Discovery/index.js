import React from 'react'
import DiscoryImg from '../../../image/discory.svg'
import DiscoveryForm from '../../form/discoveryForm'
function DiscoverySection() {
    return (
        <div className='discovery-section'>
            <div className="pt-5">
                <h2 className="heading2 mt-5 text-center">
                    Start Discovering <span>Your Family Story</span>
                </h2>
                <p className="text-center mt-3">
                    Search for a specific ancestor in Family Search, Even your best guess
                    will do.
                </p>
            </div>
            <div className='container mt-5'>
                <div className='row w-100 justify-content-center gap-lg-0 gap-3 pt-lg-4'>
                    <div className='col-lg-4 col-7'>
                        <img src={DiscoryImg} className='w-100' alt='' />
                    </div>

                    <div className='col-lg-8 ps-lg-5 pe-0'>
                        <div className='ps-lg-5'>
                            <DiscoveryForm />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DiscoverySection