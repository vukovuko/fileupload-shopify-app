
document.getElementById('fileupload-input').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://robot-pillow-sensors-aids.trycloudflare.com/app/fileupload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('File uploaded successfully:', data);
    })
    .catch(error => {
      console.error('Error uploading file:', error);
    });
  }
});
