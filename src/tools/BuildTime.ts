export function buildTime(totalSeconds: number): string {
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const minutesStr = String(minutes).padStart(2, '0');
    const secondsStr = String(seconds).padStart(2, '0');
  
    if(hours>0) {
      return `${hours}:${minutesStr}:${secondsStr}`;
    }
    else {
      return `${minutesStr}:${secondsStr}`;
    }
}
  