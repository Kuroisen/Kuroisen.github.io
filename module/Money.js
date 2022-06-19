class Money{
    constructor(){
        this._TopUp = 0
    }
    // setter method
    set TopUp(_TopUp){
        return this._TopUp = _TopUp
    }
    // getter method
    get TopUp(){
        return this._TopUp
    }
    get register(){
        sessionStorage.setItem('uang',this._TopUp)
        let a = sessionStorage.getItem('uang')
        Duit.textContent = "Uang Anda Rp." + a
    }
}