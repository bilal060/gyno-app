import React from 'react'
import Keying from '../../../image/keyevent.png'
const data = ["The coming of the gospel to Ireland",
    "The arrival of Henry Plantagenet in Ireland",
    "The Plantation of Ulster",
    "The sack of Drogheda",
    "The battle of Aughrim",
    "An Argument on Behalf of the Catholics of Ireland",
    "Daniel O’Connell and Catholic Emancipation",
    "The Great Famine",
    "Fifteen leaders of the Easter Rising are executed",
    "Bloody Sunday",
    "The Good Friday Agreement"
]
function KeyEvent() {
    return (
        <div className='key-event-section'>
            <div className='container'>
                <div className='row w-100'>
                    <div className='col-lg-6 pe-5'>
                        <img src={Keying} className='w-100 me-5' alt='' />
                    </div>
                    <div className='col-lg-6'>
                        <h2 className='heading2 text-capitalize'>key events <span>in Irish history </span></h2>
                        <p className='text-18'>An island people the Irish may be, yet the history of Ireland has never been insular or inward-looking. Instead, it is a story of a people profoundly aware of the wider world – its threats, its possibilities and its advantages.</p>
                        <ul>
                            {
                                data.map((val, index) => {
                                    return (
                                        <li key={index} className='mb-1 fw-bold'>{val}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default KeyEvent