class ApiConnector {
  url = "https://course-api.com/react-tabs-project";
  fetchJobs = async () => {
    try {
      const response = await fetch(this.url);
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
}

export default ApiConnector;
