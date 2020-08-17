import axios from 'axios';

export let fetchFonts = async () => {
  let res = await axios.get('https://google-webfonts-helper.herokuapp.com/api/fonts');
  return res.data;
};
