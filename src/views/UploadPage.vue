<template>
  <div class="h-screen bg-white">
    <vue2Dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
    ></vue2Dropzone>
  </div>
</template>

<script>
//import UploadComponent from "../components/UploadComponent";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "UploadPage",
  computed: {
    vue2Dropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
      },
    };
  },
};
</script>