import "./App.scss";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/products/Products";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Contact from "./pages/contactus/Contact";
import Pagenotfound from "./pages/pagenotfount/Pagenotfound";
import Singleproduct from "./pages/singleproduct/Singleproduct";
import Singleblog from "./pages/singleblog/Singleblog";
import { useEffect } from "react";

const routes = [
  {
    element: <Home />,
  },
  {
    path: "products",
    sub: [
      {
        element: <Products />,
      },
      {
        path: ":id",
        element: <Singleproduct />,
      },
    ],
  },
  {
    path: "blog",
    sub: [
      {
        element: <Blog />,
      },
      {
        path: ":id",
        element: <Singleblog />,
      },
    ],
  },
  {
    path: "aboutus",
    element: <About />,
  },
  {
    path: "contactus",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Pagenotfound />,
  },
];

function App() {
  const routeFunc = (routes) => {
    console.log(routes);
    return routes.map((item) => {
      if (!item.path) {
        return <Route index element={item.element} />;
      } else if (item.path && !item.sub) {
        return <Route path={item.path} element={item.element} />;
      } else {
        return <Route path={item.path}>{routeFunc(item.sub)}</Route>;
      }
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {/* <Route index element={<Home />} />
            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":id" element={<Singleproduct />} />
            </Route>
            <Route path="blog">
              <Route index element={<Blog />} />
              <Route path=":id" element={<Singleblog />} />
            </Route>
            <Route path="aboutus" element={<About />} />
            <Route path="contactus" element={<Contact />} />
            <Route path="*" element={<Pagenotfound />} /> */}
            {/* {routes.map((item) => {
              // console.log(item);
              if (!item.path) {
                return <Route index element={item.element} />;
              } else if (!item.sub && item.path) {
                return <Route path={item.path} element={item.element} />;
              } else {
                return (
                  <Route path={item.path}>
                    {item.sub.map((subitem) => {
                      if (!subitem.path) {
                        return <Route index element={subitem.element} />;
                      } else {
                        return (
                          <Route
                            path={subitem.path}
                            element={subitem.element}
                          />
                        );
                      }
                    })}
                  </Route>
                );
              }
            })} */}
            {routeFunc(routes)}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
