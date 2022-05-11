import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const newStoriesUrl = `${baseUrl}newstories.json`;
const newsUrl = `${baseUrl}item/`

const getNews = async (newsId) => {
    const result = await axios.get(`${newsUrl + newsId}.json`)
    .then(( response ) => response.data)

    return result
}

const getNewsId = async () => {
  const result = await axios.get(newStoriesUrl).then((response) => response.data);

  return result;
};

export { getNews, getNewsId };
