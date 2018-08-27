const BASE_API = 'https://yts.am/api/v2/';

class Api {
  async getSuggestion(id) {
    const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    if(query.ok){
      console.log('1')
      const { data } = await query.json();
      return data.movies
    }
    else
      return []
  }

  async getMovies() {
    const query = await fetch(`${BASE_API}list_movies.json?`);
    if(query.ok){
      console.log('1')
      const { data } = await query.json();
      console.log(data)
      return data.movies
    }
    else
      return []
  }
}

export default new Api();