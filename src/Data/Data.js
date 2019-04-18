const API_KEY = '7a86b0b6f06e4e1ea297710e4a16115f';
const URL = 'https://newsapi.org/v2'


export const getTopHeadlines = (country) => {
    return fetch(`${URL}/top-headlines?apiKey=${API_KEY}&country=${country}&country=in`).then(res => res.json())
}
export const getNewsByCategory = (category) => {
    return fetch(`${URL}/top-headlines?apiKey=${API_KEY}&category=${category}&country=in`).then(res => res.json())
}

export const DataNotFound = [
    {
        title:"The news you are searching is not available at the moment :(",
        description:'',
        url:null,
        urlToImage: 'http://pastepic.xyz/images/2019/04/18/undraw_empty_xct99369e7af6e316b8f.png'
    }
]