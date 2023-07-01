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
function FetchById(id) {
  var api = "http://127.0.0.1:9000/product/id?id=" + id;
  console.log(api);
  return fetch(api, {
    method: "GET",
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log("data: "+data);
    return data;
  })
}
export { FetchByCategory, FetchById };