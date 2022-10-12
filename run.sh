# Clean old files
rm -rf deno
rm -rf magick-wasm
rm -rf package
rm magick-wasm.tgz
rm test/unsplash-blur.jpg

# Clone the repo
git clone --depth 1 --branch 0.0.16 https://github.com/dlemstra/magick-wasm.git

# Download the wasm file
npm install @dlemstra/magick-native

# Run the script
deno run --unstable --allow-write --allow-read to_deno.js

# Copy the wasm code
cp node_modules/@dlemstra/magick-native/magick.js deno/src/wasm/magick_native.js
echo "\nexport default MagickNative;" >> deno/src/wasm/magick_native.js

# Autoformat the code
deno fmt deno --ignore=deno/src/wasm/magick_native.js

# Test
deno run --allow-write --allow-read --no-check test/test.ts
