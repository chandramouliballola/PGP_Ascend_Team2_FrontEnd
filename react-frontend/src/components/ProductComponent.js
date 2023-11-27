import React, { useState, useEffect } from 'react'
// import EmployeeService from '../services/EmployeeService';
// import CategoriesAllService from '../services/CategoriesAllService';
import ProductsService from '../services/ProductsService';

function ProductComponent() {

    const [products, setProducts] = useState([])
    const [categoriesAll, setCategoriesAll] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        getCategoriesAll()
    }, [])


    const getProducts = () => {

        ProductsService.getProducts().then((response) => {
            setProducts(response.data)
            // console.log(response.data);
        });
    };

    const getCategoriesAll = () => {

        ProductsService.getCategoriesAll().then((response) => {
            setCategoriesAll(response.data)
            // console.log(response.data);
        });
    };

    const getProductsForSelectedCategory = (event) => {

        if (event.target.value == 'select') {
            ProductsService.getProducts().then((response) => {
                setProducts(response.data)
                // console.log(response.data);
            });
        }
        else {
            ProductsService.getProductsForSelectedCategory(event.target.value).then((response) => {
                // setProductsForSelectedCategory(event.target.value)
                // alert(event.target.value)
                setProducts(response.data)
                // console.log(response.data);
            });
        }
    };

    return (
        <div className="container">
            <h1 className="text-center"> Wal-E-Cart</h1>
            <label>Select category: </label>
            <div>
                <select id='categorySelect' onChange={getProductsForSelectedCategory}>
                    <option value='select'>-- Select --</option>
                    {
                        categoriesAll.map(
                            categoryEach =>
                                <option value={categoryEach.category}>{categoryEach.category}</option>
                        )
                    }
                </select>

                <input type='text' id='searchBarInput' />
                <button id='searchButton'>Search</button>

            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> ID</th>
                        <th> Title</th>
                        <th> Image </th>
                        <th> Availability Status</th>
                        <th> Model</th>
                        <th> Brand</th>
                        <th> Specifications</th>
                        <th> Rating</th>
                        <th> Number of Reviews</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        products.map(
                            product =>
                                <tr>
                                    <td> {product.id} </td>
                                    <td> {product.title}</td>
                                    <td> <img src={product.iconUrl} /></td>
                                    <td> {product.inventryStatus}</td>
                                    <td> {product.model}</td>
                                    <td> {product.brand}</td>
                                    <td> {product.specification}</td>
                                    <td> {product.ratings.averageRatings}</td>
                                    <td> {product.ratings.numberOfReviews}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductComponent
