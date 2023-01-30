import JSZip from 'jszip';

export async function zipRepo(repo: { path: string; contents: string }[], config: string, raw: true): Promise<JSZip>;
export async function zipRepo(repo: { path: string; contents: string }[], config: string, raw: false): Promise<Uint8Array>;
export async function zipRepo(repo: { path: string; contents: string }[], config: string, raw: boolean = false): Promise<JSZip | Uint8Array> {
  let zip = new JSZip();

  for (let file of repo) {
    zip.file(file.path, file.contents);
  }

  zip.file('fontless.config.json', config);

  return raw ? zip : zip.generateAsync({ type: 'uint8array' });
}
