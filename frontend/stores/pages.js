import { defineStore } from "pinia";
import axios from "axios";

export const usePageStore = defineStore("pages", {
  state: () => ({
    pages: [],
    pageData: [],
  }),
  actions: {
    async getPages() {
      try {
        const response = await useNuxtApp().$axios.get("/pages");
        this.pages = response.data;
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    },
    async getPagesById(id) {
      try {
        const response = await useNuxtApp().$axios.get(`/pages/${id}`);
        this.pages = response.data;
      } catch (error) {
        console.error("Error fetching pages:", error);
      }
    },
  },
});
