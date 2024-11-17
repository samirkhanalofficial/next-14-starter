"use server";
import { apiUrl } from "@/global/config/config";

export function getExampleById(id: string) {
  return fetch(`${apiUrl}/example/${id}`)
    .then((res) => res.json())
    .catch(() => null);
}
