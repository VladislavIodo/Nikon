import React from 'react';
import Header from "./Components/Header";
import Products from "./Components/Products";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {DataProvider} from "./Components/DataProvider";
import Details from "./Components/Details";


function App() {
    return (
        <DataProvider>
            <div className="App">
                <Router>
                    <Header/>

                    <section>
                        <Routes>
                            <Route path="products" element={<Products/>}/>
                            <Route path="products/:id" element={<Details/>}/>   //открытие компоненты нужных часов по id
                        </Routes>
                    </section>
                </Router>
            </div>
        </DataProvider>
    );
}

export default App;
