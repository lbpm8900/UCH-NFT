document.querySelectorAll('a[href*="opensea.io"]').forEach((button) => {
  button.addEventListener('click', () => {
    console.log('Opening UCH NFT OpenSea collection');
  });
});
