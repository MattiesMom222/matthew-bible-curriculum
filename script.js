const lessons = [
  {
    day: "Day 1",
    bibleStory: {
      title: "God Made the World",
      link: "https://www.youtube.com/watch?v=teu7BCZTgDs",
      audio: "audio/day1-bible.mp3"
    },
    reading: {
      text: "God made the light and the dark.",
      audio: "audio/day1-reading.mp3"
    },
    copywork: "God made the light.",
    math: "Count the days of creation. Write 1 to 7.",
    project: "Draw what God made on Day 1."
  },
  {
    day: "Day 2",
    bibleStory: {
      title: "Noah and the Ark",
      link: "https://www.youtube.com/watch?v=3Z4STQ3bBvg",
      audio: "audio/day2-bible.mp3"
    },
    reading: {
      text: "Noah built a big boat.",
      audio: "audio/day2-reading.mp3"
    },
    copywork: "Noah obeyed God.",
    math: "Count animals by 2s. How many pairs are there?",
    project: "Draw the ark. Use blocks to build it."
  }
];

let dayIndex = 0;
const lessonEl = document.getElementById("lesson");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function loadLesson() {
  const cur = lessons[dayIndex];
  lessonEl.innerHTML = `
  <section><h2>${cur.day}</h2></section>
  <section>
    <h3>1. Bible Story</h3>
    <a href="${cur.bibleStory.link}" target="_blank">${cur.bibleStory.title}</a>
    <button class="audio-btn" data-src="${cur.bibleStory.audio}">🔊 Listen</button>
  </section>
  <section>
    <h3>2. Reading</h3>
    <p>${cur.reading.text}</p>
    <button class="audio-btn" data-src="${cur.reading.audio}">🔊 Listen</button>
  </section>
  <section><h3>3. Copywork</h3><p>${cur.copywork}</p></section>
  <section><h3>4. Math</h3><p>${cur.math}</p></section>
  <section><h3>5. Project</h3><p>${cur.project}</p></section>`;
  
  document.querySelectorAll(".audio-btn").forEach(btn=>{
    btn.onclick = () => new Audio(btn.dataset.src).play();
  });

  prevBtn.disabled = dayIndex === 0;
  nextBtn.disabled = dayIndex === lessons.length - 1;
}

prevBtn.onclick = () => { dayIndex--; loadLesson(); };
nextBtn.onclick = () => { dayIndex++; loadLesson(); };

loadLesson();
