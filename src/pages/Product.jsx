import React, { useEffect } from "react";

import productData from "../assets/fake-data/products";

import Helmet from "../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import { useParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

const Product = (props) => {
  // const product = productData.getProductBySlug(props.match.params.slug);
  const params = useParams();
  const product = productData.getProductBySlug(params.slug);
  const relatedProducts = productData.getProducts(8);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product}/>
        </SectionBody>
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
