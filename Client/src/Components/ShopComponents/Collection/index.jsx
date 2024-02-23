
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slider } from "antd";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import useFetch from "../../../hooks/useFetch";
import './index.scss';


function Products() {
    const {
        user,
        setUser,
        AddBasket,
        Logout,
        AddToWishlist,
        isInWishlist,
    } = useUser()
    function HandleAddtoWish(item) {
        AddToWishlist(item)
            }
            function HandleAddtoBasket(item) {
                AddBasket(item)
            }
    const [data, setData, fetchData] = useFetch([]);
    const [sortOption, setSortOption] = useState('featured'); // Default sorting option
    const [columns, setColumns] = useState(3);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedColor, setSelectedColor] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);

    const [isSizeOpen, setIsSizeOpen] = useState(false);
    const [isBrandOpen, setIsBrandOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const itemsPerPage = 10;
    const [priceRange, setPriceRange] = useState([460, 971]);

    const handlePriceChange = (value) => {
        setPriceRange(value);
        if (value[0] < priceRange[0] || value[1] > priceRange[1]) {
            fetchData();
        } else {
            const filtered = data.filter(
                (item) => item.price >= value[0] && item.price <= value[1]
            );
            setData([...filtered]);
            setCurrentPage(1);
        }
    };

   
    
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        switch (e.target.value) {
            case 'a-z':
                handleAtoZ();
                break;
            case 'z-a':
                handleZtoA();
                break;
            case 'pricelow':
                handlePriceLow();
                break;
            case 'pricehigh':
                handlePriceHigh();
                break;
                case 'createdAtnew':
                    handlecreatedAtLow(); // Change to handlecreatedAtLow
                    break;
                case 'createdAtold':
                    handlecreatedAtHigh(); // Change to handlecreatedAtHigh
                    break;

                
            // Diğer sıralama seçenekleri için case'leri ekleyin
            default:
                break;
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategories, selectedColor, selectedSize]);

    // const handleAtoZ = (e) => {
    //     e.preventDefault();
    //     const sortByCategory = [...data].sort((a, b) => a.name.localeCompare(b.name));
    //     setData([...sortByCategory]);
    // };

    // const handleZtoA = (e) => {
    //     e.preventDefault();
    //     const sortByCategory = [...data].sort((a, b) => b.name.localeCompare(a.name));
    //     setData([...sortByCategory]);
    // };
    const handlePriceLow = () => {
        const sortByPriceLow = [...data].sort((a, b) => a.price - b.price);
        setData([...sortByPriceLow]);
    };

    const handlePriceHigh = () => {
        const sortByPriceHigh = [...data].sort((a, b) => b.price - a.price);
        setData([...sortByPriceHigh]);
    };

    const handlecreatedAtLow = () => {
        const sortBycreatedAtLow = [...data].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        setData([...sortBycreatedAtLow]);
    };
    
    const handlecreatedAtHigh = () => {
        const sortBycreatedAtHigh = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setData([...sortBycreatedAtHigh]);
    };

    const handleAtoZ = () => {
        const sortByCategory = [...data].sort((a, b) => a.title.localeCompare(b.title));
        setData([...sortByCategory]);
    };

    const handleZtoA = () => {
        const sortByCategory = [...data].sort((a, b) => b.title.localeCompare(a.title));
        setData([...sortByCategory]);
    };
    const sortByTwo = () => {
        setColumns(2);
    };

    const sortByThree = () => {
        setColumns(3);
    };

    const sortByFour = () => {
        setColumns(4);
    };

    const applyCategoryFilter = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    const applyColorFilter = (color) => {
        if (selectedColor.includes(color)) {
            setSelectedColor(selectedColor.filter((co) => co !== color));
        } else {
            setSelectedColor([...selectedColor, color]);
        }
    };

    const applySizeFilter = (size) => {
        if (selectedSize.includes(size)) {
            setSelectedSize(selectedSize.filter((s) => s !== size));
        } else {
            setSelectedSize([...selectedSize, size]);
        }
    };

    const applyBrandFilter = (brand) => {
        if (selectedBrand.includes(brand)) {
            setSelectedBrand(selectedBrand.filter((b) => b !== brand));
        } else {
            setSelectedBrand([...selectedBrand, brand]);
        }
    };

    const clearAllFilters = () => {
        setSelectedCategories([]);
        setSelectedColor([]);
        setSelectedSize([]);
        setSelectedBrand([]);
        setPriceRange([]);
        setPriceRange([460, 971]);
        fetchData();
    };

    const filteredData = data.filter(
        (item) =>
            (selectedCategories.length === 0 ||
                selectedCategories.includes(item.category)) &&
            (selectedColor.length === 0 || selectedColor.includes(item.color)) &&
            (selectedSize.length === 0 || selectedSize.includes(item.size)) &&
            (selectedBrand.length === 0 || selectedBrand.includes(item.by))





    );

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };




    
    const paginationButtons = Array.from({ length: pageNumbers }, (_, index) => (
        <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
        >
            {index + 1}
        </button>
    ));

    return (
       

            
        <div className="bigcontainer">
            <div className="filterspart">
                <div className="filter">
                    <p>Filters</p>
                    <span onClick={clearAllFilters}></span>
                </div>
                <div className="category">
                    <h2 onClick={() => setIsCategoryOpen(!isCategoryOpen)}>Category <FontAwesomeIcon icon={faChevronDown} /></h2>
                    {isCategoryOpen && (
                        <>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Top"
                                        checked={selectedCategories.includes("Top")}
                                        onChange={() => applyCategoryFilter("Top")}
                                    />
                                    Top
                                </div>
                                <span>3</span>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Latest"
                                        checked={selectedCategories.includes("Latest")}
                                        onChange={() => applyCategoryFilter("Latest")}
                                    />
                                    Latest
                                </div>
                                <span>6</span>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Best"
                                        checked={selectedCategories.includes("Best")}
                                        onChange={() => applyCategoryFilter("Best")}
                                    />
                                    Best
                                </div>
                                <span>5</span>
                            </label>

                        </>
                    )}
                </div>






                <div className="sizes">
                    <h2 onClick={() => setIsSizeOpen(!isSizeOpen)}>Size <FontAwesomeIcon icon={faChevronDown} /></h2>
                    {isSizeOpen && (
                        <>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Small"
                                        checked={selectedSize.includes("Small")}
                                        onChange={() => applySizeFilter("Small")}
                                    />
                                    Small
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Medium"
                                        checked={selectedSize.includes("Medium")}
                                        onChange={() => applySizeFilter("Medium")}
                                    />
                                    Medium
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Big"
                                        checked={selectedSize.includes("Big")}
                                        onChange={() => applySizeFilter("Big")}
                                    />
                                    Big
                                </div>
                            </label>

                        </>
                    )}
                </div>


                <div className="brand">
                    <h2 onClick={() => setIsBrandOpen(!isBrandOpen)}>Brand <FontAwesomeIcon icon={faChevronDown} /></h2>
                    {isBrandOpen && (
                        <>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Nordic"
                                        checked={selectedBrand.includes("Nordic")}
                                        onChange={() => applyBrandFilter("Nordic")}
                                    />
                                    Nordic
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Tingua"
                                        checked={selectedBrand.includes("Tingua")}
                                        onChange={() => applyBrandFilter("Tingua")}
                                    />
                                    Tingua
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Psampa"
                                        checked={selectedBrand.includes("Psampa")}
                                        onChange={() => applyBrandFilter("Psampa")}
                                    />
                                    Psampa
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Dimmable"
                                        checked={selectedBrand.includes("Dimmable")}
                                        onChange={() => applyBrandFilter("Dimmable")}
                                    />
                                    Dimmable
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Florence"
                                        checked={selectedBrand.includes("Florence")}
                                        onChange={() => applyBrandFilter("Florence")}
                                    />
                                    Florence
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Loretta"
                                        checked={selectedBrand.includes("Loretta")}
                                        onChange={() => applyBrandFilter("Loretta")}
                                    />
                                    Loretta
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value=" Noam"
                                        checked={selectedBrand.includes(" Noam")}
                                        onChange={() => applyBrandFilter(" Noam")}
                                    />
                                    Noam
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Fruugo"
                                        checked={selectedBrand.includes("Fruugo")}
                                        onChange={() => applyBrandFilter("Fruugo")}
                                    />
                                    Fruugo
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Yiano"
                                        checked={selectedBrand.includes(" Yiano")}
                                        onChange={() => applyBrandFilter(" Yiano")}
                                    />
                                    Yiano
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Ruffle"
                                        checked={selectedBrand.includes("Ruffle")}
                                        onChange={() => applyBrandFilter("Ruffle")}
                                    />
                                    Ruffle
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Kirsten"
                                        checked={selectedBrand.includes("Kirsten")}
                                        onChange={() => applyBrandFilter("Kirsten")}
                                    />
                                    Kirsten
                                </div>
                            </label>
                            <label>
                                <div>
                                    <input
                                        type="checkbox"
                                        value="Deluxe"
                                        checked={selectedBrand.includes("Deluxe")}
                                        onChange={() => applyBrandFilter("Deluxe")}
                                    />
                                    Deluxe
                                </div>
                            </label>
                        </>
                    )}
                </div>


                <h2 onClick={() => setIsPriceOpen(!isPriceOpen)}>Price <FontAwesomeIcon icon={faChevronDown} /></h2>
                {isPriceOpen && (
                    <>
                        <Slider
                            range={{
                                draggableTrack: true,


                            }}
                            value={priceRange}
                            min={460}
                            max={971}
                            onChange={handlePriceChange}
                        />

                    </>
                )}

            </div>
            <div className="shopside">
                <div className="sort">
                    <div className="sortleft">
                        <p>Showing <span>{filteredData.length} of 12</span> Products</p>
                    </div>
                    <div className="sortright">
                        {/* <p>Sort by:</p> */}
                        <div className="toolbox_right">
                            <div className="toolbox_sort">

                                <div className="select-custom">
                                    <select name="sortby" id="sortby" value={sortOption} onChange={handleSortChange} className='sort_control'>
                                       
                                        <option value="a-z">Alphabetically,A-Z</option>
                                        <option value="z-a">Alphabetically,Z-A</option>
                                        <option value="pricelow">Price,low to high</option>
                                        <option value="pricehigh">Price,high to low</option>
                                        <option value="createdAtnew">Date, old to new</option>
                                        <option value="createdAtold">Date, new to old</option>
                                    </select>
                                    <ul>
                                        {data.map((item) => (
                                            <li key={item._id}>{item.name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button onClick={sortByTwo}>
                            <svg width="10" height="10">
                                <rect x="0" y="0" width="4" height="4"></rect>
                                <rect x="6" y="0" width="4" height="4"></rect>
                                <rect x="0" y="6" width="4" height="4"></rect>
                                <rect x="6" y="6" width="4" height="4"></rect>
                            </svg>
                        </button>
                        <button onClick={sortByThree}>
                            <svg width="16" height="10">
                                <rect x="0" y="0" width="4" height="4"></rect>
                                <rect x="6" y="0" width="4" height="4"></rect>
                                <rect x="12" y="0" width="4" height="4"></rect>
                                <rect x="0" y="6" width="4" height="4"></rect>
                                <rect x="6" y="6" width="4" height="4"></rect>
                                <rect x="12" y="6" width="4" height="4"></rect>
                            </svg>
                        </button>
                        <button onClick={sortByFour}>
                            <svg width="22" height="10">
                                <rect x="0" y="0" width="4" height="4"></rect>
                                <rect x="6" y="0" width="4" height="4"></rect>
                                <rect x="12" y="0" width="4" height="4"></rect>
                                <rect x="18" y="0" width="4" height="4"></rect>
                                <rect x="0" y="6" width="4" height="4"></rect>
                                <rect x="6" y="6" width="4" height="4"></rect>
                                <rect x="12" y="6" width="4" height="4"></rect>
                                <rect x="18" y="6" width="4" height="4"></rect>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className="products"
                    style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
                >
                    {currentItems.map((item) => (
                        <ul key={item.id}>
                            <div className="cardimgs">
                                <img src={item.image} alt="" />
                                <div className="righticons">
                                    <div className="circle" onClick={()=>HandleAddtoWish(item)}><IoMdHeart /></div>
                                   <Link to={`/product/${item._id}`}> <div className="circle"><FaEye /></div></Link>
                                    
                                </div>
                                <div className="addtocart">
                                    <p onClick={()=>HandleAddtoBasket(item)}>Add To Cart</p>
                                </div>
                            </div>
                            <li className='title'>{item.title}</li>
                            {/* <li>{item.category}</li> */}
                            
                            <li className='bytitle'>{item.by}</li>
                            {/* <li>{item.formtyp}</li> */}
                            <li className='byprice'>${item.price}</li>
                        </ul>
                    ))}
                </div>
                <div className="pagination">{paginationButtons}</div>
            </div>
        </div>
    );
}

export default Products;
