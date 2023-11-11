var uprog = {
  hBar: null,
  hPercent: null,
  hFile: null,
  init: () => {
    uprog.hBar = document.getElementById("up-bar");
    uprog.hPercent = document.getElementById("up-percent");
    uprog.hFile = document.getElementById("up-file");

    uprog.hFile.onchange = uprog.upload;
    uprog.hFile.disabled = false;
  },

  update: percent => {
    percent = percent + "%";
    uprog.hBar.style.width = percent;
    uprog.hPercent.innerHTML = percent;
    if (percent == "100%") {
      uprog.hFile.disabled = false;
    }
  },

  upload: async () => {
    let file = uprog.hFile.files[0];
    uprog.hFile.disabled = true;
    uprog.hFile.value = "";

    await new Promise(e => {
      setTimeout(e, 500);
    });
    uprog.update(25);
    await new Promise(e => {
      setTimeout(e, 500);
    });
    uprog.update(50);
    await new Promise(e => {
      setTimeout(e, 500);
    });
    uprog.update(75);
    await new Promise(e => {
      setTimeout(e, 500);
    });
    uprog.update(100);
  }
};
window.addEventListener("load", uprog.init);



/*
var uprog = {
  hBar: null,
  hPercent: null,
  hFile: null,
  init: () => {
    uprog.hBar = document.getElementById("up-bar");
    uprog.hPercent = document.getElementById("up-percent");
    uprog.hFile = document.getElementById("up-file");

    uprog.hFile.onchange = uprog.upload;
    uprog.hFile.disabled = false;
  },

  update: percent => {
    percent = percent + "%";
    uprog.hBar.style.width = percent;
    uprog.hPercent.innerHTML = percent;
    if (percent == "100%") {
      uprog.hFile.disabled = false;
    }
  },

  upload: async () => {
    let file = uprog.hFile.files[0];
    uprog.hFile.disabled = true;
    uprog.hFile.value = "";

    // (C2) AJAX UPLOAD
    let xhr = new XMLHttpRequest(),
        data = new FormData();
    data.append("upfile", file);
    xhr.open("POST", "upload.php");

    // (C3) UPLOAD PROGRESS
    let percent = 0, width = 0;
    xhr.upload.onloadstart = evt => uprog.update(0);
    xhr.upload.onloadend = evt => uprog.update(100);
    xhr.upload.onprogress = evt => {
      percent = Math.ceil((evt.loaded / evt.total) * 100);
      uprog.update(percent);
    };

    // (C4) ON LOAD & ERRORS
    xhr.onload = function () {
      if (this.response!= "OK" || this.status!=200) {
        // @TODO - DO SOMETHING ON ERROR
        // alert("ERROR!");
        // reset form?
        console.log(this);
        console.log(this.response);
        console.log(this.status);
      } else {
        uprog.update(100);
        // @TODO - DO SOMETHING ON COMPLETE
      }
    };
    xhr.onerror = err => console.error(err);

    // (C5) GO!
    xhr.send(data);
  }
};
window.addEventListener("load", uprog.init);
*/