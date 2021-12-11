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
              
// 43) Create a button that will hide or show the table on the page when clicked


      const toggleTable = function () {
        const btn = document.createElement("button");
        btn.innerText = "Toggle table";
        btn.onclick = function () {
          const table = document.querySelector("table");
          table.classList.toggle("d-none");
        };

        const body = document.querySelector("body");
        body.appendChild(btn);
      };
      toggleTable();              


      // 44) Write a function for calculating the sum of every number inside all the table cells (if their content is numeric)
      const sumNumbers = function () {
        const tds = document.querySelectorAll("td");
        let sum = 0;
        tds.forEach((td) => {
          const toNumber = parseInt(td.innerText);
          const isNotNumeric = isNaN(toNumber);
          if (!isNotNumeric) {
            sum += toNumber;
          }
        });
        console.log(sum);
      };
      sumNumbers();

      // 45) Delete the last letter from the heading each time the user clicks on it
      const deleteLastChar = function () {
        const h1 = document.querySelector("h1");
        h1.onclick = function (e) {
          h1.innerText = h1.innerText.substring(0, h1.innerText.length - 1);
        };
      };
      deleteLastChar();

      // 46) Change the background color of a <td> if the user clicks on it
      const changeTdBg = function () {
        const tds = document.querySelectorAll("td");
        tds.forEach((td) => {
          td.onclick = function (e) {
            e.target.classList.toggle("bg-red");
          };
        });
      };
      changeTdBg();