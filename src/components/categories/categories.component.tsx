import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

//ultilidades
import Category from "../../types/category.types";

//estilos
import "./categories.styles.css";
import CategoryItem from "../category-itms/category-item.component";
import { db } from "../config/firebase.config";
import { categoryConverter } from "../../converters/firestore.converters";

const Categoreis = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = [];
      const querySnapshot = await getDocs(
        collection(db, "categories").withConverter(categoryConverter)
      );

      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data());
      });

      setCategories(categoriesFromFirestore);
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
      <div className="categories-content">
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categoreis;
