import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type CustomerReview, MenuCategory, type MenuItem } from "../backend.d";
import { useActor } from "./useActor";

export function useMenuItems() {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menuItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenuItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useMenuByCategory(category: MenuCategory) {
  const { actor, isFetching } = useActor();
  return useQuery<MenuItem[]>({
    queryKey: ["menuItems", category],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getMenuByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCustomerReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<CustomerReview[]>({
    queryKey: ["customerReviews"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCustomerReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitCakeOrder() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      customerName: string;
      phoneNumber: string;
      cakeType: string;
      eventDate: string;
      servings: bigint;
      specialRequirements: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitCakeOrderInquiry(
        data.customerName,
        data.phoneNumber,
        data.cakeType,
        data.eventDate,
        data.servings,
        data.specialRequirements,
      );
    },
  });
}

export function useAddReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      customerName: string;
      rating: bigint;
      comment: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.addCustomerReview(
        data.customerName,
        data.rating,
        data.comment,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customerReviews"] });
    },
  });
}

export { MenuCategory };
