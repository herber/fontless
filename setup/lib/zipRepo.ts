import JSZip from 'jszip';

export let zipRepo = async (repo: { path: string; contents: string }[], config: string, raw = false) => {
  let zip = new JSZip();

  for (let file of repo) {
    zip.file(file.path, file.contents);
  }

  zip.file('fontless.config.json', config);

  return raw ? zip : zip.generateAsync({ type: 'uint8array' });
};
