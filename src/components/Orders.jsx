import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import useDebounceHook from "./useDebounceHook";
import Compo from "./Compo";

const Orders = () => {
  const orders = useSelector((state) => state.orders);
  const [currentPage, setCurrentPage] = useState(1); 
  const [ordersPerPage] = useState(5);
  const [query, setQuery] = useState("");
  const debounceSearch = useDebounceHook(query, 500);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  useEffect(() => {
    setCurrentPage(1);  // to start searching from begineeing
  }, [debounceSearch]);

  const filteredOrders = debounceSearch
    ? orders.filter((order) =>
        order.orderby.toLowerCase().includes(debounceSearch.toLowerCase())
      )
    : orders.slice();
  const currentOrders = filteredOrders.slice(
  
    indexOfFirstOrder,
    indexOfLastOrder
  );
  console.log(currentOrders)

  const handlePageChange = (value) => {
    if (value === "&laquo;" || value === "... ") {
      setCurrentPage(1);
    } else if (value === "&lasquo;") {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    } else if (value === "&rsaquo;") {
      if (currentPage !== totalPage) {
        setCurrentPage(currentPage + 1);
      }
    } else if (value === "&raquo" || value === " ...") {
      setCurrentPage(totalPage-1);
    } else {
      setCurrentPage(value);
    }
  };

  const totalPage = Math.ceil(filteredOrders.length / ordersPerPage);

  return (
    <div>
      <h1>Orders will be shown here</h1>
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />

      {currentOrders.map((order) => (
        <Compo
          key={order.id}
          id={order.id}
          orderby={order.orderby}
          patties={order.patties}
          cheese={order.cheese}
          salad={order.salad}
        />
      ))}
      <Pagination
        totalPage={totalPage}
        page={currentPage}
        limit={ordersPerPage}
        siblings={1}
        onPageChange={handlePageChange}
      />

      <Link to="/">
        <button>Make a new order</button>
      </Link>
    </div>
  );
};

export default Orders;
