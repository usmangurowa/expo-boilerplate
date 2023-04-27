import storage from "./storage";
import { create } from "apisauce";
const api = create({
  baseURL: "https://api.cloudinary.com/v1_1/dkit46bd0/image/upload",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const handleUpdateToken = (token: string) => storage.set("token", token);

const handleGetToken = () => storage.getString("token");

const handleRemoveToken = () => storage.delete("token");

const uploadImage = (form: any) =>
  new Promise<any>((resolve, reject) => {
    api
      .post("https://api.cloudinary.com/v1_1/dkit46bd0/image/upload", form)
      .then((res) => {
        if (res.ok) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });

export { handleUpdateToken, handleGetToken, handleRemoveToken, uploadImage };
