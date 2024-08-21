import plupload from 'plupload-es6';
import {computed, ref} from 'vue';
import {throttle} from 'lodash';

export default function useUploader() {
  const uploader = ref(null);

  const files = ref([]);

  const uploading = ref(false);

  const uploaderInitialized = ref(false);

  const error = ref(null);

  const isError = computed(() => error.value !== null);

  const initUploader = (config, multiple = true, autoStartUpload = true) => {

    config.init = {
      Init: () => {
        uploaderInitialized.value = true;
      },
      FilesAdded: (up, addedFiles) => {
        if ( multiple ) {
          addedFiles.forEach(file => {
            files.value.push(file);
          });
        } else {
          files.value = [addedFiles[addedFiles.length - 1]];
        }

        console.log('FilesAdded', files.value)

        if ( uploading.value === false && autoStartUpload ) {
          startUpload();
        }
      },
      UploadProgress: (up, upFile) => {
        updateFile(upFile);
      },
      FileUploaded: (up, upFile, result) => {
        // console.log('file uploaded', result.response);
        files.value = files.value.map(f => {
          return f.id === upFile.id ? ({
            ...f,
            uploadedFile: JSON.parse(result.response)?.data[config.file_data_name]?.[0],
          }) : f;
        });
      },
      UploadComplete: () => {
        uploading.value = false;
      },
      Error: (up, e) => {
        console.warn('plUploader error', e);
        uploading.value = false;
        error.value = e;
      },
    };

    uploader.value = new plupload.plupload.Uploader(config);
    uploader.value.init();
  };

  const uploadedFiles = computed(() => {
    return files.value.filter(file => file.percent === 100);
  });

  const proceedFiles = computed(() => {
    return files.value.filter(file => file.percent < 100);
  });

  const totalBytes = computed(() => {
    return files.value.reduce((total, file) => total + parseInt(file?.size || 0), 0);
  });

  const loadedBytes = computed(() => {
    return files.value.reduce((total, file) => total + parseInt(file?.loaded || 0), 0);
  });

  const loadedPercent = computed(() => {
    return Math.round((loadedBytes.value || 0) * 100 / (totalBytes.value || 1));
  });

  const updateFile = throttle((updatedFile) => {
    files.value = files.value.map(file => {
      return file.id === updatedFile.id ? updatedFile : file;
    });
  }, 500);

  const uploadComplete = computed(() => {
    return files.value.length > 0 && loadedPercent.value === 100 && !isError.value;
  });

  const startUpload = () => {
    uploader.value.start();
    uploading.value = true;
  };

  const clear = () => {
    cancelUpload();
    files.value.forEach(file => {
      removeFile(file);
    });
    files.value = [];
  };

  const cancelUpload = () => {
    uploading.value = false;
    removeNotUploadedFiles();
    uploader.value.stop();
  };

  const removeFile = (file) => {
    uploader.value.removeFile(file.id);
    files.value = files.value.filter(f => f.id !== file.id);
    if ( proceedFiles.value.length === 0 ) {
      uploading.value = false;
    }
  };

  const removeNotUploadedFiles = () => {
    files.value = files.value.filter(f => f.percent === 100);
  };

  return {
    uploader,
    files,
    uploading,
    uploadedFiles,
    proceedFiles,
    totalBytes,
    loadedBytes,
    loadedPercent,
    uploadComplete,
    error,
    isError,
    initUploader,
    startUpload,
    cancelUpload,
    removeFile,
    clear,
  };

}