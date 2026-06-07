export type Role = "guest" | "tenant" | "agent" | "admin" | "super-admin";

export type ListingStatus = "Live" | "Under review" | "Draft" | "Rented" | "Rejected";

export type Listing = {
  id: string;
  title: string;
  slug: string;
  category: string;
  county: string;
  area: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  status: ListingStatus;
  image: string;
  amenities: string[];
  agentId: string;
  views: number;
  inquiries: number;
};

export type Agent = {
  id: string;
  name: string;
  company: string;
  county: string;
  areas: string[];
  rating: number;
  reviews: number;
  responseRate: number;
  listings: number;
  image: string;
  verified: boolean;
  bio: string;
};

export type Inquiry = {
  id: string;
  tenant: string;
  listing: string;
  status: "Open" | "Replied" | "Closed";
  received: string;
};

export type AuditEntry = {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
};
