import React, { useState } from 'react';

const HiroBanner = () => {
      const [data, setData] = useState([
            { name : 'AMP Alboran', description: `L'AMP d'Alboran est située sur le cote méditerranéenne du Maroc`, langeur: '45 km', region: 'Tanger-Tétouan-Al Hoceima.', delimite : `Délimitée par la province de Tétouan à l'ouest et la province d'Al Hoceima à l'est.`, Superficie : '377 km', img : 'https://media.discordapp.net/attachments/954500026711834704/1087534792339378289/IMG_20230321_001013_606.jpg?width=953&height=356' },
            { name : 'AMP Massa', description: `L’AMP de Massa est située sur la côte méditerranéenne du Maroc.`, langeur: '', region: 'Sous Massa.', delimite : `Délimitée par la province Aglou et Sidi Ifni.`, Superficie : '242 km', img : 'https://cdn.discordapp.com/attachments/954500026711834704/1087534804339265536/IMG_20230321_001017_030.jpg' },
            { name : 'AMP Mogador', description: `L'AMP Mogador s’étend dans l’océan Atlantique à une distance de trois milles marins.`, langeur: '50 km', region: 'AMP MOGADOR est située entre Safi et Essaouira.', delimite : `Délimitée par la province Aglou et Sidi Ifni.`, Superficie : '275 km', img : 'https://media.discordapp.net/attachments/954500026711834704/1087534823821811794/IMG_20230321_001021_235.jpg?width=953&height=350' },
  ]);
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };
  
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

    return (         
    <div class="w-full mx-auto px-4 py-14 sm:px-6 xl:px-12">
    <div class="flex flex-col items-center justify-center space-y-6 text-center ">
        <h1 class="text-4xl font-bold tracking-normal sm:text-5xl lg:text-6xl">AMP</h1>
        <p class="max-w-full -sm text-lg text-gray-600 sm:text-xl">Une Aire Marine Protégée (ou AMP) est un espace délimité en mer qui répond à des objectifs de protection de la nature (faune, flore, écosystèmes) et de développement durable d’activités économiques telles que la pêche durable et le tourisme responsable.
            Constituées en réseaux efficacement conçus et gérés, les AMP forment des refuges pour la flore et la faune marines, 
            restaurent les fonctions écologiques importantes (en sauvegardant les frayères et les zones de croissance des poissons) et maintiennent la production de biens et de services écosystémiques. 
            Ce sont des investissements judicieux pour la santé des océans et le développement de l’économie bleue.</p>
        <form class="flex w-full max-w-md flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"><input type="text"  value={query} onChange={handleQueryChange} class="w-full rounded-md border bg-black-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Search ..." /></form>
       
       { (query.length > 0 && filteredData.length != 0) &&
       <div class="min-h-screen bg-gray-100 flex flex-col justify-center">

            <div class="relative m-3 flex flex-wrap mx-auto justify-center">
                {filteredData.map((item) => (
                <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                    <img class="h-40 rounded-2xl w-full object-cover" src={item.img} /> 
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                    <div>
                    <p class="text-lg font-semibold text-gray-900 mb-0">{item.name}</p>
                    <p class="text-md text-gray-800 text-left">{item.description}</p>
                    <p class="text-md text-gray-800 text-left ">Région : {item.region}</p> 
                    <p class="text-md text-gray-800 text-left ">{item.delimite}</p>
                    {item.langeur != ''&& <p class="text-md text-gray-800 text-left ">Langeur : {item.langeur}</p>}  
                    <p class="text-md text-gray-800 text-left">Superficie : {item.Superficie}</p>
                    </div>
                </div>
                </div>
                ))}
            </div>
        </div>
        }
    
  </div>
</div>
     );
}
 
export default HiroBanner;