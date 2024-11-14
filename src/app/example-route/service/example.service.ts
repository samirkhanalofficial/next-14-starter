import { apiUrl } from "@/global/config/config";
import useFetch from "@/global/hooks/useFetch.hook";
import { exampleType } from "../types/example.type";

export function GetExampleById(id: string) {
  return useFetch<exampleType, undefined>({
    url: `${apiUrl}/example/${id}`,
    method: "GET",
    showErrorInToast: false,
    requiresAuthentication: false,
  });
}
