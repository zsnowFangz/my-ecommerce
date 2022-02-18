import React from "react";

import productData from "../assets/fake-data/products";

import Helmet from "../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);
  
  const relatedProducts = productData.getProducts(8);

  return (
    <Helmet >
      <Section title={product.title}>
        <SectionBody>title={product.title}</SectionBody>
      </Section>
      <Section>
        <SectionTitle>More</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
