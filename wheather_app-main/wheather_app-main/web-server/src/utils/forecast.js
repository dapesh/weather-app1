const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    //http://api.weatherstack.com/current?access_key=bb92ccc373d4858fc1f0ebea79ed9875&query=37.8267,-122.4233&units=f
    const url= 'http://api.weatherstack.com/current?access_key=bb92ccc373d4858fc1f0ebea79ed9875&query='+latitude+','+longitude+'&units=f'
    request({url, json: true}, (error, {body})=>{
        
        if(error){
            callback('Cannot connect to the location ', undefined)
        }else if(body.error){
            callback('Cannot find the location. Try another one', undefined)
        }else{
            callback(undefined, 
                "Humidity is: "+body.current.humidity +"It's currently" + body.current.temperature +"degrees out. There is" +body.current.precip + "% of rain. "
            )
        }

    })
}

module.exports = forecast

