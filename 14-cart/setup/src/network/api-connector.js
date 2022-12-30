class ApiConector {
  url = "https://course-api.com/react-useReducer-cart-project";

  fetchData = async () => {
    const response = await fetch(this.url);
    return await response.json();
  };
}
export default ApiConector;
