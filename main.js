var pauseEvent = new Event("pause")
      var stopEvent = new Event("stop")
      var choosing_songs = false
      function isPlaying(audioEl) {
      return !audioEl.paused;
      } 
      function play(music) {
        if (!choosing_songs) {
        var audio = new Audio(music)
        audio.play()
        }
        document.addEventListener("pause", () => {
        if (isPlaying(audio)) {
        audio.pause()
        } else if (!isPlaying(audio) && audio.currentTime > 0) {
        audio.play()
        }
      })
        document.addEventListener("stop", () => {
        if (audio != null) {
        audio.pause()
        audio = null
        }
      })
        
     }    
      function searchbyid() {
      let search = document.getElementById('searchbyid').value
      let searchtext = search.toString()
      let musics = document.querySelectorAll("input");
      musics.forEach(search_by_id)
      function search_by_id(song) {
        let songid = song.id.toString()
        if (songid.includes(searchtext)) {
          if (song.style.display != "inline-block" && !song.id.includes("xyz_") && !song.className.includes("to")) {
          song.style.display = "inline-block"
          }
        } else {
          if (song.type != "text" && !song.id.includes("xyz_") && !song.className.includes("to")) {
          song.style.display = "none"
          }
        }
      }
      }
      function searchbysong() {
      let search = document.getElementById('searchbysong').value
      let searchtext = search.toString()
      let musics = document.querySelectorAll("input");
      musics.forEach(search_by_song)
      function search_by_song(song) {
        if (song.type != "text" && !song.id.includes("xyz_") && !song.className.includes("to")) {
        let songname = song.value.toString().toLowerCase()
        let nameparts = songname.split(" - ")
        if (nameparts[1].includes(searchtext)) {
          if (song.style.display != "inline-block") {
          song.style.display = "inline-block"
          }
        } else {
          song.style.display = "none"
          }
        }
      }
      }
      function searchbyartist() {
      let search = document.getElementById('searchbyartist').value
      let searchtext = search.toString()
      let musics = document.querySelectorAll("input");
      musics.forEach(search_by_artist)
      function search_by_artist(song) {
        if (song.type != "text" && !song.id.includes("xyz_") && !song.className.includes("to")) {
        let songname = song.value.toString().toLowerCase()
        let nameparts = songname.split(" - ")
        if (nameparts[0].includes(searchtext)) {
          if (song.style.display != "inline-block") {
          song.style.display = "inline-block"
          }
        } else {
          song.style.display = "none"
          }
        }
      }
      }
      var currentpage = 1
      function pageup(n) {
      let musics = document.querySelectorAll("input");
      musics.forEach(hide)
      musics.forEach(show)
      function hide(song) {
        if (song.type != "text" && !song.id.includes("xyz_")) {
          let h = getComputedStyle(song)
          let displaytype = h.getPropertyValue(h[111])
        if (displaytype == "inline-block" && !song.className.includes("to")) {
          let classparts = song.className.split("g")
          currentpage = Number(classparts[1])
          song.style.display = "none"
        }
        if (displaytype == "inline-block" && song.className.includes("to") && !song.className.includes("ignore_")) {
          let classparts = song.className.split("to")
          let classparts2 = classparts[0].split("g")
          currentpage = Number(classparts2[1])
          song.style.display = "none"
        }
        }
      }
      function show(song) {
        if (song.type != "text" && song.id != "pause" && song.id != "stop") {
          let h = getComputedStyle(song)
          let displaytype = h.getPropertyValue(h[111])
        if (displaytype == "none" && !song.className.includes("to")) {
          let classparts = song.className.split("g")
          let page = Number(classparts[1])
          if (page == currentpage + n) {
            song.style.display = "inline-block"
          }
        }
        if (displaytype == "none" && song.className.includes("to")) {
          let classparts = song.className.split("to")
          let classparts2 = classparts[0].split("g")
          let page = Number(classparts2[1])
          if (page == currentpage + n) {
            song.style.display = "inline-block"
          }
        }
        }
      }
      }
      function loadplaylists() {
      let allstuff = document.querySelectorAll('input')
      allstuff.forEach(hide)
      function hide(item) {
        if (item.type != "text" && !item.id.includes("xyz_")) {
          item.style.display = "none"
        }
        if (item.id == "create") {
          item.style.display = "inline-block"
        }
      }
      }
      function createmenu() {
      document.playlist = []
      choosing_songs = true
      let allstuff = document.querySelectorAll('input')
      allstuff.forEach(showhide)
      function showhide(item) {
        if (item.id == "create") {
          item.style.display = "none"
        }
        if (item.type != "text" && item.id != "pause" && item.id != "stop") {
          let h = getComputedStyle(item)
          let displaytype = h.getPropertyValue(h[111])
        if (item.className == "pg1" || item.className == "to_ignore_done") {   
            item.style.display = "inline-block"
        }
        if (displaytype == "none" && !item.className.includes("ignore_") && item.className.includes("to")) {
          let classparts = item.className.split("to")
          let classparts2 = classparts[0].split("g")
          let page = Number(classparts2[1])
          if (page == 1) {
            item.style.display = "inline-block"
          }
        }
      if (item.className.includes("pg") && !item.className.includes("to")) {
        item.addEventListener("click", function() {
  addtoplaylist(item);
})
        function addtoplaylist(itemtoadd) {
        if (choosing_songs == true) {
        document.playlist.push(itemtoadd)
        itemtoadd.style.display = "none"
        itemtoadd.removeEventListener("add", addtoplaylist)
        }
        }
      }
        }
      }
      let alltext = document.querySelectorAll('h1')
      alltext.forEach(showhide2)
      function showhide2(item) {
        if (item.className == "to_title2") {
          item.style.display = "inline-block"
        }
      }
      }
function finishedplaylist() {
  if (document.playlist != []) {
  choosing_songs = false
  let alltext = document.querySelectorAll('h1')
      alltext.forEach(showhide2)
      function showhide2(item) {
        if (item.className == "to_title2") {
          item.style.display = "none"
        }
      }
  let allstuff = document.querySelectorAll('input')
      allstuff.forEach(hide)
      function hide(item) {
        if (item.type != "text" && !item.id.includes("xyz_")) {
          item.style.display = "none"
        }
        if (item.className == "to_ignore_playall" || item.className == "to_ignore_shuffle") {
          item.style.display = "inline-block"
        }
      }
  document.playlist.forEach(show)
  function show(item) {
    item.style.display = "inline-block"
  }
  }
}
function playall() {
  var playlist = []
  document.playlist.forEach(getAudio)
  function getAudio(item) {
    let parts = item.onclick.toString().split('"')
    playlist.push(parts[1])
  }
function playsongs() {        
   let audio = new Audio(playlist[0])
    audio.play()
  document.addEventListener("pause", () => {
        if (isPlaying(audio)) {
        audio.pause()
        } else if (!isPlaying(audio) && audio.currentTime > 0) {
        audio.play()
        }
      })
        document.addEventListener("stop", () => {
        if (audio != null) {
        audio.pause()
        audio = null
        }
      })
    audio.onended = function() {
      audio = null
      playlist.shift()
      playsongs()
    }
}
playsongs()
}
function shuffle() {
  var playlist = []
  document.playlist.forEach(getAudio)
  function getAudio(item) {
    let parts = item.onclick.toString().split('"')
    playlist.push(parts[1])
  }
  function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
function playsongs() {     
   let random = getRandomInt(0, playlist.length)
   let audio = new Audio(playlist[random])
    audio.play()
    document.addEventListener("pause", () => {
        if (isPlaying(audio)) {
        audio.pause()
        } else if (!isPlaying(audio) && audio.currentTime > 0) {
        audio.play()
        }
      })
        document.addEventListener("stop", () => {
        if (audio != null) {
        audio.pause()
        audio = null
        }
      })
    audio.onended = function() {
      audio = null
      playlist.splice(random, 1)
      playsongs()
    }
}
playsongs()
}
