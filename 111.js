let Mobile = function(name){
    this.name = name;
    this.pin = 100;
    this.tin_dang_soan_thao = "";
    this.tin_den = "";
    this.tin_da_gui = "";
    this.status = true;
    this.isTurnOn = function(){
        if(this.status){
            return true;
        }else{
            return false;
        }
    }
    this.turnOnOrOff = function(){
        if(isTurnOn()){
            status = false;
        }
        else{
            status = true;
        }
    }
    this.charge = function(){
        if(this.pin<20){
            alert("pin yeu");
        }
        this.pin+=1;
        if(this.pin==100){
            alert("da sac day!!");
        }
    }
    this.CreateNewMessage = function(){
        if(this.pin>=0){
            let new_message = prompt(this.name+" Nhập vào tin nhắn");
            this.tin_dang_soan_thao = this.name+": "+new_message;
            this.pin-=1;
        }
    }
    this.GuiTinNhan = function(mobile){
        if(this.pin>=0){
            this.tin_da_gui = this.tin_dang_soan_thao;
            mobile.tin_den = this.tin_da_gui;
            this.pin-=1;
        }
    }
    this.XemTinDen = function(){
        if(this.pin>=0){
            console.log(this.tin_den);
            this.pin-=1;
        }

    }
    this.XemTinDaGui = function(){
        if(this.pin>=0){
            console.log(this.tin_da_gui);
            this.pin-=1;
        }
    }
}
let iphone = new Mobile("Iphone");
let nokia = new Mobile("Nokia");
iphone.CreateNewMessage();
iphone.GuiTinNhan(nokia);
nokia.XemTinDen();