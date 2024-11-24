document.addEventListener("DOMContentLoaded", () => {
    const uri = "https://restcountries.com/v3/all";

    fetch(uri)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data);
            let countries = document.getElementById('list');
            for(let i=0;i<data.length;i++){
                countries.innerHTML += `
                <div class="col-sm-6 col-md-4 col-lg-4 col-xl-4" >
                    <div class="card h-100" style="width: 18rem;">
                        <div class="card-header">
                            <h4 class="text-center mt-2">${data[i].name.common}</h4>
                        </div>

                        <div class="card-body">
                            <img src="${data[i].flags[1]}" class="card-img-top" alt="...">
                            <div class="card-text text-center">
                                <p class="text-center">Capital: ${data[i].capital}</p>
                                <p class="text-center">Region: ${data[i].region}</p>
                                <p class="text-center">Lat, lng: <span>${data[i].latlng}</span></p>
                                <p class="text-center">Country code: ${data[i].cca3}</p>
                                <button class="btn btn-primary" onclick="display(this)">Click for Weather</button>
                            </div>
                        </div>

                    </div>
                </div>`;
            }
        })
        .catch((error) => console.log(error));
});
