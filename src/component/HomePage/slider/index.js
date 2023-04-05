import React from "react";
import Slider from "react-slick";
import Imag1 from './Rectangle 10.png'
import Imag2 from './Rectangle 11.png'
import Imag3 from './Rectangle 12.png'
import Imag4 from './Rectangle 13.png'
import Imag5 from './Rectangle 10.png'
import Imag6 from './Rectangle 11.png'

export default function SimpleSlider() {
    var settings = {
        infinite: true,
        speed: 200,
        slidesToScroll: 1,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 4,
    };
    return (
        <div className="mt-5">
            <svg className="w-100 mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 28" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M1921 0.413698C1881.92 3.37309 1838.14 6.14404 1790.24 8.69559C1577.9 20.0047 1284.54 27 960.5 27C636.459 27 343.102 20.0047 130.763 8.69559C82.8555 6.14404 39.0754 3.37309 0 0.413704V1.41657C212.338 17.4943 563.383 28 960.5 28C1357.62 28 1708.66 17.4943 1921 1.41657V0.413698Z" fill="#5D8B2F" />
            </svg>


            <div className="my-4 ">
                <Slider {...settings} autoplay>
                    <div>
                        <div className="w-100 ps-4"> <img className="w-100" src={Imag1} /></div>
                    </div>
                    <div>
                        <div className="w-100 ps-4"> <img className="w-100" src={Imag2} /></div>
                    </div>
                    <div>
                        <div className="w-100 ps-4"> <img className="w-100" src={Imag3} /></div>
                    </div>
                    <div>
                        <div className="w-100 ps-4"> <img className="w-100" src={Imag4} /></div>
                    </div>
                    <div>
                        <div className="w-100 ps-4"> <img className="w-100" src={Imag5} /></div>
                    </div>
                    <div>
                        <div className="w-100 ps-4"> <img className="w-100" src={Imag6} /></div>
                    </div>
                </Slider>
            </div>
            <svg className="w-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 28" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M1921 27.5863C1881.92 24.6269 1838.14 21.856 1790.24 19.3044C1577.9 7.99535 1284.54 1 960.5 1C636.459 1 343.102 7.99535 130.763 19.3044C82.8555 21.856 39.0754 24.6269 0 27.5863V26.5834C212.338 10.5057 563.383 1.90735e-06 960.5 1.90735e-06C1357.62 1.90735e-06 1708.66 10.5057 1921 26.5834V27.5863Z" fill="#5D8B2F" />
            </svg>

        </div>
    );
}