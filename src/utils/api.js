import axios from "axios";

export const Url = process.env.NEXT_PUBLIC_API_URL;
export const BaseUrl = `${process.env.NEXT_PUBLIC_API_URL}/deepanindia`;

export const instance = axios.create({
  baseURL: BaseUrl,
});