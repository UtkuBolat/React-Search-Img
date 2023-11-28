import axios from 'axios'

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization:'Client-ID 1SIbORR7pMYQ4nqbVFcSfMGKyJwbcgf6FvAKsf27IH0'
      },
      params:{
        query:term
      }
    })
    return response.data.results;
  };
  
  export default searchImages;