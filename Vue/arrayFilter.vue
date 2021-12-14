<template>
  <div>
    <h1>人員列表</h1>
    <input type="text" placeholder="請輸入名字" v-model="keyWord" />
    <ul>
      <li v-for="(item, idx) of fiterPersons" :key="idx">
        {{ item.name }}--{{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWord: "",
      persons: [
        {
          id: 001,
          name: "羽山秋人",
          age: 19,
          sex: "男",
        },
        {
          id: 002,
          name: "倉田紗南",
          age: 13,
          sex: "女",
        },
        {
          id: 003,
          name: "前田更紗",
          age: 14,
          sex: "女",
        },
        {
          id: 004,
          name: "佐伯文",
          age: 20,
          sex: "男",
        },
      ],
      keyWord: "",
      fiterPersons: [],
    };
  },
  computed: {
    filPersons() {
      this.persons.filter((p) => {
        return p.name.indexOf(this.keyWord) !== -1;
      });
    },
  },
  watch: {
    //   filter 會更改原 arr
    keyWord: {
      // immediate 立刻執行 val為 ''
      // 'acvdsf'.indexOf('') --> 為 0
      immediate: true,
      handler(val) {
        this.fiterPersons = this.persons.filter((p) => {
          return p.name.indexOf(val) !== -1;
        });
      },
    },
  },
};
</script>

<style></style>
