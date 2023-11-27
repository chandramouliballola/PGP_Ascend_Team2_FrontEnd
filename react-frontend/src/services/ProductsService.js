import axios from 'axios';

const ALL_CATEGORIES_API_BASE_URL = 'http://localhost:8080/products/categorylist';
const PRODUCT_FOR_SELECTED_CATEGORY_API_BASE_URL = 'http://localhost:8080/products/category/';
const All_PRODUCTS_API_BASE_URL = 'http://localhost:8080/products/allProducts';

class ProductsService {

    getCategoriesAll() {
        return axios.get(ALL_CATEGORIES_API_BASE_URL);
    }

    getProducts() {
        return axios.get(All_PRODUCTS_API_BASE_URL);
    }

    getProductsForSelectedCategory(selectedCategory) {
        return axios.get(PRODUCT_FOR_SELECTED_CATEGORY_API_BASE_URL + selectedCategory);
    }
}

export default new ProductsService();