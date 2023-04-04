import React from 'react'

const textData = [
    { label: 'First Name', placeholder: `Ancestor's First Name`, name: 'firstName' },
    { label: 'Last Name', placeholder: `Ancestor's Last Name`, name: 'lastName' },
]
const SelectData = [
    { label: 'City', name: 'city', options: ['select City', 'Option 1'] },
    { label: 'State', name: 'state', options: ['select State', 'Option 1'] },
    { label: 'Country', name: 'country', options: ['select country', 'Option 1'] },

]

function DiscoveryForm() {
    return (
        <div className='discovey-form'>
            <form>
                <div className='row'>
                    {
                        textData.map((val, index) => {
                            return (
                                <div className='col-lg-6' key={index}>
                                    <label className='form-label' for={val.label}>{val.label}</label>
                                    <input type={'text'} className='form-input' placeholder={val.placeholder} name={val.name} />
                                </div>
                            )
                        })
                    }
                    <div className='col-lg-6' >
                        <label className='form-label' for={'dateOfBirth'}>Date Of Birth</label>
                        <input type={'date'} className='form-input' name={'dateOfBirth'} />
                    </div>
                    {
                        SelectData.map((val, index) => {
                            return (
                                <div className='col-lg-6' key={index}>
                                    <label className='form-label' for={val.label}>{val.label}</label>
                                    <select className='form-input' placeholder={val.placeholder} name={val.name} id={val.name}>
                                        {
                                            val.options.map((data, ind) => {
                                                return (
                                                    <option key={ind} value={data}>{data}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            )
                        })
                    }
                </div>
            </form>
        </div>
    )
}

export default DiscoveryForm