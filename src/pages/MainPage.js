import React from 'react';

const MainPage = () => {
  return (
    <div className="bg-red-700">
      {/* Hero Section */}
      <section id="main" className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Verify Certifications With Our </h1>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">  Advanced System</h1>
<br />
        <p className="mb-8 max-w-lg">A secure, efficient way to instantly validate and authenticate professional qualifications and credentials.</p>
       
        <label className="text-2xl md:text-2xl font-bold mb-4"> Student id</label>
        <div className="flex items-center max-w-sm w-full">
          <input
            type="text"
            placeholder="Search by student Id"
            className="px-4 py-2 w-full border border-gray-300 rounded-l-lg focus:outline-none text-black"
          />
          <button className="px-4 py-2 bg-gray-700 text-white rounded-r-lg">
            <i className="fa-solid fa-search"></i>
          </button>
        </div>
      </section>
      <br/>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-white text-black p-10 text-center">
        <h2 className="text-3xl font-bold mb-6">What is certCrypt?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          certCrypt ensures the authenticity of professional certifications with our advanced, real-time verification system. 
          We are committed to integrity, security, and innovation, providing a reliable platform for employers and professionals alike.
          Our user-friendly technology and dedicated support make certification verification efficient and accurate.
        </p>
        <img src="https://static.vecteezy.com/system/resources/previews/023/051/938/non_2x/100-percent-certified-rubber-stamp-seal-vector.jpg"
         alt="Certified 100%" className="w-80 h-60 mx-auto " />
      </section>
      <br/>

      {/* Contact Us Section */}
{/* Contact Us Section */}
<section id="contact" className="bg-black text-white p-0 text-center">
  {/* Adjusted image styling with margin adjustments */}
  <img 
    className="w-full h-80 object-cover pt-10" // Added negative margin to move the image upwards
    src="https://www.shutterstock.com/image-photo/contact-us-customer-support-hotline-260nw-1389529316.jpg" 
    alt="Contact Us Banner"
  />
  
  <div className="p-10">
    <h2 className="text-3xl font-bold mb-6">Contact us</h2>
    <p className="mb-4">For Queries, Feedback and Assistance</p>
    <p>certCrypt Customer Support</p>
    <p className="mb-4">Our team is here to help you out. You can get in touch with us via phone.</p>

    <p className="text-2xl mb-2">Phone</p>
    <p>1900 366 127</p>
    <p>(Mon - Sat: 9 AM - 6 PM)</p>

    <p className="text-2xl mb-2 mt-6">Address</p>
    <p>Shirdi, Pune, Maharashtra, 560064</p>
  </div>
</section>

<br/>
    </div>
  );
};

export default MainPage;
