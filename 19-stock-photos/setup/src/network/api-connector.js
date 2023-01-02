class ApiConnector {
  clientID = '';
  mainUrl = `https://api.unsplash.com/photos/`;
  searchUrl = `https://api.unsplash.com/search/photos/`;

  fetchImages = async (query, page) => {
    try {
      let url = "";
      const urlPage = `&page=${page}`;
      const urlQuery = `&query=${query}`;
      if (query) {
        url = `${this.searchUrl}${this.clientID}${urlPage}${urlQuery}`;
      } else {
        url = `${this.mainUrl}${this.clientID}${urlPage}`;
      }
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
}

export default ApiConnector;
