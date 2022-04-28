import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default instance;
//make requst to TMDB
//axios is an labery function to get the Api details
//baseUrl is the commen base link for all url , so i assign that in to baseurl and 
//use this where i want to use
