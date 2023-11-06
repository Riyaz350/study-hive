export function upperFirstChar(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

export function dateTime(todayDate){
    const filter = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit', 
        minute: '2-digit', 
      };

      const DateTime = todayDate.toLocaleString('en-US', filter);
      return DateTime
}