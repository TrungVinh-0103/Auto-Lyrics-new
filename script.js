const audio = document.getElementById("audio")
const lyricsContainer = document.getElementById("lyrics")
const playPauseBtn = document.getElementById("playPauseBtn")
const progressFill = document.getElementById("progressFill")
const currentTimeSpan = document.getElementById("currentTime")
const durationSpan = document.getElementById("duration")
const volumeSlider = document.getElementById("volumeSlider")

// const lyrics = [
//   { time: 32.39, text: "Em đi qua bao con phố" },
//   { time: 35.84, text: "Ngày chênh vênh gió cuốn" },
//   { time: 40.09, text: "Chợt giật mình nhận ra" },
//   { time: 41.42, text: "Ta đã không còn chung đường" },
//   { time: 46.73, text: "Anh ở đây lặng nghe tiếng" },
//   { time: 50.72, text: "Mưa rơi ngoài ô cửa" },
//   { time: 53.64, text: "Thầm tìm lại những kí ức" },
//   { time: 56.88, text: "Nơi ta từng có nhau" },
//   { time: 61.12, text: "Nụ cười em, ánh mắt anh" },
//   { time: 64.31, text: "Giờ chỉ còn là những bức tranh" },
//   { time: 68.56, text: "Tô màu hoài niệm phai tàn" },
//   { time: 71.21, text: "Sau những cuộc trò chuyện dài" },
//   { time: 73.1, text: "Em" },
//   { time: 77.61, text: "Vẫn tin rằng mình yêu" },
//   { time: 80.0, text: "Nhưng lại không biết cách để níu" },
//   { time: 83.45, text: "Khoảng lặng giữa hai ta" },
//   { time: 85.05, text: "Lặng im đến xa lạ" },
//   { time: 87.17, text: "Thôi không cần phải nói thêm" },
//   { time: 88.76, text: "Thôi không cần phải cố gắng" },
//   { time: 91.16, text: "Anh giờ nhìn em thật gần" },
//   { time: 93.01, text: "Nhưng sao lại quá xa" },
//   { time: 96.74, text: "Ta lạc nhau giữa dòng đời" },
//   { time: 99.65, text: "Dòng cảm xúc không lời" },
//   { time: 104.7, text: "Nhớ những ngày tay trong tay" },
//   { time: 106.58, text: "Đi dạo dưới hoàng hôn" },
//   { time: 107.38, text: "Tưởng rằng chỉ có mình ta" },
//   { time: 110.03, text: "Và thế giới này thôi" },
//   { time: 113.75, text: "Hạnh phúc đã từng rất xanh" },
//   { time: 116.13, text: "Giờ chỉ còn là màu trắng" },
//   { time: 117.74, text: "Của một trang giấy chưa kịp viết" },
//   { time: 121.98, text: "Đã bị xé đi mất rồi" },
//   { time: 126.5, text: "Nụ cười em, ánh mắt anh" },
//   { time: 129.16, text: "Giờ chỉ còn là những bức tranh" },
//   { time: 133.4, text: "Tô màu hoài niệm phai tàn" },
//   { time: 135.8, text: "Sau những cuộc trò chuyện dài" },
//   { time: 138.71, text: "Em" },
//   { time: 142.18, text: "Vẫn tin rằng mình yêu" },
//   { time: 144.56, text: "Nhưng lại không biết cách để níu" },
//   { time: 148.02, text: "Khoảng lặng giữa hai ta" },
//   { time: 151.73, text: "Lặng im đến xa lạ" },
//   { time: 154.14, text: "Thôi không cần phải nói thêm" },
//   { time: 156.0, text: "Thôi không cần phải cố gắng" },
//   { time: 157.86, text: "Anh giờ nhìn em thật gần" },
//   { time: 160.25, text: "Nhưng sao lại quá xa" },
//   { time: 162.9, text: "Ta lạc nhau giữa dòng đời" },
//   { time: 166.36, text: "Dòng cảm xúc không lời" },
//   { time: 170.07, text: "Lặng im như một thước phim không tiếng" },
//   { time: 172.73, text: "Chỉ còn lại khung hình của hai kẻ điên" },
//   { time: 174.06, text: "Tự vẽ ra câu chuyện, tự mình lún sâu" },
//   { time: 175.39, text: "Tình yêu này đã hết, giờ thì đâu đâu" },
//   { time: 176.45, text: "Tất cả đã tan rồi, như một làn khói" },
//   { time: 177.78, text: "Thôi không cần thêm nữa, giờ ta phải đối diện" },
//   { time: 179.64, text: "Đối diện với sự thật, là ta đã mất nhau" },
//   { time: 181.23, text: "Khoảng lặng giữa hai ta" },
//   { time: 184.69, text: "Lặng im đến xa lạ" },
//   { time: 186.28, text: "Thôi không cần phải nói thêm" },
//   { time: 188.42, text: "Thôi không cần phải cố gắng" },
//   { time: 190.55, text: "Anh giờ nhìn em thật gần" },
//   { time: 192.93, text: "Nhưng sao lại quá xa" },
//   { time: 195.59, text: "Ta lạc nhau giữa dòng đời" },
//   { time: 199.31, text: "Dòng cảm xúc không lời" },
// ]
const lyrics = [
  { time: 1.31, text: "hmmm hmmm..." },
  { time: 17.59, text: "Em từng nghĩ rằng yêu nhau thì không là những lần vỡ tan..." },
  { time: 22.37, text: "Giống như câu chuyện của chúng ta." },
  { time: 25.31, text: "Anh lặng im, em chờ... mỗi tin nhắn chờ đợi chỉ còn dấu \"đã xem.\"" },
  { time: 30.08, text: "Mỗi đêm em khóc một mình, anh ở đâu...?" },
  { time: 33.56, text: "Từng nỗi đau, tự em lo lấy." },
  { time: 36.49, text: "Tự em đứng dậy, tự em bước qua..." },
  { time: 41.00, text: "Chỉ cần anh nói một lời thật lòng, sẽ chẳng còn đâu những đêm chơ vơ ngoài hiên vắng." },
  { time: 48.18, text: "Đừng cố níu tay, đừng cố nói những lời vô nghĩa." },
  { time: 52.43, text: "Vì em chẳng muốn lừa dối thêm nữa, anh à..." },
  { time: 56.96, text: "Có lẽ trái tim em đã quá chai sần rồi, chẳng thể nào chịu thêm được nữa." },
  { time: 63.60, text: "Một lần thôi, xin anh hãy buông tay." },
  { time: 66.78, text: "Để em bước đi, không còn nước mắt..." },
  { time: 72.62, text: "Giờ em không còn muốn hỏi tại sao." },
  { time: 75.02, text: "Không cần một câu trả lời cho những tháng ngày." },
  { time: 76.62, text: "Từng vết thương giờ là bài học cho em." },
  { time: 79.00, text: "Không còn là nỗi sợ nữa, mà là bước tiến..." },
  { time: 81.13, text: "Em học cách mỉm cười với mọi giông bão." },
  { time: 83.26, text: "Biết chấp nhận một mình và tự chữa lành." },
  { time: 85.38, text: "Bởi có những lúc, trưởng thành là phải học." },
  { time: 87.76, text: "Buông tay người từng yêu thương, để trở nên mạnh mẽ..." },
  { time: 91.22, text: "Chỉ cần anh nói một lời thật lòng, sẽ chẳng còn đâu những đêm chơ vơ ngoài hiên vắng." },
  { time: 99.20, text: "Đừng cố níu tay, đừng cố nói những lời vô nghĩa." },
  { time: 103.46, text: "Vì em chẳng muốn lừa dối thêm nữa, anh à..." },
  { time: 107.98, text: "Có lẽ trái tim em đã quá chai sần rồi, chẳng thể nào chịu thêm được nữa." },
  { time: 114.63, text: "Một lần thôi, xin anh hãy buông tay." },
  { time: 118.08, text: "Để em bước đi, không còn nước mắt..." },
  { time: 141.73, text: "Anh đã từng nói với em là chúng ta sẽ đi xa." },
  { time: 144.65, text: "Nhưng rồi anh lại bị lạc lối trong cuộc sống vội vã này." },
  { time: 146.79, text: "Anh xin lỗi vì những lời chưa kịp nói, và anh xin lỗi vì những đêm anh đã bỏ rơi em một mình." },
  { time: 151.03, text: "Anh từng nghĩ sự nghiệp là tất cả, là thứ duy nhất có thể mang lại hạnh phúc cho cả hai." },
  { time: 155.03, text: "Nhưng khi có tất cả trong tay, thì anh lại thấy trống rỗng, vì đã không còn em ở bên." },
  { time: 159.26, text: "Anh biết, em không còn là cô gái của ngày xưa." },
  { time: 161.92, text: "Và anh cũng chẳng còn là chàng trai của ngày đó." },
  { time: 164.58, text: "Anh sẽ bước đi trên con đường của riêng anh, và chúc em hạnh phúc, dù ở bên ai..." },
  { time: 169.10, text: "...oh, ohhh... ...uhm, uhmmm..." }
];

// Initialize lyrics display
function displayLyrics() {
  lyrics.forEach((line) => {
    const div = document.createElement("div")
    div.classList.add("lyric-line")
    div.textContent = line.text
    div.dataset.time = line.time

    // Add click to seek functionality
    div.addEventListener("click", () => {
      audio.currentTime = line.time
    })

    lyricsContainer.appendChild(div)
  })
}

// Format time helper
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play()
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'
  } else {
    audio.pause()
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
  }
})

// Update progress and time
audio.addEventListener("timeupdate", () => {
  const currentTime = audio.currentTime
  const duration = audio.duration

  // Update progress bar
  if (duration) {
    const progress = (currentTime / duration) * 100
    progressFill.style.width = `${progress}%`
  }

  // Update time display
  currentTimeSpan.textContent = formatTime(currentTime)

  // Update active lyrics
  const lines = document.querySelectorAll(".lyric-line")
  lines.forEach((line, index) => {
    const time = Number.parseFloat(line.dataset.time)
    const nextTime = index < lines.length - 1 ? Number.parseFloat(lines[index + 1].dataset.time) : time + 5

    if (currentTime >= time && currentTime < nextTime) {
      line.classList.add("active")
      line.scrollIntoView({ behavior: "smooth", block: "center" })
    } else {
      line.classList.remove("active")
    }
  })
})

// Set duration when metadata loads
audio.addEventListener("loadedmetadata", () => {
  durationSpan.textContent = formatTime(audio.duration)
})

// Progress bar click to seek
document.querySelector(".progress-bar").addEventListener("click", (e) => {
  const progressBar = e.currentTarget
  const clickX = e.offsetX
  const width = progressBar.offsetWidth
  const duration = audio.duration

  if (duration) {
    const newTime = (clickX / width) * duration
    audio.currentTime = newTime
  }
})

// Volume control
volumeSlider.addEventListener("input", (e) => {
  audio.volume = e.target.value / 100
})

// Set initial volume
audio.volume = 0.7

// Audio ended event
audio.addEventListener("ended", () => {
  playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'
  progressFill.style.width = "0%"

  // Remove all active classes
  document.querySelectorAll(".lyric-line.active").forEach((line) => {
    line.classList.remove("active")
  })
})

// Initialize on page load
window.addEventListener("load", () => {
  displayLyrics()
})
