const outputFolder = './images/webp';

const produceWebP = async () => {
  const imagemin = (await import('imagemin')).default;
  const webp = (await import('imagemin-webp')).default;

  const png = await imagemin(['images/*.png'], {
    destination: outputFolder,
    plugins: [
      webp({
        lossless: true
      })
    ]
  });

  console.log('PNGs processed');

  const jpg = await imagemin(['images/*.{jpg,jpeg}'], {
    destination: outputFolder,
    plugins: [
      webp({
        quality: 65
      })
    ]
  });

  console.log('JPGs and JPEGs processed');
}

produceWebP();