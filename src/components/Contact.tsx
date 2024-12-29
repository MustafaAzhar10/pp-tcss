import React from 'react'
import { IoMail } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl text-[#990011]' data-aos="zoom-in"><b>Contact Us</b></h2>
                <p className='text-[#6c1620] text-[18px] pt-2'  data-aos="zoom-in">
                Send Us a Message,
                Reach Out to Us,
                Ping Us Anytime,
                Leave Us a Note,
                Send a Quick Message,
                
                </p>
                <div className='flex gap-3 items-center' data-aos="zoom-in">
                <IoMail size={30} className='text-[#6c1620]'/> mustafaazhar50@gmail.com
                </div>
                <div className='flex gap-3 items-center'  data-aos="zoom-in">
                <FaPhoneSquareAlt size={30} className='text-[#6c1620]' /> 03323726424
                </div>
            </div>
            <div className='space-y-8'  data-aos="zoom-in">
                <div className='flex flex-col gap-1'>
                    <label htmlFor='name' className='text-[#6c1620]'>Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-[#6c1620]'
                    id='name' />
                </div>

                <div className='flex flex-col gap-1'  data-aos="zoom-in">
                    <label htmlFor='email' className='text-[#6c1620]'>Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-[#6c1620]'
                    id='email' />
                </div>

                <div className='flex flex-col gap-1' data-aos="zoom-in">
                    <label htmlFor='msg' className='text-[#6c1620]'>Message</label>
                    <textarea
                    className='bg-transparent border border-[#6c1620]'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-[#990011] p-2 px-6 text-white'  data-aos="zoom-in"><b>Send</b></button>


            </div>
        </div>
    </div>
  )
}

export default Contact
