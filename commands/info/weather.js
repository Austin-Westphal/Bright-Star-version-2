// const  weather  =  require ( "weather-js" ) ;
// const  Discord  =  require ( "discord.js" ) ;
// exports . run  =  ( client ,  message ,  args )  => {
//     if ( args . length  >  0 ) {
//         weather . find ( { search : args . join ( "" ) ,  degreeType : 'F' } ,  function ( err ,  result )  {
//             let  results  =  args . join ( "" ) . split ( "/" ) ;
//             if  ( err )  message . channel . send ( err ) ;


//             if  ( result . length  ===  0 )  {
//                 message . channel . send ( ': x: Location cannot be found' ) ;
//                 return ;
//             }


//             var  current  =  result [ 0 ] . current ;
//             var  location  =  result [ 0 ] . rental ;


//             const  embed  =  new  Discord . RichEmbed ( )
//                 . setDescription ( `** $ { current . skytext } **` )
//                 . setAuthor ( `Weather for $ { current . observationpoint } ` )
//                 . setThumbnail ( current . imageUrl )
//                 . setColor ( "# 3cfff8" )
//                 . addField ( 'Timezone' , `UTC $ { ( location . timezone  > =  0 ) ? " + " + location . timezone : location . timezone } ` ,  true )
//                 . addField ( 'Temperature' , ` $ { current . temperature } Degrees` ,  true )
//                 . addField ( 'Felt' ,  ` $ { current . feelslike } Degrees` ,  true )
//                 . addField ( 'Wind' , current . winddisplay ,  true )
//                 . addField ( 'Humidity' ,  ` $ { current . humidity } %` ,  true )

//             message . channel . send ( { embed } ) ;
//         } ) ;
//     } else {
//         let  help  =  new  Discord . RichEmbed ( )
//             . setColor ( "# FF0000" )
//             . setTitle ( '❌' )
//             . setDescription ( client . config . prefix  +  'weather [city / region / country]' ) ;
//         message . channel . send ( help ) . then ( ( value )  =>  {
//             message . delete ( 10000 ) ;
//             value . delete ( 10000 ) ;
//         } ) ;
//     }

// } ;

// module.exports  =  {
//     name: "weather",
//     aliases : [ "weather" ,  "weather" ] ,
//     description : "Gives the weather forecast for a region" ,
//     usage : "[city / region / country]" ,
//     category : "info" ,
//     permissions : "" ,
//     showHelp : true
// } ;


// CONENT BELOW THIS LINE HAS THE ORIGINAL COMMAND CODE THAT WORKS BUT DOES NOT CURRENTLY HAVE EVERYTHING I WOULD LIKE IT TO HAVE YET

const weather = require('weather-js');
const discord = require('discord.js')




//TIME TO END STREAM
module.exports = {
  name: "weather",
  description: "Get the weather of anywhere",
  category: "info",
  usage: "weathet <>",
  run: (client, message, args) => {
    
    
    if(!args.length) {
      return message.channel.send("Please give the weather location")
    }
    
 weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
try {
 
let embed = new discord.MessageEmbed()
.setTitle(`Weather - ${result[0].location.name}`)
.setColor("#ff2050")
.setDescription("Temperature units can may be differ some time")
.addField("Temperature", `${result[0].current.temperature} Celcius`, true)
.addField("Sky Text", result[0].current.skytext, true)
.addField("Humidity", result[0].current.humidity, true)
.addField("Wind Speed", result[0].current.windspeed, true)//What about image
.addField("Observation Time", result[0].current.observationtime, true)
.addField("Wind Display", result[0].current.winddisplay, true)
.setThumbnail(result[0].current.imageUrl);
   message.channel.send(embed)
} catch(err) {
  return message.channel.send("Unable To Get the data of Given location")
}
});   
    //LETS CHECK OUT PKG
    
  }
}