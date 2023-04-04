import React from 'react'
import './style.css';
import CauseImg from '../../../image/cause.png'
function CommonCauseOfDeath() {
    return (
        <div className='cause-of-death-section'>
            <div className='container'>
                <div className='row w-100'>
                    <div className='col-lg-6'>
                        <h2 className='heading2 text-capitalize'>Causes <span>Of Deaths</span></h2>
                        <p className='text-18 '>There are hundreds of places where information about your family may be found, because from the moment your ancestors set foot in America, someone was writing down their names. Did they arrive on a ship, by bus, or by plane? There's probably a record of it somewhere. Did they get married, divorced, have children, die? Forms had to be filled out, and those forms are on file in some office. Did they apply for American citizenship, a passport, social security? Did they ever vote? Somewhere in the United States, there are records of all of that. And the information on these records can help you find out a great deal about the people in your past.</p>
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

export default CommonCauseOfDeath