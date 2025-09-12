import React from 'react'

const ProductDetails = () => {
  const product_image = "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJvwfdCGUj8IqySSQMgmF4sPifgRhSpWBxbLxslogPwlitp0-1rBufasBuIqP1GwVN5T_2MaA4etKU0QYF-fWKb-QmrM0pSFwxbLMMm7iOuiqh8yo2iSQSaw"

  const product_images = [

    {
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRqramyO5IMjyaSyx3AmXgeRmQf1TONN6VvktkWFTCizOK5C0ohi11A2Mc2IxesL1bc46BDKjEIeGmpo_xaos9NUz7w75RxfESt_2xjY8lB5rJOo32ahw",
    },
    {
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRdk3AT74B-ONgoxpDtTeAOPigLo8KD6NzZTsKC5EfKNF1M9IxFALXsQTybUXJjjcm1JJiaV167UsdxCSlfgzWXjsXl4Ov6i4flxOiRyF8Gv-Ga1U_WiQY",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQe-t8RNYUsupTIngwIfDlj3kqIWo5Ou1dIF47RFHEg-iLZmtCsFepfJjZPzKjvNOyen13aUrwv5mBp_vcDdAkZXsVkP279Rf-yPNj0c2z8XtfS70Bklw",
    },
  ]
  return (
    <div>
      <div className='  w-full h-screen flex p-2 gap-2 pt-12 md:flex-row flex-col ' >



        {/* Left //Image + buy section  */}
        <div className=' w-full md:w-[40%] flex flex-col p-2  gap-2 justify-center items-center '>



          <div className=' w-full md:w-full h-160 flex-2 bg-amber-400 p-2 flex justify-center items-center '>
            <img className='object-contain h-full ' src={product_image} alt="product image" />
          </div>

          {/* For small screen Title */}
          <div className='md:hidden w-full'>
            <div className='border text-4xl'><h1>Produt Title</h1></div>
            <div className='border h-20'>
              <p>pera</p>
            </div>
          </div>

          <div className='border w-full flex-1 flex justify-center flex-col gap-2 p-2 bg-sky-200'>

            <div className=' flex '>
              <div className=' flex items-center justify-center flex-1 ' ><h1 className='text-2xl p-6'>2,999</h1></div>
              <div className=' flex items-center justify-center flex-2 ' ><h1 className='text-4xl p-6' >1,587</h1></div>
              <div className=' flex items-center justify-center flex-1' ><h1 className='text-3xl p-6'>69%</h1></div>

            </div>

            <div className='flex p-2 border bg-blue-200 justify-center items-center gap-8'>
              <div className='w-[30%]'>
                <button className='p-2 shadow-amber-700 shadow-2xl outline w-full hover:bg-blue-300 transform transition-all hover:scale-110 hover:cursor-pointer' >Add to Cart</button>
              </div>
              <div className=' w-[40%]'>
                <button className='p-2 shadow-amber-700 shadow-2xl outline w-full hover:bg-blue-300 transform transition-all hover:scale-110 hover:cursor-pointer' >Buy Now</button>
              </div>
              <div>
                <button className='p-2 shadow-amber-700 shadow-2xl outline w-full hover:bg-blue-300 transform transition-all hover:scale-110 hover:cursor-pointer' >Save for Later</button>
              </div>
            </div>


          </div>

        </div>




        {/* Main section | title description */}
        <div className='bg-blue-400 md:w-[60%] w-full p-5 gap-5 flex flex-col ' >
          <div className='border text-6xl hidden md:block'><h1>Produt Title</h1></div>
          <div className='border h-110'>
            <p>pera</p>
          </div>
          <div className='bg-green-500 h-30'>

          </div>
        </div>


      </div>
    </div>
  )
}

export default ProductDetails
