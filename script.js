document.querySelectorAll('a[href*="opensea.io"]').forEach((link) => {
  link.addEventListener('click', () => {
    console.log('Opening official UCH NFT OpenSea collection');
  });
});
