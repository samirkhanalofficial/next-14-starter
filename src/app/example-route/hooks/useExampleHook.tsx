"use client";
import { apiUrl } from "@/global/config/config";
import useFetch from "@/global/hooks/useFetch.hook";

export function useExampleService<RESPONSETYPE, BODYTYPE>() {
  const { fetchData, response, error, loading } = useFetch<
    RESPONSETYPE,
    BODYTYPE
  >();
  async function getExampleById(id: string) {
    return fetchData({
      url: `${apiUrl}/example/${id}`,
      method: "GET",
      showErrorInToast: false,
      requiresAuthentication: false,
    });
  }

  async function deleteExampleById(id: string) {
    return fetchData({
      url: `${apiUrl}/example/delete/${id}`,
      method: "DELETE",
      showErrorInToast: true,
      requiresAuthentication: false,
    });
  }

  async function getAllExamples(page: number, limit: number) {
    return fetchData({
      url: `${apiUrl}/example/all?page=${page}&limit=${limit}`,
      method: "GET",
      showErrorInToast: false,
      requiresAuthentication: false,
    });
  }

  return {
    getExampleById,
    getAllExamples,
    deleteExampleById,
    response,
    error,
    loading,
  };
}
