import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { formatDate } from "@/utils/formatDate";
import { formatYearAgo } from "@/utils/formatYearAgo";

function CentralizeApi(labelApi) {
  const currentDate = new Date();
  const today = formatDate(currentDate);
  const yearAgoToday = formatYearAgo(currentDate);
  const { isLoading, isError, data } = useQuery({
    queryKey: [labelApi],
    queryFn: async () => {
      const requests = labelApi.map((url) =>
        axios.get(
          `${process.env.NEXT_PUBLIC_URL}/overview/Cexs?start=${yearAgoToday}&end=${today}&label=${url}`,
        ),
      );
      const responses = await Promise.all(requests);

      const responseData = responses.map((response) => response.data);
      return responseData;
    },
  });

  return { data, isLoading, isError };
}

export default CentralizeApi;
