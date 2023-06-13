function FetchByCategory(Category) {
    var api = "http://localhost:9000/product/category?category=" + Category;
    console.log(api);
  
    return fetch(api, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        return data.result;
      })
      .catch(error => {
        console.log("Error fetching products:", error);
      });
  }
  
  export { FetchByCategory };