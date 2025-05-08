package com.ecommerce.sapDetails.service;

import com.ecommerce.sapDetails.entity.Product;

import java.util.List;
import java.util.UUID;

public interface ProductService {

    List<Product> getAllProducts(String searchTerm);
    Product getProductById(UUID id);

}

