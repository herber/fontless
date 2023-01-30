import axios from 'axios';

export let fetchFonts = async () => {
  let res = await axios.get('https://gwfh.mranftl.com/api/fonts');
  return res.data;
};
