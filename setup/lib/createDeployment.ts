import { slugify } from './slugify';
import { createFontServiceConfig } from './createFontServiceConfig';

export let createDeployment = async (
  token: string,
  name: string,
  config: ReturnType<typeof createFontServiceConfig>,
  tree: { path: string; contents: string }[]
) => {
  let files = [
    ...tree.map(t => ({ data: t.contents, file: t.path })),
    {
      data: JSON.stringify(config),
      file: 'fontless.config.json'
    }
  ];

  let res = await fetch('https://api.vercel.com/v12/now/deployments', {
    method: 'post',
    headers: {
      Authorization: `bearer ${token}`
    },
    body: JSON.stringify({
      name: slugify(name),
      files,
      projectSettings: {
        framework: 'nextjs',
        buildCommand: 'yarn build'
      },
      target: 'production'
    })
  });

  return res.json();
};
