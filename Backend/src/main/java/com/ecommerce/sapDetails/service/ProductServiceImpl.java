package com.ecommerce.sapDetails.service;

import com.ecommerce.sapDetails.entity.Product;
import com.ecommerce.sapDetails.exception.ProductNotFoundException;
import com.ecommerce.sapDetails.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts(String searchTerm) {
        if (searchTerm != null && !searchTerm.trim().isEmpty()) {
            return productRepository.findByNameContainingIgnoreCaseOrBrandContainingIgnoreCase(searchTerm, searchTerm);
        }
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(UUID id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
    }
}
