import React from 'react'

const Main = () => {
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
            image: "",
            price: "",
            title: "",
            about: "",
        },
        {
            image: "",
            price: "",
            title: "",
            about: "",
        },
        {
            image: "",
            price: "",
            title: "",
            about: "",
        },
        {
            image: "",
            price: "",
            title: "",
            about: "",
        },
        {
            image: "",
            price: "",
            title: "",
            about: "",
        }

    ]
    return (
        <div>
            <div className=' w-full flex justify-center overflow-y-auto scrollbar-hide' style={{ height: 'calc(100vh - 2.5rem - 3rem)' }}>
                {/* Entire Screen */}
                <div className='grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-8 p-4'>
                    {data.map((item, index) => (
                        <div key={index} className='w-90 h-130 border flex flex-col'>

                            <div className='flex items-center justify-center overflow-hidden h-[70%] p-2'>
                                <img className='pt-8 h-100 object-contain' src={item.image} alt="image" />
                            </div>

                            <div className='p-2 h-25'>
                                <div className='text-4xl'>
                                    <h1>{item.price}</h1>
                                </div>
                                <div>
                                    <div className='text-[18px] font-semibold h-7 bg-amber-300 overflow-hidden'>
                                        <h1>
                                            {item.title}
                                        </h1>
                                    </div>

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

export default Main
