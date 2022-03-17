import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

import "./ItemList.css";

const ItemList = ({ categoria }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const memes = [
  //   {
  //     title: "Remy ya no quiere cocinar :( ",
  //     img: "https://ih1.redbubble.net/image.1905637986.0126/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 1,
  //   },
  //   {
  //     title: "Memes Cats 2.0 ",
  //     img: "https://ih1.redbubble.net/image.892745515.5903/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 2,
  //   },
  //   {
  //     title: "¡Deberíamos comer sushi, Carol! ",
  //     img: "https://ih1.redbubble.net/image.2545401273.5140/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 3,
  //   },
  //   {
  //     title: "Esta es la piel de una bella asesina ",
  //     img: "https://ih1.redbubble.net/image.2563948709.4206/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 4,
  //   },
  //   {
  //     title: "Noot Noot Pingu Shirt Noot Memes Gift, Pingu Noot Noot Motherf ",
  //     img: "https://ih1.redbubble.net/image.1348712590.8795/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 5,
  //   },
  //   {
  //     title: "La paz nunca fue una opción Juego de ganso ",
  //     img: "https://ih1.redbubble.net/image.1255596925.2704/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 6,
  //   },
  //   {
  //     title: "Hasbulla # 5 ",
  //     img: "https://ih1.redbubble.net/image.2405902224.0673/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 7,
  //   },
  //   {
  //     title: "Christian Mom contra BIGWELD ",
  //     img: "https://ih1.redbubble.net/image.1759134241.5104/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 8,
  //   },
  //   {
  //     title: "¡Por supuesto que me corro rápido, tengo que pescar! ",
  //     img: "https://ih1.redbubble.net/image.1151584281.1352/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 9,
  //   },
  //   {
  //     title: "Aristóteles o Sócrates? ",
  //     img: "https://ih1.redbubble.net/image.610936728.9058/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u19.jpg",
  //     categoria: "Memes",
  //     id: 10,
  //   },
  //   {
  //     title: "mini khabib hasbulla meme ",
  //     img: "https://ih1.redbubble.net/image.2465733989.8389/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u2.jpg",
  //     categoria: "Memes",
  //     id: 12,
  //   },
  //   {
  //     title: "Adidachs Daschund ",
  //     img: "https://ih1.redbubble.net/image.1373399923.9583/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u1.jpg",
  //     categoria: "Memes",
  //     id: 13,
  //   },
  //   {
  //     title: "Kim Jong Un Live Laugh Love (Vive Ríe Ama) ",
  //     img: "https://ih1.redbubble.net/image.1828705341.5648/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 14,
  //   },
  //   {
  //     title: "Esta es la piel de una asesina Bella Memes ",
  //     img: "https://ih1.redbubble.net/image.2613624222.2315/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 15,
  //   },
  //   {
  //     title: "Es dignidad, luanne ",
  //     img: "https://ih1.redbubble.net/image.1921510029.0339/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 16,
  //   },
  //   {
  //     title: "Nariz de una pieza de Luffy Picking ",
  //     img: "https://ih1.redbubble.net/image.2299745214.1024/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 17,
  //   },
  //   {
  //     title: "Big Foot Jinx ",
  //     img: "https://ih1.redbubble.net/image.2075736562.8576/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 18,
  //   },
  //   {
  //     title: "Hasbulla - Team MMA Hasbulla Fight Memes ",
  //     img: "https://ih1.redbubble.net/image.2499038836.1655/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 19,
  //   },
  //   {
  //     title: "Soy un padre soltero que es adicto a Cool Math Games ",
  //     img: "https://ih1.redbubble.net/image.700158054.8773/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u3.jpg",
  //     categoria: "Memes",
  //     id: 20,
  //   },
  //   {
  //     title: "ahora del artista original! ",
  //     img: "https://ih1.redbubble.net/image.310691887.9576/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 21,
  //   },
  //   {
  //     title: "¡Deberíamos comer sushi, Carol! ",
  //     img: "https://ih1.redbubble.net/image.2809978113.7798/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 22,
  //   },
  //   {
  //     title: "puñetazo hasbulla magomedov ",
  //     img: "https://ih1.redbubble.net/image.2440578002.1223/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 23,
  //   },
  //   {
  //     title: "entre goteo ",
  //     img: "https://ih1.redbubble.net/image.1908104268.4033/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 24,
  //   },
  //   {
  //     title: "Intento de asesinato (diseño blanco) ",
  //     img: "https://ih1.redbubble.net/image.841051325.5097/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 25,
  //   },
  //   {
  //     title: "James Acaster Great British Bake Off ",
  //     img: "https://ih1.redbubble.net/image.773228736.5888/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u8.jpg",
  //     categoria: "Memes",
  //     id: 26,
  //   },
  //   {
  //     title: "Alineación neutral caótica ",
  //     img: "https://ih1.redbubble.net/image.525610647.3492/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 27,
  //   },
  //   {
  //     title: "Gibby requiere Coochie ",
  //     img: "https://ih1.redbubble.net/image.1880781246.6365/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 28,
  //   },
  //   {
  //     title: "Ratz Pink Memes",
  //     img: "https://ih1.redbubble.net/image.2521662764.3288/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 29,
  //   },
  //   {
  //     title: "Jesus meme vi eso ",
  //     img: "https://ih1.redbubble.net/image.1101038762.8318/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u3.jpg",
  //     categoria: "Memes",
  //     id: 30,
  //   },
  //   {
  //     title: "Hasbulla - Team MMA Hasbulla Fight Memes ",
  //     img: "https://ih1.redbubble.net/image.2499047822.1884/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 31,
  //   },
  //   {
  //     title: "Gusano Inch ",
  //     img: "https://ih1.redbubble.net/image.628164166.3723/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u2.jpg",
  //     categoria: "Memes",
  //     id: 32,
  //   },
  //   {
  //     title: "CABRA. MMA Hasbulla Fighting Memes ",
  //     img: "https://ih1.redbubble.net/image.2448435583.8098/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 33,
  //   },
  //   {
  //     title: "Centerlink - Viviendo el sueño ",
  //     img: "https://ih1.redbubble.net/image.1922795813.9459/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 34,
  //   },
  //   {
  //     title: "bertram come niños ",
  //     img: "https://ih1.redbubble.net/image.1592083214.3553/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 35,
  //   },
  //   {
  //     title: "Resaca de Alan ",
  //     img: "https://ih1.redbubble.net/image.216330189.1594/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 36,
  //   },
  //   {
  //     title: "Elf Christmas Movie Buddy Will",
  //     img: "https://ih1.redbubble.net/image.464672958.6068/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u9.jpg",
  //     categoria: "Memes",
  //     id: 37,
  //   },
  //   {
  //     title: "gángster bob esponja ",
  //     img: "https://ih1.redbubble.net/image.2284902794.3540/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 38,
  //   },
  //   {
  //     title: "Memes Bonk ",
  //     img: "https://ih1.redbubble.net/image.2773217583.3428/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 39,
  //   },
  //   {
  //     title: "GAMER",
  //     img: "https://ih1.redbubble.net/image.2742169237.4980/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 40,
  //   },
  //   {
  //     title: "Esta es la piel de una bella asesina ",
  //     img: "https://ih1.redbubble.net/image.2563956230.4410/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 41,
  //   },
  //   {
  //     title: "Garfield Smegma ",
  //     img: "https://ih1.redbubble.net/image.947319456.4522/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 42,
  //   },
  //   {
  //     title: "Persona 5 - Leblanc ",
  //     img: "https://ih1.redbubble.net/image.717198615.3420/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u2.jpg",
  //     categoria: "Memes",
  //     id: 43,
  //   },
  //   {
  //     title: "Esta es la piel de una camisa asesina bella",
  //     img: "https://ih1.redbubble.net/image.2429664686.3668/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 44,
  //   },
  //   {
  //     title: "Shrek Comprueba el meme ",
  //     img: "https://ih1.redbubble.net/image.270129050.4138/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 46,
  //   },
  //   {
  //     title: "Hora de pizza ",
  //     img: "https://ih1.redbubble.net/image.446575469.9616/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 47,
  //   },
  //   {
  //     title: "Spider-Man señalando ",
  //     img: "https://ih1.redbubble.net/image.2037560156.5554/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 48,
  //   },
  //   {
  //     title: "Cute Aesthetic Forg - Stickerpack ",
  //     img: "https://ih1.redbubble.net/image.2140215512.5346/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u4.jpg",
  //     categoria: "Memes",
  //     id: 49,
  //   },
  //   {
  //     title: "Máscara gratis! - Facehugger ",
  //     img: "https://ih1.redbubble.net/image.1138936956.7488/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 50,
  //   },
  //   {
  //     title: "Es britney ",
  //     img: "https://ih1.redbubble.net/image.1358982605.0525/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 51,
  //   },
  //   {
  //     title: "Jinx de cerca ",
  //     img: "https://ih1.redbubble.net/image.2602579621.8587/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 52,
  //   },
  //   {
  //     title: "Kirk Van Houten - Can i borrow a feeling? ",
  //     img: "https://ih1.redbubble.net/image.639366276.5651/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u6.jpg",
  //     categoria: "Memes",
  //     id: 53,
  //   },
  //   {
  //     title: "¡Vamos, Brandon!",
  //     img: "https://ih1.redbubble.net/image.2832481714.5427/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 54,
  //   },
  //   {
  //     title: "Bold transparente y Brash ",
  //     img: "https://ih1.redbubble.net/image.874049349.2759/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 55,
  //   },
  //   {
  //     title: "Déjame ver lo que tienes pequeño hongo",
  //     img: "https://ih1.redbubble.net/image.1144183547.3456/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u3.jpg",
  //     categoria: "Memes",
  //     id: 56,
  //   },
  //   {
  //     title: "Eso es lo que ella dijo: Michael Scott ",
  //     img: "https://ih1.redbubble.net/image.848207449.2169/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u4.jpg",
  //     categoria: "Memes",
  //     id: 57,
  //   },
  //   {
  //     title: "She-Ra gritando a Catra Memes ",
  //     img: "https://ih1.redbubble.net/image.1577557696.3197/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 58,
  //   },
  //   {
  //     title: "Mike Wazowski Sulivan Cara Memes ",
  //     img: "https://ih1.redbubble.net/image.1262064245.4664/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 59,
  //   },
  //   {
  //     title: "Save the drama for your mama ",
  //     img: "https://ih1.redbubble.net/image.404834510.4620/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u1.jpg",
  //     categoria: "Memes",
  //     id: 60,
  //   },
  //   {
  //     title: "Bella ¿Dónde diablos has estado Loca? ",
  //     img: "https://ih1.redbubble.net/image.2593434009.7934/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 61,
  //   },
  //   {
  //     title: "This Is Me Funny Stay Positive - Shark Attack ",
  //     img: "https://ih1.redbubble.net/image.1767905475.7320/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 62,
  //   },
  //   {
  //     title: "Esto es un buen doggo",
  //     img: "https://ih1.redbubble.net/image.1400304467.2556/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 63,
  //   },
  //   {
  //     title: "Película de gritos b-illy Loomis Skeet Ulrich ",
  //     img: "https://ih1.redbubble.net/image.2455152274.1437/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 64,
  //   },
  //   {
  //     title: "Amantes del manga ",
  //     img: "https://ih1.redbubble.net/image.1430214678.5983/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 65,
  //   },
  //   {
  //     title: "Diper cargado ",
  //     img: "https://ih1.redbubble.net/image.1513487095.3039/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 66,
  //   },
  //   {
  //     title: "Noot Noot Motherf Pingu Pingu ",
  //     img: "https://ih1.redbubble.net/image.899222932.0726/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 67,
  //   },
  //   {
  //     title: "Supuestamente avestruz Vintage Bird Lover Retro ",
  //     img: "https://ih1.redbubble.net/image.727891092.2138/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u3.jpg",
  //     categoria: "Memes",
  //     id: 68,
  //   },
  //   {
  //     title: "Deberíamos conseguir sushi Carol ",
  //     img: "https://ih1.redbubble.net/image.2870491905.1764/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 69,
  //   },
  //   {
  //     title: "Hasbulla Magomedov Crown Mini Khabib Memes ",
  //     img: "https://ih1.redbubble.net/image.2448051350.6618/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 70,
  //   },
  //   {
  //     title: "Hostales en Schrute Farms ",
  //     img: "https://ih1.redbubble.net/image.1207411915.9759/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 71,
  //   },
  //   {
  //     title: "Tío Roger Haiya meme pegatina ",
  //     img: "https://ih1.redbubble.net/image.1735502082.2303/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 72,
  //   },
  //   {
  //     title: "Sprite Cranberry",
  //     img: "https://ih1.redbubble.net/image.961877923.0791/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 73,
  //   },
  //   {
  //     title: "Riendo Leonardo DiCaprio ",
  //     img: "https://ih1.redbubble.net/image.1603215336.2016/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 74,
  //   },
  //   {
  //     title: "Krusty Krab Pizza ",
  //     img: "https://ih1.redbubble.net/image.2322351243.1333/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u2.jpg",
  //     categoria: "Memes",
  //     id: 75,
  //   },
  //   {
  //     title: "¡SANTA VIENE! ¡LO CONOZCO! ",
  //     img: "https://ih1.redbubble.net/image.457167214.7205/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 76,
  //   },
  //   {
  //     title: "Sí, por supuesto que pesco",
  //     img: "https://ih1.redbubble.net/image.1283270158.5503/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 77,
  //   },
  //   {
  //     title: "Hombre musical ",
  //     img: "https://ih1.redbubble.net/image.10039963.7433/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 78,
  //   },
  //   {
  //     title: "Visit Hawkins Indiana Vintage 80's TV Series ",
  //     img: "https://ih1.redbubble.net/image.1278297446.8209/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 79,
  //   },
  //   {
  //     title: "La resistencia ",
  //     img: "https://ih1.redbubble.net/image.428106009.9032/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u1.jpg",
  //     categoria: "Memes",
  //     id: 80,
  //   },
  //   {
  //     title: "Rust Game Logo ",
  //     img: "https://ih1.redbubble.net/image.331547918.1075/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u3.jpg",
  //     categoria: "Memes",
  //     id: 81,
  //   },
  //   {
  //     title: "cometer fraude fiscal ",
  //     img: "https://ih1.redbubble.net/image.2778131857.4563/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u1.jpg",
  //     categoria: "Memes",
  //     id: 82,
  //   },
  //   {
  //     title: "Ur Such a Sussy Baka Funny Sussy Baka Memes ",
  //     img: "https://ih1.redbubble.net/image.2386025354.3492/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 83,
  //   },
  //   {
  //     title: "MI NOMBRE ES ZAK BAGANS ",
  //     img: "https://ih1.redbubble.net/image.410824970.9238/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 84,
  //   },
  //   {
  //     title: "La muerte agarra a garfield ",
  //     img: "https://ih1.redbubble.net/image.1750765861.4883/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 85,
  //   },
  //   {
  //     title: "Se apagan las luces y nos vamos ",
  //     img: "https://ih1.redbubble.net/image.1977744872.9574/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 86,
  //   },
  //   {
  //     title: "violencia (blanco) ",
  //     img: "https://ih1.redbubble.net/image.2860944449.7470/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 87,
  //   },
  //   {
  //     title: "John Collins Dunk en Embiid ",
  //     img: "https://ih1.redbubble.net/image.2457631977.2669/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 88,
  //   },
  //   {
  //     title: "Festivus para el resto de nosotros ",
  //     img: "https://ih1.redbubble.net/image.1844809811.3381/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 89,
  //   },
  //   {
  //     title: "Jone Waste Yore Toye Monme Yorall Redii ",
  //     img: "https://ih1.redbubble.net/image.2306575177.2419/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 90,
  //   },
  //   {
  //     title: "Garfield bendecido ",
  //     img: "https://ih1.redbubble.net/image.1850753632.3483/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 91,
  //   },
  //   {
  //     title: "Las mujeres me quieren Los peces me temen ",
  //     img: "https://ih1.redbubble.net/image.2047417357.4352/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 92,
  //   },
  //   {
  //     title: "eres un mago kermit camisa meme ",
  //     img: "https://ih1.redbubble.net/image.2552261482.1185/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 93,
  //   },
  //   {
  //     title: "CONFÍA EN MI, SOY INGENIERO ",
  //     img: "https://ih1.redbubble.net/image.1883024456.4397/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 94,
  //   },
  //   {
  //     title: "Zarigüeya tocando el banjo ",
  //     img: "https://ih1.redbubble.net/image.2137780526.5351/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 95,
  //   },
  //   {
  //     title: "¿Cómo están todos ustedes, Dr. Younan Nowzaradan, Dr. ahora? ",
  //     img: "https://ih1.redbubble.net/image.2160562614.8476/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 96,
  //   },
  //   {
  //     title: "Excelente fiesta de búhos: lo que hacemos en las sombras ",
  //     img: "https://ih1.redbubble.net/image.1617814867.5375/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 97,
  //   },
  //   {
  //     title: "No tengo ni idea de lo que estoy haciendo. ",
  //     img: "https://ih1.redbubble.net/image.1658113412.3927/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u4.jpg",
  //     categoria: "Memes",
  //     id: 98,
  //   },
  //   {
  //     title: "Referencia del meme de la extraña aventura de Jojo ",
  //     img: "https://ih1.redbubble.net/image.2199919449.9947/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 99,
  //   },
  //   {
  //     title: "Mr Blobby es Dios ",
  //     img: "https://ih1.redbubble.net/image.1844116940.3081/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 100,
  //   },
  //   {
  //     title: "FJB ",
  //     img: "https://ih1.redbubble.net/image.2854874624.1263/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 101,
  //   },
  //   {
  //     title: "Me voy a cagar hasta la muerte ",
  //     img: "https://ih1.redbubble.net/image.2576290346.3441/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 102,
  //   },
  //   {
  //     title: "LeBron James - Cranberry Sprite Memes ",
  //     img: "https://ih1.redbubble.net/image.482989303.8454/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.u5.jpg",
  //     categoria: "Memes",
  //     id: 103,
  //   },
  //   {
  //     title: "Santa parece sus para mí v.2 ",
  //     img: "https://ih1.redbubble.net/image.1874960936.2172/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u1.jpg",
  //     categoria: "Memes",
  //     id: 104,
  //   },
  //   {
  //     title: "La última cena Office Edition ",
  //     img: "https://ih1.redbubble.net/image.1433213158.7657/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 105,
  //   },
  //   {
  //     title: "NICE VIBE * Camisa de Ichigo [Bleach] ",
  //     img: "https://ih1.redbubble.net/image.133887978.6512/ssrco,classic_tee,flatlay,101010:01c5ca27c6,front,wide_portrait,750x1000.u2.jpg",
  //     categoria: "Memes",
  //     id: 106,
  //   },
  //   {
  //     title: "Esta es una buena tira cómica de diana ",
  //     img: "https://ih1.redbubble.net/image.1787206402.2599/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 107,
  //   },
  //   {
  //     title: "Pulisic Shh USMNT Soccer ",
  //     img: "https://ih1.redbubble.net/image.2429175454.9170/ssrco,classic_tee,flatlay,fafafa:ca443f4786,front,wide_portrait,750x1000.jpg",
  //     categoria: "Memes",
  //     id: 108,
  //   },
  // ];

  // const getProductos = new Promise((resolve, reject) => {
  //   let condition = true;
  //   if (condition) {
  //     setTimeout(() => {
  //       resolve(memes);
  //     }, 1000);
  //   } else {
  //     reject("NO ANDA");
  //   }
  // });

  // useEffect(() => {
  //   getProductos.then((respuesta) => setListaProductos(respuesta));
  // }, []);
  useEffect(() => {
    axios(`http://localhost:5000/${categoria}`).then((res) =>
      setListaProductos(res.data)
    );
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <div className="GridCards">
      {listaProductos.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default ItemList;
