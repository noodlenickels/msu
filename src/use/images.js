import axios from 'axios';
import {getDownloadURL, ref as storageRef} from "firebase/storage";
import {storage} from "@/firebase";

export default function usePhoto() {

  async function getPhotoUrl(imagePath) {
    try {
      const imageRef = storageRef(storage, 'root_files' + imagePath);  // Создаем ссылку на файл в Firebase Storage
      const url = await getDownloadURL(imageRef);  // Получаем URL для изображения
      console.log(url)
      return url;
    } catch (error) {
      console.error("Ошибка при получении URL изображения:", error);
      return '/images/photo.jpg';  // Возвращаем дефолтное изображение в случае ошибки
    }
  }

  return {getPhotoUrl};
}