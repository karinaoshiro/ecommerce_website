import React from 'react';
import Productdetail from './productdetails'; // Importa o array de produtos
import { FiShoppingCart } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './product.css';

const Product = ({ product = [], setProduct, detail = [] }) => {
    const filtterproduct = (category) => {
        const update = Productdetail.filter((x) => x.Cat === category);
        setProduct(update);
    };

    const AllProducts = () => {
        setProduct(Productdetail);
    };

    return (
        <>
            <div className='product_detail'>
                <div className='container'>
                    {
                        detail.length > 0 && detail.map((curElm) => (
                            <div className='productbox' key={curElm.id}>
                                <div className='img-box'>
                                    <img src={curElm.Img} alt={curElm.Title} />
                                </div>
                                <div className='detail'>
                                    <h4>{curElm.Cat}</h4>
                                    <h2>{curElm.Title}</h2>
                                    <p>A screen everyone will love</p>
                                    <h3>{curElm.Price}</h3>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='products'>
                <h2># Products</h2>
                <p>Home . products</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>Categories</h3>
                            <ul>
                                <li onClick={AllProducts}>All Products</li>
                                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                                <li onClick={() => filtterproduct("Mouse")}>Mouse</li>
                                <li onClick={() => filtterproduct("SmartWatch")}>SmartWatch</li>
                                <li onClick={() => filtterproduct("HeadPhone")}>HeadPhone</li>
                                <li onClick={() => filtterproduct("iPhone")}>iPhone 15</li>
                                <li onClick={() => filtterproduct("CPU")}>CPU</li>
                            </ul>
                        </div>
                    </div>
                    <div className='productbox'>
                        <div className='contant'>
                            {
                                product.length > 0 && product.map((curElm) => (
                                    <div className='box' key={curElm.id}>
                                        <div className='img_box'>
                                            <img src={curElm.Img} alt={curElm.Title} />
                                            <div className='icon'>
                                                <li><FiShoppingCart /></li>
                                                <li><FaRegEye /></li>
                                                <li><CiHeart /></li>
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Title}</h3>
                                            <p>{curElm.Cat}</p>
                                            <h4>{curElm.Price}</h4>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
