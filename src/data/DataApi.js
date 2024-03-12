import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDataApi = (url, name) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [name],
    queryFn: async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_URL}/${url}`,
        );
        return response.data;
      } catch (error) {
        throw new Error("Error occurred while fetching data");
      }
    },
  });

  return { data, isLoading, isError };
};

export default useDataApi;
