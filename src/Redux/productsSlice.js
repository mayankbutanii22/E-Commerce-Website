import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, title: "Apple iPhone 15", price: 1200, category: "Trending Products", image: "https://m.media-amazon.com/images/I/61eYPkT2zZL._SL1500_.jpg" },
    { id: 2, title: "Samsung Galaxy S23", price: 999, category: "Trending Products", image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/302149_gcbqab.png?tr=w-640" },
    { id: 3, title: "Sony WH-1000XM5", price: 349, category: "Trending Products", image: "https://m.media-amazon.com/images/I/71uBLsZVFhL._SX522_.jpg" },
    { id: 4, title: "MacBook Pro 16", price: 2499, category: "Trending Products", image: "https://i.rtings.com/assets/products/achdBcky/apple-macbook-pro-16-m3-2023/design-medium.jpg?format=auto" },
    { id: 5, title: "Nike Air Max", price: 150, category: "Trending Products", image: "https://images.vegnonveg.com/resized/1360X1600/8772/air-force-1-07-blackwhite-black_1-63bbfb21984a4.jpg?format=webp" },
    { id: 6, title: "Apple Watch Series 9", price: 499, category: "Trending Products", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQv-mE1hdZNoiE9C8GfpyQSvctQBhA4mkXjrWv9Fycer-iNTO5SEgvN0yUOmsaW1EnCxdjYKN8uOreXcVsInSVdlkTa5MDFHXjvvgM4Bct9gK3Wb5bnZrZaGxxJ&usqp=CAc" },
    { id: 7, title: "Canon EOS R6", price: 1999, category: "Trending Products", image: "https://m.media-amazon.com/images/I/81LskAU5h1L._SX679_.jpg" },

    // New Arrivals
    { id: 8, title: "Adidas Ultraboost 23", price: 180, category: "New Arrivals", image: "https://m.media-amazon.com/images/I/71eUwDk8z+L._UY695_.jpg" },
    { id: 9, title: "Dell XPS 13", price: 1399, category: "New Arrivals", image: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SX679_.jpg" },
    { id: 10, title: "Google Pixel 8", price: 899, category: "New Arrivals", image: "https://m.media-amazon.com/images/I/31O28uawz+L._SY300_SX300_QL70_FMwebp_.jpg" },
    { id: 11, title: "Bose QuietComfort 45", price: 329, category: "New Arrivals", image: "https://m.media-amazon.com/images/I/51ZR4lyxBHL._SX522_.jpg" },
    { id: 12, title: "Logitech MX Master 3S", price: 120, category: "New Arrivals", image: "https://m.media-amazon.com/images/I/61ni3t1ryQL._SX679_.jpg" },
    { id: 13, title: "Samsung Galaxy Tab S9", price: 999, category: "New Arrivals", image: "https://m.media-amazon.com/images/I/61GykpLxnxL._SX522_.jpg" },
    { id: 14, title: "PlayStation 5 Slim", price: 499, category: "New Arrivals", image: "https://m.media-amazon.com/images/I/51eOztNdCkL._SX679_.jpg" },
    { id: 15, title: "Xbox Series X", price: 499, category: "New Arrivals", image: "https://m.media-amazon.com/images/I/71NBQ2a52CL._SX679_.jpg" },

    // Featured Products
    { id: 16, title: "HP Spectre x360", price: 1499, category: "Featured Products", image: "https://m.media-amazon.com/images/I/71cQWYVtcBL._SX679_.jpg" },
    { id: 17, title: "Lenovo Yoga 9i", price: 1399, category: "Featured Products", image: "https://p1-ofp.static.pub//fes/cms/2025/08/29/qwhqlutehhykejtbgqn4kv5lvaikyx943141.png" },
    { id: 18, title: "Asus ROG Zephyrus G14", price: 1799, category: "Featured Products", image: "https://in.store.asus.com/media/catalog/product/g/a/ga403um-qs007ws_main_.png?quality=80&bg-color=255,255,255&fit=bounds&height=800&width=800&canvas=800:800" },
    { id: 19, title: "Microsoft Surface Pro 9", price: 1299, category: "Featured Products", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJUx9V0BvIepbp13FmuVxZNpRvHT4OQf7UH1KqCAZDuimPgL4Hkm4ZoycdAAXK-kJVU9EGox4MaTbigCfkInJl8Kw00nv4H2l17dtbXeJp0QeS_GNMSIhUqDP2CZTshPaJZjTNLg&usqp=CAc" },
    { id: 20, title: "DJI Mavic 3", price: 2199, category: "Featured Products", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjSXxeMLd74r_lYuv5CCvtc5LHur5T37HQmtdzK3RdQyUJk93OZykjDUyQL-CC_bucgHI0HuztLwegUp6C8xeO8wVNRXEyNbACMGtCl02ufGA88CQxvWd5BdbLFcf9X-s_&usqp=CAc" },
    { id: 21, title: "GoPro Hero 12", price: 399, category: "Featured Products", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTc3lQB-kOHakkZBmyDe5-pnrw-E0e8xPdVkU4THgq7kP4b3rDI2rqlyocRE6Rl2yrovhnTR90UHLb5d-YCj9TdcmOan8jI-DcKthpZSN9cx6qOzzOOuK37-RGMpR5R33wE6TmGFw&usqp=CAc" },
    { id: 22, title: "Kindle Paperwhite", price: 139, category: "Featured Products", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQc3fcbep9FU3kOH20zfaQSN595Blt9zBPkQ1kHqGKCSWGgVYEFKetuOAexwO2QDJJIGaOJxQOC-u9CshX5aI9J_zHouc0e_D8n-uuJZ9thprNuhr_3KkDVfJq4tHzcYTgsv6IymXk&usqp=CAc" },
    { id: 23, title: "Kitchen Mixer", price: 199, category: "Sitemap", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTC-Pd7o75sxQ3h3-6xE1mpzmTqYWaUu-mKHmx9QhpQ8tglCLJPcjRCi0DpHvBhg6bXO8E0mowEAfk_XF6-CkBtP-Z_aSUuq7u4hbWrKcWIZj6ES93gIgvasZdL6-3Ay6wjv4-ssg&usqp=CAc" },
    { id: 24, title: "Dyson V15 Vacuum", price: 699, category: "Sitemap", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQRwE4ZiYWnpHaAY4kgHRGKaw26HZEcRn2X170T7huG6LGgpdbMfsf1OywNxhhCPxof2vhzEAFrvSpCUuyeNIQN9CkxFOrnpfdT2XX45bo6O8NUMTVk8WD7047cOYORLyRw9AWaaCPNHQ&usqp=CAc" },
    { id: 25, title: "Philips Air Fryer", price: 149, category: "Sitemap", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR0fw6Lm4Xt6FYdT84VN-oZmu_sBN9-PrDdodoIajJ-ASgWGQOIYXJ6MEmqKNDH_X886SjwgjQabIhHNKER4J4vSOtjgrKCQS08R9diblek4WDdBmylVNPhcrik5U3aKN4_5XZBcJw&usqp=CAc" },
    { id: 26, title: "Samsung Smart TV 55\"", price: 799, category: "Sitemap", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQa09lRQWLrjB2gv_t167q6kwNSMsO2BHg_q_-mwds-b2akQ-BooxbfMo1PXSUxoFdcsHakP7Q4GMAC9imH0loT7wNzJN3kqcAFDldIPQJ8grx2sMNeCw1EXQOrTjZVO-gBYy-b-bgojg&usqp=CAc" },
    { id: 27, title: "LG Refrigerator", price: 1199, category: "Sitemap", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS_p8uTXwhSR3cwmWik8hPp6N4_mNRNM3Y9VUB1R81S8JKI38EnrEPD_yZkU57LAF5qFtWmk2t3qfbo1KFifNdYG8Or90b_ZZewLZS-Eglo6CN5N5CJdtB0cyekYbrOw2KPczmB0v0Szw&usqp=CAc" },
    { id: 28, title: "Whirlpool Washing Machine", price: 999, category: "Sitemap", image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ890gtsbwaHBZR2jaIemp5z5Lm6d2QCrEHwPf4gWV0_x-_EtUjSYMWkNB5IiCOWfYD8mF2AAFf7ohq9Pw04oAWu6Og_e1KdW7mmFZxti-ItuWFSJwkWcv6OrLzQNkofiEuENZMMg&usqp=CAc" },
    { id: 29, title: "Sony Bravia OLED TV", price: 1899, category: "Sitemap", image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5dnAvfnJbVcOLG3MULK0cTmFMrzXl0Z6OTy-oQOoOEBG30R6_hxnePLaBqEgk53N-s0MRGzN_EsyvifReWjCCDlcTx_XgaX6XDKETPu4nX8VvvvJB9PE4w0JtP4aLTIgnhIRTB6XHjw&usqp=CAc" },
    { id: 30, title: "Panasonic Microwave", price: 249, category: "Sitemap", image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTfd1KNUHmudCOs4ea69sXbEi378skGEQqSs9PD2CsG4nITEDBka7orQdVScOUsn6NzytFchnrISCoi5ARe0NURTljizwPkBLCLb-l4TSmPxTyTEkPZPN7A4FR0Ow&usqp=CAc" },
  ],
  filteredCategory: "All",
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(product) {
        return { payload: { id: nanoid(), ...product } };
      },
    },
    editProduct(state, action) {
      const idx = state.items.findIndex(p => p.id === action.payload.id);
      if (idx !== -1) state.items[idx] = action.payload;
    },
    deleteProduct(state, action) {
      state.items = state.items.filter(p => p.id !== action.payload);
    },
    setCategoryFilter(state, action) {
      state.filteredCategory = action.payload;
    },
  },
});

export const { addProduct, editProduct, deleteProduct, setCategoryFilter } = productsSlice.actions;
export default productsSlice.reducer;
