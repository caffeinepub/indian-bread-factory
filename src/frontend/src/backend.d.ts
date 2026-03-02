import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CustomerReview {
    id: bigint;
    customerName: string;
    createdAt: Time;
    comment: string;
    rating: bigint;
}
export interface MenuItem {
    id: bigint;
    name: string;
    isAvailable: boolean;
    description: string;
    category: MenuCategory;
    price: bigint;
}
export type Time = bigint;
export interface CakeOrderInquiry {
    id: bigint;
    customerName: string;
    cakeType: string;
    submittedAt: Time;
    phoneNumber: string;
    specialRequirements: string;
    servings: bigint;
    eventDate: string;
}
export enum MenuCategory {
    breads = "breads",
    donuts = "donuts",
    cakes = "cakes",
    puffs = "puffs",
    khari = "khari",
    cookiesPastries = "cookiesPastries"
}
export interface backendInterface {
    addCustomerReview(customerName: string, rating: bigint, comment: string): Promise<bigint>;
    getAllCakeOrderInquiries(): Promise<Array<CakeOrderInquiry>>;
    getCustomerReviews(): Promise<Array<CustomerReview>>;
    getMenuByCategory(category: MenuCategory): Promise<Array<MenuItem>>;
    getMenuItems(): Promise<Array<MenuItem>>;
    initialize(): Promise<void>;
    submitCakeOrderInquiry(customerName: string, phoneNumber: string, cakeType: string, eventDate: string, servings: bigint, specialRequirements: string): Promise<bigint>;
}
