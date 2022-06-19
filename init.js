// declaring element
const username = document.getElementById("username")
const registerForm = document.getElementById("registerForm")
const logoutForm = document.getElementById("logoutForm")
const startSection = document.getElementById("start")
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")
const box4 = document.getElementById("box4")
const box5 = document.getElementById("box5")
const rewardImage = document.getElementById("imgReward")
const tombolmulai1 = document.getElementById("mulai1")
const tombolmulai2 = document.getElementById("mulai2")
const tombolmulai3 = document.getElementById("mulai3")
const tombolstop1 = document.getElementById("stop1")
const tombolstop2 = document.getElementById("stop2")
const tombolstop3 = document.getElementById("stop3")
const notifikasi = document.getElementById("notif")
const rewardSection = document.getElementById("reward")
const LV1 = document.getElementById("Level1")
const LV2 = document.getElementById("Level2")
const LV3 = document.getElementById("Level3")

let money = document.getElementById("TopUp")
let pointAkun = 0
let point = document.getElementById("score")
let profil = document.getElementById("profil")
let rolling = null
let Uang = 0
let bonus = 0
Uang = sessionStorage.getItem('uang')
let total_uang = parseInt(Uang)
sessionStorage.setItem('point', pointAkun)
// hide tombol mulai
tombolmulai1.style.display = "none"
tombolmulai2.style.display = "none"
tombolmulai3.style.display = "none"
// hide tombol stop
tombolstop1.style.display = "none"
tombolstop2.style.display = "none"
tombolstop3.style.display = "none"

notifikasi.style.display = "none"
// hide section
startSection.style.display = "none"
rewardSection.style.display = "none"

box1.style.display = "none"
box2.style.display = "none"
box3.style.display = "none"
box4.style.display = "none"
box5.style.display = "none"

LV1.style.display = "none"
LV2.style.display = "none"
LV3.style.display = "none"

const player = new Player()
const acak = new rolls()
const uang = new Money()

let Level1 = ['😍', '🤣', '😱']
let Level2 = ['😍', '🤣', '😱','😊']
let Level3 = ['😍', '🤣', '😱','😊','😒']

function dice1() {
  let gacha = []
  for (let i = 0; i < Level1.length; i++) {
    const roll = Level1[~~(Math.random() * Level1.length)]
    gacha.push(roll)
  }
  return gacha
}

function dice2() {
  let gacha = []
  for (let i = 0; i < Level2.length; i++) {
    const roll = Level2[~~(Math.random() * Level2.length)]
    gacha.push(roll)
  }
  return gacha
}

function dice3() {
  let gacha = []
  for (let i = 0; i < Level3.length; i++) {
    const roll = Level3[~~(Math.random() * Level3.length)]
    gacha.push(roll)
  }
  return gacha
}

function reward() {
  
  fetch('https://zoo-animal-api.herokuapp.com/animals/rand').then(x => x.json()).then(result => {
    //set nama hadiah reward
    let text = document.createElement('h1')
    text.textContent = result.name

    //set gambar hadiah
    let img = new Image(200, 200)
    img.src = result.image_link

    //set element
    rewardImage.appendChild(img)
    rewardImage.appendChild(text)
  })
}

function winner1() {
  if (box1.textContent == box2.textContent && box1.textContent == box3.textContent) {
    let Uang = sessionStorage.getItem('uang')
    Uang = parseInt(Uang)
    Uang = Uang + 20000
    Duit.textContent = "Uang anda RP." + Uang
    
    // console.log('win')
    tot_Bonus = 100 * bonus
    pointAkun = pointAkun + 100 + tot_Bonus

    sessionStorage.setItem('point', pointAkun)
    sessionStorage.setItem('uang',Uang)
    let akunPoint = sessionStorage.getItem('point')
    point.textContent = "point : " + pointAkun

    reward()

    location.href = "#reward"
  } else {
    // console.log('lose')
    let Uang = sessionStorage.getItem('uang')
    Uang = parseInt(Uang)
    Uang = Uang - 10000
    Duit.textContent = "Uang anda RP." + Uang
    sessionStorage.setItem('uang',Uang)
    notifikasi.style.display = "block"
    bonus = bonus + 0.1
  }
}

function winner2() {
  if (box1.textContent == box2.textContent && box1.textContent == box3.textContent && box1.textContent == box4.textContent) {
    // console.log('win')
    let Uang = sessionStorage.getItem('uang')
    Uang = parseInt(Uang)
    Uang = Uang + 40000

    Duit.textContent = "Uang anda RP." + Uang
    tot_Bonus = 100 * bonus
    pointAkun = pointAkun + 100 + tot_Bonus
    sessionStorage.setItem('point', pointAkun)
    let akunPoint = sessionStorage.getItem('point')
    point.textContent = "point : " + pointAkun
    reward()
    location.href = "#reward"
  } else {
    // console.log('lose')
    let Uang = sessionStorage.getItem('uang')
    Uang = parseInt(Uang)
    Uang = Uang - 20000
    sessionStorage.setItem('uang',Uang)
    Duit.textContent = "Uang anda RP." + Uang
    notifikasi.style.display = "block"
  }
}

function winner3() {
  if (box1.textContent == box2.textContent && box1.textContent == box3.textContent && box1.textContent == box4.textContent && box1.textContent == box5.textContent) {
    // console.log('win')
    let Uang = sessionStorage.getItem('uang')
    Uang = parseInt(Uang)
    Uang = Uang + 50000 
    sessionStorage.setItem('uang',Uang)
    Duit.textContent = "Uang anda RP." + Uang
    tot_Bonus = 100 * bonus
    pointAkun = pointAkun + 100 + tot_Bonus
    sessionStorage.setItem('point', pointAkun)
    let akunPoint = sessionStorage.getItem('point')
    point.textContent = "point : " + pointAkun
    reward()
    location.href = "#reward"
  } else {
    // console.log('lose')
    let Uang = sessionStorage.getItem('uang')
    Uang = parseInt(Uang)
    Uang = Uang - 25000
    sessionStorage.setItem('uang',Uang)
    Duit.textContent = "Uang anda RP." + Uang
    notifikasi.style.display = "block"
  }
}

function start1() {
  notifikasi.style.display = "none"

  acak.Rolls1

  //selama
  rolling = setInterval(function () {
    const result = dice1()
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
  }, 100)
  //ketika
  // setTimeout(function () {
  //    clearInterval(rolling)
  //    winner()
  // },300)
}

function finish1(){
  acak.stoproll1

  setTimeout(function() {
     clearInterval(rolling)
     winner1()
  })
}

function start2() {
  notifikasi.style.display = "none"

  acak.Rolls2

  //selama
  rolling = setInterval(function () {
    const result = dice2()
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
    box4.textContent = result[3]
  }, 100)
}

function finish2(){
  acak.stoproll2

  setTimeout(function() {
     clearInterval(rolling)
     winner2()
  })
}

function start3() {
  notifikasi.style.display = "none"

  acak.Rolls3

  //selama
  rolling = setInterval(function () {
    const result = dice3()
    box1.textContent = result[0]
    box2.textContent = result[1]
    box3.textContent = result[2]
    box4.textContent = result[3]
    box5.textContent = result[4]
  }, 100)
}

function finish3(){
  acak.stoproll3

  setTimeout(function() {
     clearInterval(rolling)
     winner3()
  })
}

onload = function () {
  const token = sessionStorage.getItem('token')
  let poin = this.sessionStorage.getItem('point')
  

  if (token && token != null) {
    registerForm.style.display = "none"
    logoutForm.style.display = "block"
    startSection.style.display = "block"
    rewardSection.style.display = "block"
    profil.textContent = token
    point.textContent = "point : " + poin
    Duit.textContent = "Uang anda sekarang RP." + Uang
  } else {
    registerForm.style.display = "block"
    logoutForm.style.display = "none"
  }

}

function register() {
  LV1.style.display = "block"
  LV2.style.display = "block"
  LV3.style.display = "block"

  player.username = username.value
  uang.TopUp = money.value
  player.register
  uang.register
}

function logout() {
  player.logout
}

function levl1(){
  box1.style.display = "block"
  box2.style.display = "block"
  box3.style.display = "block"
  box4.style.display = "none"
  box5.style.display = "none"

  tombolmulai1.style.display = "block"
  tombolmulai2.style.display = "none"
  tombolmulai3.style.display = "none"

  box1.textContent = Level1[0]
  box2.textContent = Level1[1]
  box3.textContent = Level1[2]

  setTimeout(function(){
    location.href="#start"
  },500)
}

function levl2(){
  box1.style.display = "block"
  box2.style.display = "block"
  box3.style.display = "block"
  box4.style.display = "block"
  box5.style.display = "none"

  tombolmulai1.style.display = "none"
  tombolmulai2.style.display = "block"
  tombolmulai3.style.display = "none"

  box1.textContent = Level2[0]
  box2.textContent = Level2[1]
  box3.textContent = Level2[2]
  box4.textContent = Level2[3]
  
  setTimeout(function(){
    location.href="#start"
  },500)
}

function levl3(){
  box1.style.display = "block"
  box2.style.display = "block"
  box3.style.display = "block"
  box4.style.display = "block"
  box5.style.display = "block"

  tombolmulai1.style.display = "none"
  tombolmulai2.style.display = "none"
  tombolmulai3.style.display = "block"

  box1.textContent = Level3[0]
  box2.textContent = Level3[1]
  box3.textContent = Level3[2]
  box4.textContent = Level3[3]
  box5.textContent = Level3[4]
  
  setTimeout(function(){
    location.href="#start"
  },500)
}

function convert(){
  let Uang = sessionStorage.getItem('uang')
  Uang = parseInt(Uang)
  let poin = this.sessionStorage.getItem('point')
  poin = poin - 1000
  Uang = Uang + 100
  sessionStorage.setItem('uang',Uang)
  sessionStorage.setItem('point',poin)
  point.textContent = "point : " + poin
  Duit.textContent = "Uang anda sekarang RP." + Uang
}