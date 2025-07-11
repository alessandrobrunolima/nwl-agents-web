import { useQuery } from '@tanstack/react-query';

type GetRoomsResponse = Array<{
  id: string;
  name: string;
  questionsCount: number;
  createdAt: string;
}>;

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/rooms');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result: GetRoomsResponse = await response.json();
      return result;
    },
  });
}
