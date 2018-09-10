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
      const { data } = await query.json();
      return data.movies
    }
    else
      return []
  }

  async searchMovie(title) {
    const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`);
    const { data } = await query.json();
    return data.movies
  }

}

export default new Api();