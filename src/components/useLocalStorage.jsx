import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {

  const dataFromStorage = JSON.parse(localStorage.getItem(key));
  const initialVal = dataFromStorage ? dataFromStorage : initialValue;

  const [data, setData] = useState(initialVal);

  // whenever key or data get changed it will run again
  useEffect(() => {
    console.log('running...');
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  // get data from storage
  const getData = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  return [data, setData, getData];
};

export default useLocalStorage;