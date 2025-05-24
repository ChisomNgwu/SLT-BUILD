    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    }

    export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
    }

    export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://dummyjson.com/',
        prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        return headers;
        },
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsResponse, number>({
        query: (limit = 10) => `products?limit=${limit}&skip=0`,
        transformResponse: (response: ProductsResponse) => response,
        }),
    }),
    });

    export const { useGetProductsQuery } = productsApi;