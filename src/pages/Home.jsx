import React from 'react';
import { useEffect, useRef } from "react";
import poke1 from '../assets/25.webp';
import poke2 from '../assets/24.webp'
import p1 from '../assets/1.webp'
import p2 from '../assets/2.webp'
import p3 from '../assets/3.webp'
import p4 from '../assets/4.webp'
import p5 from '../assets/5.webp'
import p6 from '../assets/6.webp'
import p7 from '../assets/7.webp'
import p8 from '../assets/8.webp'
import p9 from '../assets/9.webp'
import p10 from '../assets/10.webp'
import p11 from '../assets/11.webp'
import p12 from '../assets/12.webp'
import p13 from '../assets/13.webp'
import './Home.css';
import Card from './Card'; // Correctly import the Card component

const Home = () => {
  
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Auto-play failed due to browser policies:", error);
        });
      }
    };

    playAudio();
  }, []);

  return (
    <>
      <h1>Welcome To Game Sage!<br></br> Weekly Ranking Of Pokemon ROMS</h1>

      <div>
        <h1 id='rom'>TOP 25 Pokemon ROMS</h1>
      </div>
      <h1> 1.Pokemon Emerald ROM </h1>
<div id='cent'>

<Card
        title="Pokemon Emerald ROM"
        description="Explore Hoenn, battle both Team Magma and Aqua, and conquer the Battle Frontier in this enhanced Gen III adventure."
        imageUrl={p1}
        fileUrl="/Pokemon - Emerald Version (USA, Europe).zip" // File should be in the public folder
        fileName="Pokemon - Emerald Version (USA, Europe).zip"
      />
</div>



<h1> 2.Pokemon Red Version </h1>
<div id='cent'>

<Card
        title="Pokemon Red Version"
        description="Relive Kanto with updated graphics, catch classic Pokémon, and explore the Sevii Islands post-game."
        imageUrl={p2}
        fileUrl="/Pokemon - FireRed Version (USA, Europe).zip" // File should be in the public folder
        fileName="Pokemon - FireRed Version (USA, Europe).zip"
      />
</div>




<h1> 3.Pokemon Ruby ROM </h1>
<div id='cent'>

<Card
        title="Pokemon - Ruby Version"
        description="Discover Hoenn, stop Team Magma, and catch Groudon in this vibrant GBA debut."
        imageUrl={p3}
        fileUrl="/Pokemon - Ruby Version (USA, Europe) (Rev 2).zip" // File should be in the public folder
        fileName="Pokemon - Ruby Version (USA, Europe) (Rev 2).zip"
      />
</div>



<h1> 4.Pokemon Mystery Dungeon: Red Rescue Team ROM </h1>
<div id='cent'>

<Card
        title="Pokemon Mystery Dungeon: Red Rescue Team "
        description="Become a Pokémon, form a rescue team, and explore ever-changing dungeons in this roguelike spin-off."
        imageUrl={p4}
        fileUrl="/Pokemon Mystery Dungeon - Red Rescue Team (USA, Australia).zip" // File should be in the public folder
        fileName="Pokemon Mystery Dungeon - Red Rescue Team (USA, Australia).zip"
      />
</div>



<h1> 5.Pokemon Light Platinum </h1>
<div id='cent'>

<Card
        title="Pokemon Light Platinum "
        description="Journey through Zhery and Lauren, battle in a World Championship, and catch Pokémon up to Gen V."
        imageUrl={p5}
        fileUrl="/pokemon_light_platinum_final.gba.zip" // File should be in the public folder
        fileName="pokemon_light_platinum_final.gba.zip"
      />
</div>

<h1> 6.Pokemon Ash Gray ROM </h1>
<div id='cent'>

<Card
        title="Pokemon Ash Gray ROM "
        description="Follow Ash’s anime adventures in Kanto, with events straight from the TV series."
        imageUrl={p6}
        fileUrl="/Pokemon AshGray v4.6.zip" // File should be in the public folder
        fileName="Pokemon AshGray v4.6.zip"
      />
</div>

<h1> 7.Pokemon Glazed ROM </h1>
<div id='cent'>

<Card
        title="Pokemon Glazed ROM"
        description="Explore Tunod, travel across dimensions, and catch Pokémon from six generations in this polished hack."
        imageUrl={p7}
        fileUrl="/Pokemon Glazed (Unofficial v9.1.0).zip" // File should be in the public folder
        fileName="Pokemon Glazed (Unofficial v9.1.0).zip"
      />
</div>



<h1> 8.Pokémon Flora Sky </h1>
<div id='cent'>

<Card
        title="Pokémon Flora Sky"
        description="Adventure in a new region with a unique story, featuring Pokémon up to Gen IV."
        imageUrl={p8}
        fileUrl="/Pokemon Flora Sky CD Final.zip" // File should be in the public folder
        fileName="Pokemon Flora Sky CD Final.zip"
      />
</div>

<h1> 9.Pokemon Gaia ROM</h1>
<div id='cent'>

<Card
        title="Pokemon Gaia ROM "
        description="Uncover the Orbtus region’s ancient secrets, with Mega Evolutions and Pokémon up to Gen VI."
        imageUrl={p9}
        fileUrl="/pokemon_gaia_v3.2.gba.zip" // File should be in the public folder
        fileName="pokemon_gaia_v3.2.gba.zip"
      />
</div>

<h1> 10.Pokémon Prism </h1>
<div id='cent'>

<Card
        title="Pokémon Prism "
        description="Mine and explore Naljo, with new types (Gas, Sound) and a Crystal-inspired story on GBA."
        imageUrl={p10}
        fileUrl="/Pokemon Prism (v0.95.0254).zip" // File should be in the public folder
        fileName="Pokemon Prism (v0.95.0254).zip"
      />
</div>

<h1> 11.Pokémon Dark Rising</h1>
<div id='cent'>

<Card
        title="Pokémon Dark Rising"
        description="Face a dark, challenging tale with Pokémon from multiple generations in a new region."
        imageUrl={p11}
        fileUrl="/PokemonDarkRising.zip" // File should be in the public folder
        fileName="PokemonDarkRising.zip"
      />
</div>


<h1> 12.Pokemon Liquid Crystal</h1>
<div id='cent'>

<Card
        title="Pokemon Liquid Crystal"
        description="Revisit Johto in this FireRed-based Crystal remake with enhanced visuals and features."
        imageUrl={p12}
        fileUrl="/Pokemon Liquid Crystal (v3.3.00512).zip" // File should be in the public folder
        fileName="Pokemon Liquid Crystal (v3.3.00512).zip"
      />
</div>


<h1> 13.Pokémon Ultra Shiny Gold Sigma</h1>
      <div id='cent'>
      <Card
        title="Pokémon Ultra Shiny Gold Sigma"
        description="A modernized Gold/Silver with Pokémon up to Gen VII and quality-of-life upgrades."
        imageUrl={p13}
        fileUrl="/Pokemon Ultra Shiny Gold Sigma Completo 1.5.0.zip" // File should be in the public folder
        fileName="Pokemon Ultra Shiny Gold Sigma Completo 1.5.0.zip"
      />
</div>



      <h1> 14.Pokémon Resolute</h1>
      <div id='cent'>
      <Card
        title="Pokémon Resolute"
        description="Tackle Sylon’s challenges, featuring Mega Evolutions and a complex, multi-layered plot."
        imageUrl={poke1}
        fileUrl="/Pokemon Resolute v2.97.zip" // File should be in the public folder
        fileName="Pokemon Resolute v2.97.zip"
      />
</div>

<h1> 15.Pokemon Victory Fire </h1>
<div id='cent'>

<Card
        title="Pokemon Victory Fire"
        description="Conquer the Tyron region with a mix of Pokémon and a new storyline."
        imageUrl={poke2}
        fileUrl="/Pokemon Victory Fire v2.74.zip" // File should be in the public folder
        fileName="Pokemon Victory Fire v2.74.zip"
      />
</div>



    </>
  );
};

export default Home;
