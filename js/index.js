let that;
class res {
    constructor(id) {
        that = this;
        this.main = document.querySelector(id);
        this.two = this.main.querySelector(".two");
        this.win = this.two.querySelector(".win");
        this.win1 = this.two.querySelector(".win1");
        this.winbuttom1 = this.win1.querySelector(".winbuttom1");
        this.winbuttom2 = this.win1.querySelector(".winbuttom2")
        this.firstbottom = this.main.querySelector(".firstbottom")
        this.buttom = this.two.querySelector(".buttom");
        this.bottom2 = this.main.querySelector(".bottom2");
        this.bottom3 = this.main.querySelector(".bottom3");
        this.bottom4 = this.main.querySelector(".bottom4");
        this.bottom5 = this.main.querySelector(".bottom5")
        this.init()
    }
    update() {
        this.bottoms = this.firstbottom.querySelectorAll(".bottom1");
        this.imgs = this.bottom2.querySelectorAll('img');
        this.inputs = this.win1.querySelectorAll("input");
        this.is = this.win1.querySelectorAll("i")
    }
    init() {
            this.update();
            this.buttom.onclick = this.clear;
            this.bottom3.onload = setTimeout(this.upload, 3000);
            this.bottom4.onload = setTimeout(this.userload, 2000);

            for (let j = 0; j < this.imgs.length; j++) {
                this.imgs[j].index = j
                this.imgs[j].onclick = this.user


            }
            for (let i = 0; i < this.bottoms.length; i++) {
                this.bottoms[i].onclick = this.useronclick
            }
            for (let k = 0; k < this.inputs.length; k++) {

                this.inputs[k].onclick = this.chaneonclick;
                this.inputs[k].key = k;
            }
            this.winbuttom1.onclick = this.deleonclick;
            this.winbuttom2.onclick = this.delete

        }
        //遮罩层事件
    clear() {
            that.two.className = "none";

        }
        //等待着进度条
    upload() {
            that.bottom3.style.background = "#3366FF"

        }
        //提示有客人事件及客人上餐桌
    userload() {
            that.bottom4.style.display = "none";

        }
        //客人上餐桌
    user() {
            that.bottoms[this.index].classList.add("list");
            let img1 = document.createElement("img");
            img1.src = that.imgs[this.index].src;

            that.bottoms[this.index].appendChild(img1);
            that.main.removeChild(that.bottom2);
            that.main.removeChild(that.bottom3);



        }
        //点餐
    useronclick() {
            that.win.style.display = "none";
            that.win1.style.display = "block";
            that.two.className = "two"

        }
        //点餐完毕
    deleonclick() {
            that.two.className = "none";
            that.bottom5.style.display = "block";
            that.bottom5.onload = setTimeout(() => {
                that.bottom5.style.display = "none";
            }, 2000);
        }
        //点击不吃
    delete() {
            that.two.className = "none"
                //未完待续

        }
        //菜单上选中菜品后
    chaneonclick() {
        let date = that.inputs[this.key].value;

        for (let j = 0; j < that.imgs.length; j++) {
            that.bottoms[j].innerHTML += "<span>" + date + "</span>"

        }

    }


}
new res("#diancan")