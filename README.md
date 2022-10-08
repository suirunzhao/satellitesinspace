# satellitesinspace 🛰️
Project 1 for connections lab and critical experiences

<br>A guide website to tell how many satellites in space above us,  in order to raise awarenesss of creating a sustainable satellites system. 

<br>🚀 Demo link: https://suirunzhao.github.io/satellitesinspace/ 

<h2>Key concept(s) and/or intention(s)</h2>

1. A basic guide for people interested in knowing the satellite above us.
2. Brief description of the damage caused by space debris.
3. Gives people information about satellites, users can search the satellite’s name and give them information, including their names, countries, owners, users, purposes, orbit types, altitude, and source links.
4. Users can scroll from the bottom to the top of the page to cognize satellite orbits, which simulates different orbits’ altitude.

<img width="1666" alt="截屏2022-10-08 11 44 03" src="https://user-images.githubusercontent.com/102000475/194686625-2c625451-7ff8-403e-bb22-49ab61664d36.png">
<img width="1666" alt="截屏2022-10-08 11 42 40" src="https://user-images.githubusercontent.com/102000475/194686632-3e2caff0-17d1-4f8a-9b11-d1c97ee155bc.png">
<img width="1666" alt="截屏2022-10-08 11 43 23" src="https://user-images.githubusercontent.com/102000475/194686640-778b6c16-958a-4e1f-8802-a107752edb66.png">


<h2>Production decisions (i.e. technical, design, creative, etc.)</h2>

1. Embedded YouTube link of the International Space Station live stream to create the homepage background.
2. Converted excel file to JSON file.
3. Reversed the scroll direction, from bottom to top.
4. Added some animation.

![Home1](https://user-images.githubusercontent.com/102000475/194685649-e7168167-11f9-47b7-a1de-1c43a050f62b.png)

<h2>Major challenges and solutions</h2>

1. The YouTube live stream video couldn't set autoplay with sound on in Chrome, which took me a long time to figure out.
2. Fetch local JSON data is different from web API, Craig helped me out using for()loop to go through all of the objects in the data, and “compare”, using ==, whether the .name property of each object is the same as the input value.
3. In order to get the real-time data, I tried to use API, but unfortunately, the API needs KEY and only provides few information. 

<h2>Next Step</h2>

1. Web Scraping from other websites by not using API but just HTML class name and calculate in js. 
2. Add more interactions/animation in the Trip session.
3. Add autofill in the search bar.


<h2>Resources / References</h2>

Nasa Live Views from the ISS https://www.youtube.com/watch?v=86YLFOog4GM

DEWESoft https://dewesoft.com/daq/every-satellite-orbiting-earth-and-who-owns-them

UCS Satellite Database https://www.ucsusa.org/resources/satellite-database#page-subtitle

howmanypeopleareinspacerightnow https://www.howmanypeopleareinspacerightnow.com/

Space Guide: [https://abraiz01.github.io/Connections-Lab/Week3/Project_1/index.html](https://abraiz01.github.io/Connections-Lab/Week3/Project_1/index.html)

Scroll Inspiration: [https://neal.fun/deep-sea/](https://neal.fun/deep-sea/)

Exporting a Google Spreadsheet as JSON: http://blog.pamelafox.org/2013/06/exporting-google-spreadsheet-as-json.html?m=1
