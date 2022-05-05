import { goods } from './goods.js';
const filter = (param, value) => goods.filter(good => good[param] === value);
/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => filter("brand", brand);

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => filter("color", color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => filter("model", model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => filter("memory", memory);

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => filter("price", price);

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => filter("country", country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => filter("os", os);

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => goods.filter(good => good.price >= from && good.price <= to);

const minPriceReducer = () => goods.reduce((minPrice, good)=> good.price < minPrice ? good.price : minPrice, goods[0].price);

const maxPriceReducer = () => goods.reduce((minPrice, good)=> good.price > minPrice ? good.price : minPrice, goods[0].price);

const toMaxSorter = () => goods.sort((a, b) => b.price - a.price);
const toMinSorter = () => goods.sort((a, b) => a.price - b.price);

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
