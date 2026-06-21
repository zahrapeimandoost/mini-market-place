import { Link } from 'react-router-dom';
import sportStore from '../assets/sports accessories.png';
const HomePage = () => {
    
    return (
        <div>
        <div className="flex flex-col md:flex-row bg-gray-50 shadow-lg shadow-gray-200 p-5 rounded-xl">
            <div className='pt-5 flex flex-1 flex-col items-center  md:items-start'>
                <h1 className='text-orange-400 text-4xl mb-5 font-semibold text-center md:text-left'>Welcome To Our Amazing sports accessory Collection </h1>
                <p className='mb-5 text-center md:text-left'>Elevate your game with our premium sports accessories. From high-performance gear to essential training tools, we provide everything you need to push your limits and achieve greatness. Whether you’re a professional athlete or a fitness enthusiast, discover quality equipment designed for peak performance</p>
                <Link
                 to="/about-us" 
                 className='bg-gray-100 rounded-md p-3 shadow-lg cursor-pointer hover:text-orange-400 mb-5'
                 >
                 Learn more
                 </Link>
            </div>
            <div className='flex flex-col flex-1 justify-center items-center gap-3 md:ml-3'>
                <img className='w-full object-cover' src={sportStore} alt='sportStore'/>
                <Link
                 to="/products"
                 className='bg-gray-100 rounded-md p-3 shadow-lg cursor-pointer hover:text-orange-400 font-semibold'
                 >
                 Visit Our Products
                </Link>
            </div>
            
        </div>
        <section>
        <h2 className="text-3xl font-semibold text-center mb-8 mt-6">
         Why Shop With Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

         <div className="bg-gray-50 shadow-lg rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">🏆</div>
           <h3 className="font-semibold mb-2">
            Premium Quality
           </h3>
           <p>
             Carefully selected sports accessories designed for durability and performance.
           </p>
         </div>

         <div className="bg-gray-50 shadow-lg rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">🚚</div>
           <h3 className="font-semibold mb-2">
            Fast Delivery
           </h3>
           <p>
           Quick and reliable shipping to get your favorite products on time.
           </p>
         </div>

         <div className="bg-gray-50 shadow-lg rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">💪</div>
           <h3 className="font-semibold mb-2">
           Trusted By Athletes
           </h3>
           <p>
           Thousands of athletes and fitness enthusiasts trust our products.
           </p>
         </div>

         <div className="bg-gray-50 shadow-lg rounded-xl p-6 text-center">
          <div className="text-4xl mb-3">🔒</div>
           <h3 className="font-semibold mb-2">
           Secure Shopping
           </h3>
           <p>
           Enjoy a safe and secure shopping experience with reliable payment methods.
           </p>
         </div>

        </div>
       </section>
       <section className="bg-gray-50 shadow-lg rounded-xl p-8 mt-10">

  <h2 className="text-3xl font-semibold text-center mb-4">
    Get In Touch
  </h2>

  <p className="text-center text-gray-600 mb-8">
    Have questions about our products or need assistance?
    Our team is always ready to help you achieve your fitness goals.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="text-center bg-white rounded-xl shadow-md p-6">
      <div className="text-4xl mb-3">📍</div>
      <h3 className="font-semibold mb-2">
        Visit Us
      </h3>
      <p>
        Tehran, Iran
      </p>
    </div>

    <div className="text-center bg-white rounded-xl shadow-md p-6">
      <div className="text-4xl mb-3">📞</div>
      <h3 className="font-semibold mb-2">
        Call Us
      </h3>
      <p>
        +98 912 123 4567
      </p>
    </div>

    <div className="text-center bg-white rounded-xl shadow-md p-6">
      <div className="text-4xl mb-3">📧</div>
      <h3 className="font-semibold mb-2">
        Email Us
      </h3>
      <p>
        support@minimarketplace.com
      </p>
    </div>

  </div>

</section>
     </div>
        
    )
};
export default HomePage;