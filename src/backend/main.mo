import List "mo:core/List";
import Principal "mo:core/Principal";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Int "mo:core/Int";

actor {
  module MenuCategory {
    public type Variant = {
      #cakes;
      #breads;
      #donuts;
      #khari;
      #puffs;
      #cookiesPastries;
    };

    public func toText(category : Variant) : Text {
      switch (category) {
        case (#cakes) { "Cakes" };
        case (#breads) { "Breads" };
        case (#donuts) { "Donuts" };
        case (#khari) { "Khari" };
        case (#puffs) { "Puffs" };
        case (#cookiesPastries) { "Cookies & Pastries" };
      };
    };
  };

  type MenuCategory = MenuCategory.Variant;

  type MenuItem = {
    id : Nat;
    name : Text;
    category : MenuCategory;
    description : Text;
    price : Nat; // INR
    isAvailable : Bool;
  };

  type CakeOrderInquiry = {
    id : Nat;
    customerName : Text;
    phoneNumber : Text;
    cakeType : Text;
    eventDate : Text;
    servings : Nat;
    specialRequirements : Text;
    submittedAt : Time.Time;
  };

  type CustomerReview = {
    id : Nat;
    customerName : Text;
    rating : Nat; // 1-5
    comment : Text;
    createdAt : Time.Time;
  };

  var nextMenuId = 7;
  var nextInquiryId = 1;
  var nextReviewId = 7;

  let menuItems = Map.empty<Nat, MenuItem>();
  let cakeInquiries = Map.empty<Nat, CakeOrderInquiry>();
  let customerReviews = Map.empty<Nat, CustomerReview>();

  let initialMenuItems : [MenuItem] = [
    {
      id = 1;
      name = "Chocolate Fudge Cake";
      category = #cakes;
      description = "Rich chocolate cake with fudge icing";
      price = 350;
      isAvailable = true;
    },
    {
      id = 2;
      name = "Whole Wheat Bread";
      category = #breads;
      description = "Healthy whole wheat loaf";
      price = 45;
      isAvailable = true;
    },
    {
      id = 3;
      name = "Jam Filled Donut";
      category = #donuts;
      description = "Soft donut with strawberry jam filling";
      price = 18;
      isAvailable = true;
    },
    {
      id = 4;
      name = "Masala Khari";
      category = #khari;
      description = "Spicy, flaky khari with Indian spices";
      price = 30;
      isAvailable = true;
    },
    {
      id = 5;
      name = "Veg Puff";
      category = #puffs;
      description = "Puff pastry with savory vegetable filling";
      price = 25;
      isAvailable = true;
    },
    {
      id = 6;
      name = "Butter Cookies";
      category = #cookiesPastries;
      description = "Crispy, buttery cookies";
      price = 15;
      isAvailable = true;
    },
  ];

  let initialReviews : [CustomerReview] = [
    {
      id = 1;
      customerName = "Anjali Sharma";
      rating = 5;
      comment = "The best chocolate cake I have ever had!";
      createdAt = Time.now();
    },
    {
      id = 2;
      customerName = "Suresh Patel";
      rating = 4;
      comment = "Great variety of breads and fresh products.";
      createdAt = Time.now();
    },
    {
      id = 3;
      customerName = "Priya Desai";
      rating = 5;
      comment = "Amazing service and delicious puffs.";
      createdAt = Time.now();
    },
    {
      id = 4;
      customerName = "Rahul Mehta";
      rating = 5;
      comment = "Love the donuts and cookies!";
      createdAt = Time.now();
    },
    {
      id = 5;
      customerName = "Neha Joshi";
      rating = 4;
      comment = "Consistently good quality and taste.";
      createdAt = Time.now();
    },
  ];

  module MenuItem {
    public func compare(item1 : MenuItem, item2 : MenuItem) : Order.Order {
      Nat.compare(item1.id, item2.id);
    };
  };

  module CustomerReview {
    public func compare(review1 : CustomerReview, review2 : CustomerReview) : Order.Order {
      Int.compare(review2.createdAt, review1.createdAt);
    };
  };

  public shared ({ caller }) func initialize() : async () {
    if (caller != Principal.fromText("2vxsx-fae")) {
      Runtime.trap("Only anonymous principal can initialize with test data.");
    };

    menuItems.clear();
    customerReviews.clear();

    for (item in initialMenuItems.values()) {
      menuItems.add(item.id, item);
    };

    for (review in initialReviews.values()) {
      customerReviews.add(review.id, review);
    };
  };

  public query ({ caller }) func getMenuItems() : async [MenuItem] {
    menuItems.values().toArray().sort();
  };

  public query ({ caller }) func getMenuByCategory(category : MenuCategory) : async [MenuItem] {
    menuItems.values().toArray().filter(
      func(item) {
        item.category == category;
      }
    ).sort();
  };

  public shared ({ caller }) func submitCakeOrderInquiry(
    customerName : Text,
    phoneNumber : Text,
    cakeType : Text,
    eventDate : Text,
    servings : Nat,
    specialRequirements : Text,
  ) : async Nat {
    let inquiry : CakeOrderInquiry = {
      id = nextInquiryId;
      customerName;
      phoneNumber;
      cakeType;
      eventDate;
      servings;
      specialRequirements;
      submittedAt = Time.now();
    };

    cakeInquiries.add(nextInquiryId, inquiry);
    nextInquiryId += 1;
    inquiry.id;
  };

  public query ({ caller }) func getAllCakeOrderInquiries() : async [CakeOrderInquiry] {
    cakeInquiries.values().toArray();
  };

  public shared ({ caller }) func addCustomerReview(
    customerName : Text,
    rating : Nat,
    comment : Text,
  ) : async Nat {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };

    let review : CustomerReview = {
      id = nextReviewId;
      customerName;
      rating;
      comment;
      createdAt = Time.now();
    };

    customerReviews.add(nextReviewId, review);
    nextReviewId += 1;
    review.id;
  };

  public query ({ caller }) func getCustomerReviews() : async [CustomerReview] {
    customerReviews.values().toArray().sort();
  };
};
