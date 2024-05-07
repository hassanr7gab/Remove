let profilePic = document.getElementById("profile-pic");
let fileInput = document.getElementById("fileInput");
let imageURL;

fileInput.onchange = function(){
    profilePic.src = URL.createObjectURL(fileInput.files[0]);
}

function submitHandler(){
    const fileInput = document.getElementById('fileInput');
    const image = fileInput.files[0];

    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = "CnbjLASYDARPreTpJgDuRdo1";

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': apiKey
        },
        body: formData
    })
    .then(function(response){
        return response.blob()
    })
    .then(function(blob){
        const url = URL.createObjectURL(blob);
        imageURL = url;
        profilePic.src = url; // Update the src attribute of profilePic
    })
    .catch(function(error){
        console.error(error);
    });
}

function downloadFile(){
    var a = document.createElement('a');
    a.href = imageURL;
    a.download = 'naciasv.jpG';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


window.addEventListener("load", () => {
    const loader = document.querySelector(".landing-loader");
    document.body.style.overflow = "hidden";
  
    setTimeout(() => {
      loader.remove();
      document.body.style.overflow = "auto";
    }, 800)
  });