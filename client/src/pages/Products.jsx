import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import OptionBar from '../Components/layout/OptionBar';

const Products = () => {
    const navigate = useNavigate()
    const data = [
        {
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTSsaFnMP3ijw5fUhIo_k9bCQC86i98EAZ8Chmcgz93a-VAj_KJMp6-rcLiRB9DP2DjJsEm6sxBggMdFFvEhK2x_ESAvSLvSJe5UHbMBcWoztWCkShpGFpY",
            price: "₹2,699",
            title: "Urban Blaze: Court Blue Sneakers",
            about: "The Souled Store Originals UBZ :Rift Men Multi-Color Low Top Sneakers At NykaaMan"
        },
        {
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQrDXMlBj52M4QFAd8e4KUKXIFz4roMyDFk9TqQbUwVBbBhE9BbWc6I2bX2kUPMyBjSxuwkJCFS9zZevWD9OEvNnlT3ux-JyLkPo408tVHn56Ialr-baV0z2XM",
            price: "₹1,199",
            title: "Campus Men's OG-21 Sneakers",
            about:
                "Step into the limelight with The OG-21 by Campus! These sleek white & green sneakers exude sophistication and swagger. Tailored for those who celebrate their unique style, Step into the limelight with The OG-21 by Campus! These sleek white & green sneakers exude sophistication and swagger. Tailored for those who celebrate their unique style, they're the epitome of fashion-forwardness.",
        },
        {
            image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSn65rrHiSltRUphU9ZmRRQZ9e2NfJ_87brdf6rvrQoJaSKGOJSdLOdsxngg9ygvFrMLuOFj_uZ0-X0rpLV7sMDr7VA7r-UWHXtCj_KOtwD",
            price: "₹620",
            title: "Asian Mexico-11 Sneakers",
            about: "	ASIAN	Color:Beige	Fastening:Lace up	Insoles:Padded	Model Name:MEXICO-11	Pattern:Colorblocked	Sole Material:PVC	Upper Material:Synthetic	Key Features:Lightweight	Ankle Height:Mid-top	Product Height (cm):10	Product Length (cm):29	Product Width (cm):11",
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRC4AgS1BWrXQuOPtNORRgDpx-NEC1vTWBkE4XO1UqmywHiDkH2WkUkomn6PIgEth1R1zx2E_TditdVGX10HnJ9SP6U0dzOh46J7c8MNlAeWACJzIXS82yDQw",
            price: "₹2,340",
            title: "Puma Men's Court Shatter Low Sneakers",
            about: `Product story: these kicks are all about clean court styling with a modern twist. Featuring a perforated upper for breathability and a low-top design for that classic look, they're perfect for dominating that casual street style. With their sleek silhouette and lacing for a secure fit, these sneakers are a must-have for any sneakerhead looking to up their game.`,
        },
        {
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTpseGf3pPBLa-5g9Tu1Bjil5lPN25mkVjKfOu7Bi8e4o0GTPfQhrIklmM49pt3vt7Jg90HuzjIMpxDkpgWGaAlQGyay98b7dmC8nMkVrgTcXXabZp35tmAEw",
            price: "₹1599",
            title: "U.S. Polo Assn Men. Clarkin 4.0 Colourblocked Sneakers",
            about: `A pair of white shoes, has regular Styling, lace-ups closure PU Upper Cushioned footbed Textured and patterned outsole`,
        },
        {
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250623/0D6o/68593e4a0f920c69cc45ce17/-473Wx593H-701799238-white-MODEL.jpg",
            price: "₹1,224",
            title: `RED TAPE Men Casual Shoes`,
            about: `Care Wipe with a clean, dry cloth when needed Fastening Lace Fastening Warranty Wipe with a clean, dry cloth to remove the dust.`,
        },
        {
            image: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20250324/4Nwb/67e0921955340d4b4f835eb3/-473Wx593H-701369777-black-MODEL2.jpg",
            price: "₹1,206",
            title: "Men Lace-Up Casual Shoes with PU upper",
            about: `Care
                    Wipe with a clean, dry cloth when needed
                    Insole Detail
                    Memory Foam
                    Fastening
                    Lace Fastening
                    Warranty
                    45 Days Warranty Against Manufacturing Defects
                    Upper Material
                    Polyurethane (PU)
                    Package Contains
                    Package contains: 1 pair of shoes
                    Sole Material
                    TPR sole`,
        },
        {
            image: "https://m.media-amazon.com/images/I/810IBzc1OuL._SX695_.jpg",
            price: "₹3,199",
            title: "Nike Air Precision III",
            about: "Performance basketball shoes built for speed, support, and responsive cushioning."
        },
        {
            image: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7cd2135eb917467db0d3ad47008c1c1c_9366/Lite_Racer_3.0_Shoes_Blue_GY3095_01_standard.jpg",
            price: "₹1,499",
            title: "Adidas Lite Racer 3.0",
            about: "Lightweight running-inspired sneakers for daily wear and casual comfort."
        },
        {
            image: "https://m.media-amazon.com/images/I/51nnHEG330L._SY695_.jpg",
            price: "₹2,629",
            title: "Puma Smash v2 L",
            about: "Classic low-profile sneakers with a premium leather finish for sleek street style."
        },
        {
            image: "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020278862_437Wx649H_202311301537151.jpeg",
            price: "₹4,499",
            title: "Reebok Zig Dynamica 2",
            about: "Training sneakers with bold zigzag midsole design providing maximum energy return."
        },

        {
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRd4u3yBptzVBMxZfYOxrqhyZmf5JvtjPMvrCha9j2Kjp1XlW9OnffOKNBtR7PTTYVswx_y-UC4gfV3fbGWlv6tVWyFhjqu0lyli1L6cS4A5ZoTauM5FCI4tA&usqp=CAc",
            price: "₹2,066",
            title: "Court Gamer Sneakers For Men  (White , 9)",
            about: `Brand: PUMA
                    Brand: Color White-Black-Dark Myrtle
                    Color
                    White
                    Outer material
                    Synthetic
                    Model name
                    Court Gamer
                    Ideal for
                    Men
                    Occasion
                    Casual
                    Type For Casual
                    Sneakers`,
        }

    ]

    const [wished, setWished] = useState(Array(data.length).fill(false));

    const toggleWish = (index) => {
        const newWished = [...wished];
        newWished[index] = !newWished[index];
        setWished(newWished);
    }


    return (
        <div className='pt-10' >
            <div className=' relative w-full flex justify-center overflow-y-auto scrollbar-hide ' >

               


                {/* Entire Screen */}
                <div className='grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-6 p-4 mt-10 '>
                    {data.map((item, index) => (


                        // hover:bg-gradient-to-r from-amber-100 to-amber-500 gradient-animated 
                        <div>
                            <div className='p-[6px] rounded-3xl transform transition-all hover:scale-105 duration-160 shadow-xl gradient-rotate bg-amber-200 '>
                                <div key={index} className=' w-90 h-130 p-2 rounded-3xl flex flex-col duration-150 cursor-pointer bg-amber-200 '>

                                    {/* Item Image */}
                                    <div className='flex items-center justify-center overflow-hidden h-[70%] p-2 ' onClick={() => navigate(`/products/${index}`)}>
                                        <img className='pt-8 h-100 object-contain' src={item.image} alt="image" />
                                    </div>

                                    <div className='p-2 h-25 relative '>



                                        {/* Wishlist Button (always visible now) */}

                                        <div className="absolute bottom-28 right-6">
                                            <div className="flex justify-center items-center bg-amber-300/90 w-10 h-10 rounded-full transition-all transform hover:scale-110 cursor-pointer shadow-lg " onClick={() => toggleWish(index)}  >

                                                {/* SVG heart icon */}
                                                {!wished[index] ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 text-amber-600">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 text-amber-700 ">
                                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                                    </svg>
                                                )}

                                            </div>
                                        </div>

                                        {/* Itrem Price */}
                                        <div className='flex gap-5'>
                                            <div className='text-4xl text-amber-600'>
                                                <h1>{item.price}</h1>
                                            </div>

                                            <div className='flex-2 flex justify-center gap-2 '>

                                                {/* Buy Button */}

                                                <button className=' w-20 hover:w-30 border-amber-500 rounded-xl text-amber-700 border-2 p-2 font-bold hover:bg-amber-100 duration-200 shadow-md '>buy</button>


                                                {/* Cart Button */}

                                                <div className='flex flex-row justify-center gap-3 items-center w-20 hover:w-30 border-amber-500 rounded-xl text-amber-700 border-2 p-2 font-bold hover:bg-amber-100 duration-200 shadow-md relative overflow-hidden group '>
                                                    {/* Cart icon */}
                                                    <div className=''>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                                        </svg>
                                                    </div>
                                                    {/* Cart Confirm icon */}
                                                    <div id="badge" className='size-6 rounded-full absolute left-20 top-1.2 flex items-center justify-center transition-all duration-300 group-hover:left-20'>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                        </svg> */}
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                                        </svg>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {/* Item Name */}
                                            <div className='text-[18px] font-semibold h-7 bg-amber-00 overflow-hidden'>
                                                <h1>
                                                    {item.title}
                                                </h1>
                                            </div>
                                            {/* Item Details */}
                                            <div className='text-[14px] overflow-y-auto h-16 scrollbar-hide'>
                                                <p>
                                                    {item.about}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Products
