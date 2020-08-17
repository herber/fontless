import JSZip from 'jszip';

export let zipRepo = (repo: { path: string; contents: string }[], config: string) => {
  let zip = new JSZip();

  for (let file of repo) {
    zip.file(file.path, file.contents);
  }

  zip.file('fontless.config.json', config);

  return zip.generateAsync({ type: 'uint8array' });
};
