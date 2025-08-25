import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    return (
        <div>
            <div className=' w-full flex justify-center overflow-y-auto scrollbar-hide '  >
                {/* style={{ height: 'calc(100vh - 2.5rem - 3rem)' }} */}
                {/* Entire Screen */}
                <div className='grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8 p-4 mt-10 '>
                    {data.map((item, index) => (
                        <div key={index} onClick={()=>navigate(`/products`)} className='w-90 h-130 border flex flex-col cursor-pointer hover:bg-gray-200 duration-200 shadow-xl'>

                            {/* Item Image */}

                            <div className='flex items-center justify-center overflow-hidden h-[70%] p-2 '>
                                <img className='pt-8 h-100 object-contain' src={item.image} alt="image" />
                            </div>

                            <div className='p-2 h-25'>
                                {/* Itrem Price */}
                                <div className='text-4xl'>
                                    <h1>{item.price}</h1>
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
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Products
