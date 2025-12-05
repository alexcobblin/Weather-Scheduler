export function evaluateWeatherForEvent(
    data: any,
    startTime: string,
    endTime: string,
    isOutside: boolean
  ): string {
    if (!isOutside) return "";
    
    // Takes the hour portion of both times and ocnverts it into integers
    const startHour = parseInt(startTime.split(":")[0], 10);
    const endHour = parseInt(endTime.split(":")[0], 10);
    
    // Gets a list of the conditions at each hour for the current day
    const hours = data.forecast.forecastday[0].hour;
    
    // List of different conditions to check for that are bad
    const badConditions = [
      "rain",
      "snow",
      "sleet",
      "ice",
      "freezing",
      "thunder",
      "storm",
      "blizzard",
      "drizzle"
    ];
    
    // List of warnings to display in the frontend
    let warnings: string[] = [];
    
    // Iterates through each hour and gets the condition for that specific hour
    for (let h = startHour; h <= endHour; h++) {
      const hourlyWeather = hours[h];

      if (!hourlyWeather) {
        continue;
      }
  
      const condition = hourlyWeather.condition.text.toLowerCase();
      
      if (badConditions.some(word => condition.includes(word))) {
        warnings.push(
          `At ${hourlyWeather.time.split(" ")[1]} → ${hourlyWeather.condition.text}`
        );
      }
    }
    
    // Return the warnings if there is more than one
    if (warnings.length > 0) {
      return "Bad weather expected:\n" + warnings.join("\n");
    }
    
    // Otherwise return that it looks good
    return "Weather looks good!";
  }
  