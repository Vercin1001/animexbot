import axios from "axios";
import { ICommand } from "wokcommands";
import { MessageEmbed } from 'discord.js'


//WOKCOMMANDS
export default {
  category: "Search engine",
  description: "Searchs anime",

  maxArgs: 1,
  expectedArgs: "<name>",

  slash: "both",
  testOnly: true,

  callback: async ({ args }) => {
    //buscar el canal

    // API CON AXIOS
    //ENDPOINT
    let uri = "https://api.jikan.moe/v4/anime"; 
    //PARAMETROS DEL ENDPOINT LEAN LA DOCUMENTACION
    const params = {
      q: `${args[0]}`,
      sfw: true,
      limit: 1,
    };

    //MANIPULACION DEL .JSON
    const response = await axios.get(uri, { params });
    const data = response.data.data // TODO EL JSON
    const anime = data[0] //EL JSON DEL ANIME
    //OBJETOS DENTRO DEL JSON DEL ANIME
    const title = anime.title 
    const url = anime.url 
    const image = anime.images.jpg.large_image_url 
    //TESTS QUE ESTUVE PROBANDO
    //const synopsis = anime.synopsis
    //console.log(anime)
    //console.log('///////////////')
    //console.log('///////////////')
    //console.log(synopsis)


    //CREACION DEL MENSAJE EN DISCORD
    if (response) {
      const embed = new MessageEmbed()
      .setAuthor({
        name: title,
        iconURL: url,
      })
      .setImage(image)


      //DEVOLVEMOS EL MENSAJE
      return embed
    }
    
  },
} as ICommand;