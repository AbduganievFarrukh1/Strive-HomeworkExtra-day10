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