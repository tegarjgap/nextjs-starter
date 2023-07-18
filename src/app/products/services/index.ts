import { getBaseUrl } from "@/lib/getBaseURL";

export async function getAllProduct() {
  console.log(getBaseUrl());
  const response = await fetch(`${getBaseUrl()}/api/products`);
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch all products");
  }

  return response.json();
}
