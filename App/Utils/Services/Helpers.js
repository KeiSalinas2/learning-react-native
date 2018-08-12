const Helpers = {

  getVideoTime: (time) => {
    let duration = time / 60
    let mins = Math.floor(duration)
    let seconds = duration % 1
    seconds = (seconds * 60) / 1000
    let totalTime = (mins + seconds * 10).toFixed(2).toString().replace('.', ':')
    return totalTime
  }

}

export default Helpers;