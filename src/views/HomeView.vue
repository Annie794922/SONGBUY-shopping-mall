<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators d-none d-lg-flex">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-group">
      <div class="carousel-inner d-none d-lg-block">
        <div class="carousel-item active">
          <img src="../assets/images/carousel/background-1.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/images/carousel/background-2.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/images/carousel/background-3.jpg" class="d-block w-100" alt="...">
        </div>
      </div>
      <div class="RWD-slogan-background d-block d-lg-none"></div>
      <div class="carousel-slogan">
        <h1>SONG BUY，將零錢轉變成您心愛的生活點滴。</h1>
        <h2>SONG BUYで、お金によりお気に入り生活グッズを購入しよう。</h2>
        <h2>Get your beloved daily goods with money at SONG BUY.</h2>
      </div>
    </div>
    <button class="carousel-control-prev d-none d-lg-flex" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next d-none d-lg-flex" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="homepage-block">
        <div class="title">
          <h3>理念<br>IDEA</h3>
        </div>
        <div class="idea-content">
          SONG BUY是作者為了練習寫程式而<strong>虛擬出來的購物網站</strong>，<br>
          因此在這裡可以看到各種您知道的用品，<br>
          若是在SONG BUY沒有看到您腦海中閃過的商品，<br>
          那麼真相只有一個，<br>
          就是作者剛好沒想到它所以沒有放上來。<br>
          <br>
          請隨意瀏覽SONG BUY，<br>
          若有什麼問題還請不吝指教，<br>
          感謝您的蒞臨！<br>
          <hr>
          SONG BUY is a <strong>VIRTUAL shopping-mall website</strong> that the owner creates for practicing coding.<br>
          Therefore, you would see a lot of daily goods you has known here.<br>
          If you don't see the goods you think of on SONG BUY, there will be the only truth that the owner didn't think of the goods what you think.<br>
          <br>
          Please relax to look through SONG BUY.<br>
          If you notice any problems, please do not hesitate to contact with me.<br>
          Thank you for your coming.<br>
        </div>
      </div>
      <div class="homepage-block">
        <div class="title">
          <h3>特點<br>SPECIAL</h3>
        </div>
        <div class="special-content">
          <div class="special-group">
            <div class="special-block" @click="showDetails(1)">
              <h4 v-show="clickedSpecialBox.indexOf(1) === -1">商品應有盡有</h4>
            </div>
            <div class="special-details" v-show="clickedSpecialBox.indexOf(1) > -1">
              <span class="close" @click="closeBox(1)">X</span>
              <h4>商品應有盡有</h4>
              <hr>
              <span>
                無論什麼樣的商品，它們都有可能出現在SONG BUY。
              </span>
            </div>
          </div>
          <div class="special-group">
            <div class="special-block" @click="showDetails(2)">
              <h4 v-show="clickedSpecialBox.indexOf(2) === -1">基本購物功能</h4>
            </div>
            <div class="special-details" v-show="clickedSpecialBox.indexOf(2) > -1">
              <span class="close" @click="closeBox(2)">X</span>
              <h4>基本購物功能</h4>
              <hr>
              <span>
                例如加入購物車、編輯商品數量、移除商品等功能，目前持續優化中。
              </span>
            </div>            
          </div>
          <div class="special-group">
            <div class="special-block" @click="showDetails(3)">
              <h4 v-show="clickedSpecialBox.indexOf(3) === -1">永遠不會出貨</h4> 
            </div>
            <div class="special-details" v-show="clickedSpecialBox.indexOf(3) > -1">
              <span class="close" @click="closeBox(3)">X</span>
              <h4>永遠不會出貨</h4>
              <hr>
              <span>
                由於這是練習用的購物網站也沒有收錢，不會出貨很正常。
              </span>
            </div>
          </div>
          <div class="special-group">
            <div class="special-block" @click="showDetails(4)">
              <h4 v-show="clickedSpecialBox.indexOf(4) === -1">其他網購平台</h4>
            </div>
            <div class="special-details" v-show="clickedSpecialBox.indexOf(4) > -1">
              <span class="close" @click="closeBox(4)">X</span>
              <h4>其他網購平台</h4>
              <hr>
              <span>
                本網頁頁尾有多個網購平台的連結僅供參考，若失心瘋購買請恕無法負責。
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
export default {
  data() {
    return {
      clickedSpecialBox: [],
    }
  },
  methods: {
    showDetails(boxNo) {
      const specialArray = this.clickedSpecialBox.indexOf(boxNo);
      if (specialArray === -1) {
        this.clickedSpecialBox.push(boxNo);
        // console.log('showDetails: ' + this.clickedSpecialBox);
        return;
      } else if (specialArray > -1) {
        // console.log('showDetails: ' + this.clickedSpecialBox);
        return;
      }
    },
    closeBox(boxNo) {
      const specialArray = this.clickedSpecialBox.indexOf(boxNo);
      if (specialArray > -1) {
        this.clickedSpecialBox.splice(specialArray, 1);
        // console.log('closeBox: '+this.clickedSpecialBox);
        return;
      } else return;
    }
  }
}
</script>
<style scoped lang="scss">
  @import "../assets/scss/main.scss";

  .carousel {
    margin-bottom: 50px;
    z-index: 0; /* 配合navbar設定，避免輪播器的操作鍵在navbar之上 */
  }

  .carousel-group {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .RWD-slogan-background {
    width: 100%;
    height: 420px;
    background-color: $lightPink;
  }

  .carousel-slogan {
    position: absolute;
    color: $white;
    text-align: center;
  }

  .carousel-slogan h1 {
    font-weight: bold;
    margin-bottom: 25px;
  }

  .carousel-slogan h2 {
    font-size: 26px;
    font-weight: bold;
  }

  @media screen and (max-width: 992px) {
    .carousel-slogan {
      color: $darkPink;
      margin-top: 43px; /* 預留navbar佔住的空間，RWD下的slogan視覺上才會置中 */
    }

    .carousel-slogan h1 {
      font-size: 26px;
    }

    .carousel-slogan h2 {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 576px) {
    .RWD-slogan-background {
      height: 360px;
    }

    .carousel-slogan h1 {
      font-size: 20px;
    }

    .carousel-slogan h2 {
      font-size: 14px;
    }
  }

  .homepage-block {
    width: 930px;
    background-color: $white;
    border-radius: 30px;
    margin: 30px auto;
    padding: 0;
  }

  .homepage-block .title {
    width: 150px;
    height: 150px;
    background-color: $lightPink;
    color: $darkPink;
    border-radius: 30px 0 30px 0;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .homepage-block .title h3 {
    font-weight: bold;
  }

  .homepage-block .idea-content {
    width: 700px;
    margin: 50px auto 70px auto;
    color: $darkPink;
  }

  .homepage-block .idea-content hr {
    color: $gray;
    height: 2px;
    margin: 30px 0;
  }

  @media screen and (max-width: 992px) {
    .homepage-block {
      width: 85%;
    }

    .homepage-block .title {
      width: 120px;
      height: 120px;
    }

    .homepage-block .title h3 {
      font-size: 22.5px;
    }

    .homepage-block .idea-content {
      width: 82%;
    }
  }

  .homepage-block .special-content {
    width: 800px;
    margin: 50px auto 70px auto; /* 物件本身要有width設margin: 0 auto才能對外容器置中 */
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* 容器內部的置中 */
  }

  .special-group {
    position: relative;
  }

  .special-block {
    width: 300px;
    height: 300px;
    color: $gray;
    background-color: $lightPink;
    border-radius: 30px;
    box-shadow: 8px 8px 12px $gray; 
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .special-block:hover {
    color: $darkPink;
    transition: 0.5s;
    cursor: pointer;
  }

  .special-block h4 {
    font-weight: bold;
  }

  .special-details {
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: $gray;
    border-radius: 30px;
    opacity: 0.7;
    margin: 30px;
    top: 0;
    padding: 20px;
  }

  .close {
    float: right;
    cursor: pointer;
  }

  .special-details h4 {
    text-align: center;
    margin-top: 25px;
  }

  @media screen and (max-width: 992px) {
    .homepage-block .special-content {
      width: 82%;
    }

    .special-block {
      width: 265px;
      height: 265px;
    }

    .special-details {
      width: 265px;
      height: 265px;
    }
  }
</style>
