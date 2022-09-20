import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import allProducts from "../../public/jsonData/products.json"

export default createStore({
  state: {
    allProducts: allProducts,
    selectedGood: {},
    suggestedGoods: [],
    cartList: [],
    newOrderInfo: {}, // 最新成立的訂單
    webAllOrders: [], // 全站累計總訂單資料
  },
  getters: {
    currentAmountTotal(state) {
      let amountTotal = 0;
      for (let i=0; i<state.cartList.length; i++) {
        amountTotal += state.cartList[i].number;
      }
      return amountTotal;
    },
    currentPriceTotal(state) {
      let priceTotal = 0;
      for (let i=0; i<state.cartList.length; i++) {
        priceTotal += state.cartList[i].price * state.cartList[i].number;
      }
      return priceTotal;
    }
  },
  mutations: {
    selectedItem(state, data) {
      const productId = data;
      const singleItem = state.allProducts.filter(function(item) {
        return item.id === productId;
      })
      state.selectedGood = singleItem;
    },
    suggestedItems(state, data) {
      state.suggestedGoods = [];
      const selectedId = data.productId;
      const sameCategory = data.category;
      const sameCategoryGoods = state.allProducts.filter(function(item) {
        return item.category === sameCategory && item.id !== selectedId;
      });

      for (let i=0; i<3; i++) {
        const randomIndex = Math.floor(Math.random()*sameCategoryGoods.length);
        const suggestedItem = sameCategoryGoods[randomIndex];
        sameCategoryGoods.splice(randomIndex, 1);
        state.suggestedGoods.push(suggestedItem);
      }
    },
    addCart(state, data) {
      const addProduct = data.product;
      const addNum = data.number;

      // 加進全新商品 & 在購物車編輯數量後回商品單一頁選擇數量的情況
      if ( state.cartList.indexOf(addProduct) === -1 ) {
        let newProduct = true;
        state.cartList.map(function(item) {
          if ( item.id === addProduct.id ) {
            item.number += addNum;
            item.sum = item.price * item.number;
            newProduct = false;

            if ( item.number > item.quantity ) {
              item.number -= addNum;
              item.sum = item.price * item.number;
              alert('本商品目前選購數量已達庫存上限，請重新選擇！');
              return;
            };
            alert('商品已加入購物車！');
            // console.log(state.cartList);
            return item;
          }
        });
        if ( newProduct === true ) {
          addProduct.number = addNum;
          addProduct.sum = addProduct.price * addProduct.number;
          state.cartList.push(addProduct);
          alert('商品已加入購物車！');
          // console.log(state.cartList);
          return;
        }
      }
      // 加進商品後，在未編輯數量前提下直接加選同商品數量的情況
        else if ( state.cartList.indexOf(addProduct) > -1 ) {
        const existItemIndex = state.cartList.indexOf(addProduct);
        const inCartItem = state.cartList[existItemIndex];
        const addedNum = inCartItem.number += addNum; /* 就算只是先定義變數也會將數量進行運算 */

        if ( addedNum > inCartItem.quantity ) {
          inCartItem.number -= addNum; /* 將前面定義時加進來的數量減回去 */
          alert('本商品目前選購數量已達庫存上限，請重新選擇！');
          return;
        } else if ( addedNum <= inCartItem.quantity ) {
          inCartItem.sum = inCartItem.price * addedNum;
          alert('商品已加入購物車！');
          // console.log(state.cartList);
          return;
        }
      }
    },
    editItemNumber(state, data) {
      const editItemIndex = state.cartList.indexOf(data.product);
      const editProduct = state.cartList[editItemIndex];
      if ( data.type === 'minus' ) {
        editProduct.number--;
        editProduct.sum = editProduct.price * editProduct.number;
        if ( editProduct.number === 0 ) {
          state.cartList.splice(editItemIndex, 1);
          return;
        }
        // console.log(state.cartList);
      } else if ( data.type === 'add' ) {
        if ( editProduct.number < editProduct.quantity ) {
          editProduct.number++;
          editProduct.sum = editProduct.price * editProduct.number;
          editProduct.number = (editProduct.number > editProduct.quantity) ? editProduct.quantity : editProduct.number;
          return;
        }
        else if (editProduct.number === editProduct.quantity) {
          alert('選購數量已達庫存上限！');
          return;
        }
        // console.log(state.cartList);
      }
    },
    removeItem(state, data) {
      const deleteItemIndex = state.cartList.indexOf(data);
      state.cartList.splice(deleteItemIndex, 1);
      return;
    },
    createOrder(state, data) {
      state.webAllOrders.push(data);

      let newOrderNo = 0;
      for (let i=0; i<state.webAllOrders.length; i++) {
        data.orderNo = '00000' + (newOrderNo += 1);
      }
      state.newOrderInfo = data;
      state.cartList = [];
      // console.log('newOrderInfo: ');
      // console.log(state.newOrderInfo);
      // console.log('webAllOrders: ');
      // console.log(state.webAllOrders);
      return;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState ()]
})
