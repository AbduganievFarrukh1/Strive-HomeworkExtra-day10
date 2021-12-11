      // EXTRA EXERCISES

      // 41) Add an eventListener to show an alert when the cursor hovers a link, displaying its href property
      const alertUrl = function () {
        const links = document.querySelectorAll("a");
        for (let m = 0; m < links.length; m++) {
          links[m].onmouseenter = function (e) {
            alert(e.target.href);
          };
        }
      };
      alertUrl();

    // 42) Create a button that will hide every image on the page when clicked
   const hideImages = function () {
           const btn = document.createElement("button");
                btn.innerText = "Hide images";
                btn.onclick = function () {
                  const imgs = document.querySelectorAll("img");
                  imgs.forEach((img) => {
                    img.classList.add("d-none");
                  });
                };
                const body = document.querySelector("body");
                body.appendChild(btn);
              };
              hideImages();