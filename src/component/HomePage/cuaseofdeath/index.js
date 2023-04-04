import React from 'react'
import './style.css';
import CauseImg from '../../../image/cause.png'
function CauseOfDeath() {
    return (
        <div className='cause-of-death-section'>
            <div className='container'>
                <div className='row w-100'>
                    <div className='col-lg-6'>
                        <h2 className='heading2 text-capitalize'>Causes <span>Of Deaths</span></h2>
                        <p className='text-18 '>Cardiovascular disease, which includes heart disease and stroke, is one of the most common causes of death in Ireland.</p>
                        <p className='text-18 '>Approximately 9,000 people die each year from cardiovascular disease – including coronary heart disease, stroke and other circulatory diseases.</p>
                        <p className='text-18 fw-bold'>In Ireland, heart failure is among the least talked about, the least understood and the least prominent of chronic diseases.</p>
                        <ul>
                            <li className='mb-3'>90,000 people have heart failure</li>
                            <li className='mb-3'>There are 10,000 new cases every year</li>
                            <li className='mb-3'>Because of population growth, longevity and disease prevalence the number of Irish people affected by heart failure is set to dramatically increase in the next decade.</li>
                        </ul>
                        <button className='btn green-btn mt-3'>Learn More</button>
                    </div>
                    <div className='col-lg-6 p-5 pt-0'>
                        <img src={CauseImg} className='w-100 m-5 mt-0' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CauseOfDeath