export let getDeployment = async (token: string, id: string) => {
  let res = await fetch(`https://api.vercel.com/v11/now/deployments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  });
  let data = await res.json();
  return data;
};
