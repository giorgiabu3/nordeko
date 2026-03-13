/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Recipes } from './pages/Recipes';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { WhereToBuy } from './pages/WhereToBuy';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="where-to-buy" element={<WhereToBuy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
