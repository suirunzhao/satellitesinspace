//console.log("hello");

//click to scroll
// window.addEventListener('scroll', function(){
//     console.log(window.scrollY);
// });

// document.getElementById('btn-map').addEventListener('click',function(){
//     document.getElementById('map').scrollIntoView({behavior: 'smooth'});
// });

//reverse scroll
function scrollBottom() {window.scrollTo(0, 99999);}
if (document.addEventListener) document.addEventListener("load", scrollBottom, false)
else if (window.attachEvent) window.attachEvent("onload", scrollBottom);


//data
let sate_data;

window.addEventListener('load', function () {
    //console.log('page is loaded');
    //https://pokeapi.co/api/v2/pokemon?limit=151&offset=0
    //fetch('https://www.n2yo.com/satellites/#footable-visible%20footable-last-column');



    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            sate_data = data;
        })

    let button = document.getElementById('satellite_button');
    button.addEventListener('click', function () {
        let inputText = document.getElementById('satellite_name').value;
        //console.log(inputText);
        //Fetch local json data
        for(let i = 0;  i < sate_data.results.length; i++){
            if(inputText == sate_data.results[i].name){
                //console.log('Located');
                console.log(sate_data.results[i]);
                //sat info
                let noresult = document.getElementById('s_no_result');
                noresult.innerHTML = "";

                let tip = document.getElementById('s_tip');
                tip.innerHTML = "";
                
                let name = document.getElementById('s_name');
                name.innerHTML = "Name: " + sate_data.results[i].name;
                
                let country = document.getElementById('s_country');
                country.innerHTML = "Country: " + sate_data.results[i].country;
                
                let owner = document.getElementById('s_owner');
                owner.innerHTML = "Owners: " + sate_data.results[i].owner;

                let users = document.getElementById('s_users');
                users.innerHTML = "Users: " + sate_data.results[i].users;

                let purpose = document.getElementById('s_purpose');
                purpose.innerHTML = "Purpose: " + sate_data.results[i].purpose;

                let date = document.getElementById('s_date');
                date.innerHTML = "Launch Date: " + sate_data.results[i].date;
                
                let orbit = document.getElementById('s_orbit');
                orbit.innerHTML = "Class of Orbit: " + sate_data.results[i].classorbit;
                
                let typeorbit = document.getElementById('s_typeorbit');
                typeorbit.innerHTML = "Type of Orbit: " + sate_data.results[i].typeorbit;

                let longitudegeo = document.getElementById('s_longitudegeo');
                longitudegeo.innerHTML = "Longitude of GEO (degrees): " + sate_data.results[i].longitudegeo;

                let perigee = document.getElementById('s_perigee');
                perigee.innerHTML = "Perigee (km): " + sate_data.results[i].perigee;

                let apogee = document.getElementById('s_apogee');
                apogee.innerHTML = "Apogee (km): " + sate_data.results[i].apogee;
                
                let eccentricity = document.getElementById('s_eccentricity');
                eccentricity.innerHTML = "Eccentricity: " + sate_data.results[i].eccentricity;
                
                let inclination = document.getElementById('s_inclination');
                inclination.innerHTML = "Inclination (degrees): " + sate_data.results[i].inclination;

                let period = document.getElementById('s_period');
                period.innerHTML = "Period (minutes): " + sate_data.results[i].period;

                let lifetime = document.getElementById('s_lifetime');
                lifetime.innerHTML = "Expected Lifetime (yrs.): " + sate_data.results[i].lifetime;

                let contractor = document.getElementById('s_contractor');
                contractor.innerHTML = "Contractor: " + sate_data.results[i].contractor;

                let source = document.getElementById('s_source');
                source.innerHTML = "Source Link: " + sate_data.results[i].source;

                return true;
            }
            else if(i == sate_data.results.length-1){
                console.log('error');
                
                let noresult = document.getElementById('s_no_result');
                noresult.innerHTML = "No Matches Found";

                let tip = document.getElementById('s_tip');
                tip.innerHTML = "Please try another name like: International Space Station";
                
                let name = document.getElementById('s_name');
                name.innerHTML = "";

                let country = document.getElementById('s_country');
                country.innerHTML = "";
                
                let owner = document.getElementById('s_owner');
                owner.innerHTML = "";

                let users = document.getElementById('s_users');
                users.innerHTML = "";

                let purpose = document.getElementById('s_purpose');
                purpose.innerHTML = "";

                let date = document.getElementById('s_date');
                date.innerHTML = "";
                
                let orbit = document.getElementById('s_orbit');
                orbit.innerHTML = "";
                
                let typeorbit = document.getElementById('s_typeorbit');
                typeorbit.innerHTML = "";

                let longitudegeo = document.getElementById('s_longitudegeo');
                longitudegeo.innerHTML = "";

                let perigee = document.getElementById('s_perigee');
                perigee.innerHTML = "";

                let apogee = document.getElementById('s_apogee');
                apogee.innerHTML = "";
                
                let eccentricity = document.getElementById('s_eccentricity');
                eccentricity.innerHTML = "";
                
                let inclination = document.getElementById('s_inclination');
                inclination.innerHTML = "";

                let period = document.getElementById('s_period');
                period.innerHTML = "";

                let lifetime = document.getElementById('s_lifetime');
                lifetime.innerHTML = "";

                let contractor = document.getElementById('s_contractor');
                contractor.innerHTML = "";

                let source = document.getElementById('s_source');
                source.innerHTML = "";
            }
        }

        
        //Question
        //let select_Satellite = 'data.json.name.' + inputText;
        
        //console.log("Button is Clicked!");
        //console.log(inputText);
    })
})
