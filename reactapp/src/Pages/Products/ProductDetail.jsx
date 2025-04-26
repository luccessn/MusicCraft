/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { prID } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3001/getcvImages?id=${prID}`
        );
        if (!response.ok) {
          throw new Error("Fetch error");
        }
        const result = await response.json();
        console.log(result); // შეამოწმე რა მონაცემი დაბრუნდა
        setData(result);
        setError("");
      } catch (err) {
        setError("Failed to fetch product details.");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [prID]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  // ჩაამატე შეზღუდვები, რომ არ ცდილო მისამართის გამოტანას თუ მონაცემები ჯერ არ ჩამოვიდა
  if (!data || !data.id) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="text-5xl  p-6 text-white">
      <h1>{data.id}</h1> {/* დარწმუნდი, რომ id არის მონაცემებში */}
      <img src={data.images.img1} alt="" className="mt-4" />
    </div>
  );
};
