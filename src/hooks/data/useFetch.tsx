import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface IUseFetchResult {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  isLoading: boolean;
  isError: boolean;
}

const useFetch = (url: string, name: string): IUseFetchResult => {
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

export default useFetch;
