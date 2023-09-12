'use client';

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";


export const useAllProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {        
            const response = await axios.get('https://dummyjson.com/products?limit=0')
            setProducts(response.data.products)
        } catch (error) {
            alert('INERNET ANDA LAMBAT MOHON REFRESH BROWSER')
        }
    }
    

    useEffect(() => {
        getProducts();
    }, [])

    return {
        data: products
    }
}

export const useAllProductsPage = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {        
            const response = await axios.get('https://dummyjson.com/products?skip=60')
            setProducts(response.data.products)
        } catch (error) {
            alert('INERNET ANDA LAMBAT MOHON REFRESH BROWSER')
        }
    }
    

    useEffect(() => {
        getProducts();
    }, [])

    return {
        data: products
    }
}

export const useDataRecomendations = () => {
    const [recomeds, setRecomends] = useState([]);

    const getRecomedatios = async () => {
        try {        
            const response = await axios.get('https://dummyjson.com/products?limit=18')
            setRecomends(response.data.products)
        } catch (error) {
            alert('INERNET ANDA LAMBAT MOHON REFRESH BROWSER')
        }
    }
    

    useEffect(() => {
        getRecomedatios();
    }, [])

    return {
        data: recomeds
    }
}

export const useAllProductById = () => {
    const [product, setProduct] = useState([]);
    const paramsProduct = useParams();
    const params = paramsProduct.id

    const getProduct = async () => {
        try {        
            const response = await axios.get(`https://dummyjson.com/products/${params}`)
            setProduct(response.data)
        } catch (error) {
            alert('INERNET ANDA LAMBAT MOHON REFRESH BROWSER')
        }
    }
    
    useEffect(() => {
        getProduct();
    }, [])

    return {
        data: product
    }
}

export const useAllCategories = () => {
    const [categories, setCategories] = useState([]);
    const paramsCategory = useParams();
    const params = paramsCategory.page;    

    const getCategories = async () => {
        const response = await axios.get(`https://dummyjson.com/products/category/${params}`)
        setCategories(response.data.products)
    }

    useEffect(() => {
        getCategories();
    }, [])

    return{
        data: categories
    }
}

export const useAllCategoryList = () => {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
        const response = await axios.get(`https://dummyjson.com/products/categories`)
        setCategories(response.data)
    }

    useEffect(() => {
        getCategories();
    }, [])

    return{
        data: categories
    }
}
