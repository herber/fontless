export let download = (filename: string, type: string, content: string | Uint8Array) => {
  let blob = new Blob([content], { type });

  let link = document.createElement('a');
  link.download = filename;
  link.href = URL.createObjectURL(blob);
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => URL.revokeObjectURL(link.href), 1500);
};
