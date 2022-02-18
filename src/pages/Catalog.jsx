import React, { useState, useCallback, useEffect, useRef } from "react";

import Helmet from "../components/Helmet";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import InfinityList from "../components/InfinityList";


import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import colors from "../assets/fake-data/product-color";
import size from "../assets/fake-data/product-size";

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;

        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((e) => e !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;

        default:
      }
    }
  };

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color.includes(color));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }

    setProducts(temp);
  }, [filter, setProducts]);
  useEffect(() => {
    updateProducts();
  }, [updateProducts]);
  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle('active')

  const clearFilter = () => setFilter(initFilter);
  
  return (
    <Helmet title="Product">
      {console.log(filter)}
      <div className="catalog">
        <div className="catalog__filter" ref={filterRef}>
          <div className="catalog__filter__close" onClick={() => showHideFilter()}><i className="bx bx-left-arrow-alt"></i></div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__tittle">category</div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => (
                <p
                  className="catalog__filter__widget__content__item"
                  key={index}
                >
                  <Checkbox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.categorySlug)}
                  />
                </p>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__tittle">Colors</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => (
                <p
                  className="catalog__filter__widget__content__item"
                  key={index}
                >
                  <Checkbox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.color.includes(item.color)}
                  />
                </p>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__tittle">Size</div>
            <div className="catalog__filter__widget__content">
              {size.map((item, index) => (
                <p
                  className="catalog__filter__widget__content__item"
                  key={index}
                >
                  <Checkbox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}

                  />
                </p>
              ))}
            </div>
          </div>
          <div className="catalog__filter__widget">
            <Button size="sm" onClick={clearFilter}>
              Clear
            </Button>
          </div>
        </div>
        <div className="catalog__filter__toggle"><Button size="sm" onClick={() => showHideFilter()}>Filter</Button></div>
        <div className="catalog__content">
          <InfinityList data={products}/>
         
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
