const response = await fetch(
  "https://registry.npmjs.org/@imagemagick/magick-wasm",
);
const data = await response.json();
const lastVersion = Object.values(data.versions).pop();
const url = lastVersion.dist.tarball;

const fileResponse = await fetch(url);
const file = await fileResponse.arrayBuffer();
Deno.writeFileSync("magick-wasm.tgz", new Uint8Array(file));
