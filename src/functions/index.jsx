import axios from "axios";
import { API } from "../constants";

export async function GetAllPosts() {
  const res = await axios.get(`${API}/api/post`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}

export async function SendPost(form) {
  const res = await axios.post(`${API}/api/post`, form, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
}

export async function GetImages() {
  const res = await axios.get(`${API}/api/images`);
  return res;
}
