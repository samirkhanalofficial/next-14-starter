"use client";

import { useState } from "react";
import { requestMethod } from "../types/request-method.type";
import { toast } from "react-toastify";

export default function useFetch<RESPONSETYPE, BODYTYPE>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [response, setResponse] = useState<RESPONSETYPE | undefined>();

  async function fetchData({
    url,
    method,
    body,
    showErrorInToast = false,
    requiresAuthentication = false,
  }: {
    url: string;
    method: requestMethod;
    body?: BODYTYPE;
    showErrorInToast?: boolean;
    requiresAuthentication?: boolean;
  }) {
    try {
      setLoading(true);

      let headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (requiresAuthentication) {
        const token = localStorage.getItem("access_token");
        headers = {
          ...headers,
          Authorization: `Bearer ${token}`,
        };
      }
      let fetchOption: {
        method: requestMethod;
        headers: Record<string, string>;
        body?: string;
      } = {
        method,
        headers,
      };
      if (body) {
        fetchOption = {
          ...fetchOption,
          body: JSON.stringify(body),
        };
      }
      const res = await fetch(url, fetchOption);
      const parsedData = await res.json();
      if (!res.ok) {
        throw parsedData.message;
      }
      setResponse(parsedData);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err.toString());
      if (showErrorInToast) {
        toast.error(err);
      }
    } finally {
      setLoading(false);
    }
  }
  return {
    fetchData,
    loading,
    setLoading,
    error,
    setError,
    response,
    setResponse,
  };
}
