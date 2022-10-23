import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout";
import { About } from "./routes/about";
import { Home } from "./routes/home";
import User from "./routes/user";
import { Users } from "./routes/users";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="users" element={<Users></Users>}>
          <Route index element={<div>Seleccione un usuario</div>}></Route>

          <Route path=":userId" element={<User></User>}></Route>
        </Route>
        
        <Route path="about" element={<About></About>}></Route>
        {/*    
        
        <Route path="*" element={<div> 404 - Not  Found</div>}></Route>}
      */}
      <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
