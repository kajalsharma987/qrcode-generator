

const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

generateBtn.addEventListener('click', () => {
  if (qrText.value.trim() !== '') {
    qrContainer.innerHTML = '';
    new QRCode(qrContainer, {
      text: qrText.value,
      width: sizes.value,
      height: sizes.value,
      colorDark: '#000',
      colorLight: '#fff',
    });
  } else {
    alert('Please enter text or URL');
  }
});

downloadBtn.addEventListener('click', () => {
  const canvas = document.querySelector('canvas');
  if (canvas) {
    const dataURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataURL;
    a.downloadText = 'QR_Code.png';
    a.click();
  }
});

