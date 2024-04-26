import { defineStore } from "pinia";
import axios from "axios";

export const usePageStore = defineStore("pages", {
  state: () => ({
    pages: [],
  }),
  actions: {
    async getPages() {
      try {
        const response = await useNuxtApp().$axios.get(
          "http://localhost:3000/pages"
        );
        this.pages = response.data;
        console.log(this.pages);
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    },
    async getPagesById(id) {
      try {
        const response = await axios.get(`http://localhost:3000/pages/${id}`);
        this.pages = response.data;
        console.log(this.pages);
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    },
  },
});
