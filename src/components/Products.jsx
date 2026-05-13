import { Link } from "react-router-dom";
import Button from "./PrimaryBtn";

export default function Products() {

    const products = [
        {
            name: "GHK-Cu",
            img: "assets/ghk-1.png",
            link: "/ghk-cu",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "SS-31",
            img: "assets/ss-1.png",
            link: "/ss-31",
            desc: "Mitochondrial support peptide",
        },
        {
            name: "TB-500",
            img: "assets/tb-1.png",
            link: "/tb-500",
            desc: "Recovery & repair peptide",
        },
        {
            name: "Tesamorelin",
            img: "assets/tes-1.png",
            link: "/tesamorelin",
            desc: "Metabolism support peptide",
        },
        {
            name: "SLU-PP-322",
            img: "assets/slu-1.png",
            link: "/slu-pp-322",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Ipamorelin",
            img: "assets/ipa-1.png",
            link: "/ipamorelin",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Thymulin",
            img: "assets/thy-1.png",
            link: "/thymulin",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Kisspetin",
            img: "assets/kis-1.png",
            link: "/kisspetin",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Retatrutide",
            img: "assets/ret-1.png",
            link: "/retatrutide",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Semaglutide",
            img: "assets/sem-1.png",
            link: "/semaglutide",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Tirzepatide",
            img: "assets/tir-1.png",
            link: "/tirzepatide",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "5-AMINO-1MQ",
            img: "assets/ami-1.png",
            link: "/5-amino-1mq",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Melanotan",
            img: "assets/mel-1.png",
            link: "/melanotan",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "MOTS-c",
            img: "assets/mot-1.png",
            link: "/mots-c",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "PT141",
            img: "assets/pt-1.png",
            link: "/pt-141",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "KPV",
            img: "assets/kp-1.png",
            link: "/kpv",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Nad+",
            img: "assets/nad-1.png",
            link: "/nad+",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "CIC-1295",
            img: "assets/cic-1.png",
            link: "/cic-1295",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Epithalon",
            img: "assets/epi-1.png",
            link: "/epithalon",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "AOD-9604",
            img: "assets/aod-1.png",
            link: "/aod-9604",
            desc: "Skin & recovery support peptide",
        },
        {
            name: "Bac.water",
            img: "assets/bac-1.png",
            link: "/bac-water",
            desc: "Skin & recovery support peptide",
        },
    ];

    return (
        <section className="py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="heading">
                        Our Products
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Explore premium peptide products
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {products.map((product, index) => (
                        <Link
                            to={product.link}
                            key={index}
                            className="group bg-white border border-gray-200 p-2 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Product Image */}
                            <div className="overflow-hidden bg-gray-100">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className=" rounded-md object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Product Content */}
                            <div className="p-4 flex flex-col items-center text-center">

                                <h3 className="text-lg md:text-xl font-semibold mb-4">
                                    {product.name}
                                </h3>

                                {/* <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                                    {product.desc}
                                </p> */}

                                <button className="bg-(--primary-color) hover:bg-(--secondary-color) py-2 px-4.5 transition duration-300 cursor-pointer text-white rounded-full">
                                    View Product
                                </button>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    );
}