



    // This function loads simpsons data from the simpsons API
    function fetchSimpsonsJSON() {

      const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
      axios.get(url)
        .then(function (response) {
          return response.data; // response.data instead of response.json() with fetch
        })
        .then(function (simpsons) {
          console.log('data decoded from JSON:', simpsons[0].quote);

          // Build a block of HTML
          const simpsonsHtml = `
          <p><strong>${simpsons[0].quote}</strong></p>
          <p>${simpsons[0].character}</p>

          <img src="${simpsons[0].image}" />
        `;
          document.querySelector('#simpsons').innerHTML = simpsonsHtml;
        });
    }

    fetchSimpsonsJSON();
