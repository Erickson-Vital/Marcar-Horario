import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "@/pages/Login";
import { WithAuth } from "@/layouts/WithAuth";
import { Sign } from "@/pages/Sign";

export const Routing = () => {
  return (
    <Routes>
      <Route element={<WithAuth />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Route>
    </Routes>
  );
};
