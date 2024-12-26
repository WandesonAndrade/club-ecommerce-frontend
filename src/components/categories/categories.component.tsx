import { useEffect, useState } from "react";
import axios from "axios";

//ultilidades
import Category from "../types/category.types";
import env from "../config/env.config";

//estilos
import "./categories.styles.css";

const Categoreis = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`);

      setCategories(data);
    } catch (error) {
      console.log({ error });
    }
  };

  console.log({ categories });

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="caregories-container">
      <div className="categories-content"></div>
    </div>
  );
};

export default Categoreis;
