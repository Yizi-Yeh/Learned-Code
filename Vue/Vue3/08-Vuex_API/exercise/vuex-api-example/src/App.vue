<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {

    const store = useStore();

    const handImgLoad = (imgArr) => {
      let i = 0
      imgArr.forEach(img => {
          const imgs = new Image()
          imgs.src = img.url
          // 圖片載入完成後
          imgs.onload = ()=>{
            i++
            store.dispatch('handLoadState', i === imgArr.length)
          }
      });
    };

    const init = () => {
      // 確保在抓取 api 後
      // 改變 Loading 狀態
      // res.data ---> res ---> handImgLoad(res)
      store.dispatch('handInit').then(res=>{
        handImgLoad(res)
      })
    };

    onMounted(() => {
      init();
    });

    return {};
  },
};
</script>

<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
}
</style>
