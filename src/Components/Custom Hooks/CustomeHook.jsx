import axios from "axios";
import { useState } from "react";

export const getApi = (url) => {
    return fetch(url).then(resp => {
        if (!resp.ok) return resp.statusText;
        else return resp.json();
    }).catch(error => { return error })
}

export const PostApi = (url, msg, data) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(resp => {
        if (!resp.ok) {
            alert(resp.statusText);
            return resp.statusText;
        }
        else {
            alert(msg);
        }
    }).catch(error => { return error })
}

export const HitApi = async (url, successMessage) => {
    try {
        const response = await axios.post(url);
        console.log(response.data);
        alert(successMessage);
    } catch (error) {
        console.error('Error hitting API:', error.response ? error.response.data : error.message);
        alert(error.response ? error.response.data.message : error.message);
    }
};

export const DeleteApi = async (url, successMessage) => {
    try {
        const response = await axios.delete(url);
        console.log(response.data);
        alert(successMessage);
    } catch (error) {
        console.error('Error hitting API:', error.response ? error.response.data : error.message);
        alert(error.response ? error.response.data.message : error.message);
    }
}

export const PutApi = async (url, successMessage) => {
    try {
        const response = await axios.put(url);
        console.log(response.data);
        alert(successMessage);
    } catch (error) {
        console.error('Error hitting API:', error.response ? error.response.data : error.message);
        alert(error.response ? error.response.data.message : error.message);
    }
};

export const EditApi = async (url, Data, successMessage) => {
    try {
        const response = await axios.put(url, Data);
        console.log(response.data);
        alert(successMessage);
    } catch (error) {
        console.error('Error hitting API:', error.response ? error.response.data : error.message);
        alert(error.response ? error.response.data.message : error.message);
    }
};



export const useImageUploader = () => {
    const [uploadedData, setUploadedData] = useState({});
  
    const handleImageUpload = (event, key) => {
      const file = event.target.files[0];
      if (file) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uglykgfd");
        data.append("cloud_name", "duzwys877");
  
        fetch("https://api.cloudinary.com/v1_1/duzwys877/image/upload", {
          method: "POST",
          body: data,
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              console.error("Upload failed:", data.error.message);
            } else {
              console.log("Upload successful!", data?.url);
  
              // Update the state with key-value pair
              setUploadedData((prevState) => ({
                ...prevState,
                [key]: data?.url,
              }));
            }
          })
          .catch((error) => {
            console.error("Error uploading file:", error);
          });
      }
    };
  
    return {
      uploadedData,
      handleImageUpload,
    };
  };