class BandSiteApi {
  constructor(apiKEY) {
    this.apikey = apiKEY;
    this.baseURL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
  }

  async getComments() {
    try {
      const response = await axios.get(
        `${this.baseURL}/comments?api_key=${this.apikey}`
      );
      console.log('respons is', response.data);
      return response.data;
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }

  async postComment(name, comment) {
    try {
      const response = await axios.post(
        `${this.baseURL}/comments?api_key=${this.apikey}`,
        {
         name: name,
        comment: comment,
        }	
      );
	  console.log('respons post is', response.data);
      return null;

    } catch (error) {
      console.log(error);
      
    }
  }

  async getShows() {
	try {
		const respons = await axios.get(`${this.baseURL}/showdates?api_key=${this.apikey}`);
		console.log(respons.data);
		return respons.data;
		

	} catch (error) {
		console.log(error);

	}
  }

  async deleteComment(commentId) {
	try {
		const respons = await axios.delete(`${this.baseURL}/comments/${commentId}?api_key=${this.apikey}`);
        return respons.data;

	} catch (error) {
		console.log(error);
		return null;
	}
  }
}
export default BandSiteApi;