 handInit({ commit }) {
          const res = apiGetPhotoList();
          return res.then((response) => {
            commit("init", response.data);
            return response.data;
          });
        },
    // ------------- -------------------------------------->
    // 以 async await方式改寫 return 的方式
     async handInit({ commit }) {
              try {
                const res = await apiGetPhotoList();
                commit("setPhoto", res.data);
                return res.data;
              } catch (error) {
                console.error(error);
              }
            },