class Player{
    constructor(){
        this._username = ""
    }
    generateToken(){
        const random = ~~[Math.random()*1000]
        const token = this.username + random.toString()         
        return token
    }
    // setter method
    set username(_username){
        return this._username = _username
    }
    // getter method
    get username(){
        return this._username
    }

    get register(){
        sessionStorage.setItem('token', this.generateToken())
        // menampilkan profil pada web
        let akun = sessionStorage.getItem('token')
        let Point = sessionStorage.getItem('point')

        profil.textContent = akun
        score.textContent = "point : " + Point

        registerForm.style.display = "none"
        logoutForm.style.display = "block"
        startSection.style.display = "block"
        rewardSection.style.display = "block"
    }
    get logout(){
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('uang')
        location.reload()
    }
}