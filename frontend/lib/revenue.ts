export const commissionRate = 0.05;

export const commissionExamples = [
  { property: "Studio apartment", rent: "KSh 25,000", commission: "KSh 1,250" },
  { property: "3-bed apartment", rent: "KSh 120,000", commission: "KSh 6,000" },
  { property: "Corporate residence", rent: "KSh 650,000", commission: "KSh 32,500" },
  { property: "Vacation villa", rent: "KSh 35,000/day x 7", commission: "KSh 12,250" },
];

export const featuredPackages = [
  {
    name: "Basic boost",
    price: 2500,
    displayPrice: "KSh 2,500",
    duration: "7 days",
    placement: "Featured browse slot",
  },
  {
    name: "Standard feature",
    price: 6000,
    displayPrice: "KSh 6,000",
    duration: "30 days",
    placement: "Homepage and browse featured rows",
  },
  {
    name: "Premium + homepage hero",
    price: 15000,
    displayPrice: "KSh 15,000",
    duration: "30 days",
    placement: "Homepage hero, featured rows and priority sort",
  },
];

export const subscriptionPlans = [
  {
    name: "Free",
    price: "KSh 0/mo",
    listings: "3",
    perks: ["Basic profile", "Tenant inquiries", "Public listings"],
  },
  {
    name: "Pro",
    price: "KSh 2,999/mo",
    listings: "20",
    perks: ["Priority support", "Analytics", "More active listings"],
  },
  {
    name: "Business",
    price: "KSh 7,999/mo",
    listings: "Unlimited",
    perks: ["Featured badge", "API access", "Team-ready growth"],
  },
];

export const revenueSummary = [
  { source: "Commissions", calculation: "100 rentals x KSh 4,000 avg", revenue: "KSh 400,000" },
  { source: "Featured listings", calculation: "15 boosts x KSh 6,000", revenue: "KSh 90,000" },
  { source: "Pro subscriptions", calculation: "6 agents x KSh 2,999", revenue: "KSh 17,994" },
];

export const revenueMetrics = [
  { label: "Monthly revenue", value: "KSh 507,994", detail: "10-agent unit economics" },
  { label: "Commission rate", value: "5%", detail: "First month's rent" },
  { label: "Boost revenue", value: "KSh 90,000", detail: "15 standard features" },
  { label: "Subscription MRR", value: "KSh 17,994", detail: "6 Pro agents" },
];

export const agentRevenueLedger = [
  {
    listing: "Kilimani two-bedroom apartment",
    rent: "KSh 95,000",
    commission: "KSh 4,750",
    payout: "KSh 90,250",
    status: "Ready for payout",
  },
  {
    listing: "Westlands fitted office suite",
    rent: "KSh 220,000",
    commission: "KSh 11,000",
    payout: "KSh 209,000",
    status: "Lease completed",
  },
  {
    listing: "Nyali serviced maisonette",
    rent: "KSh 140,000",
    commission: "KSh 7,000",
    payout: "KSh 133,000",
    status: "Pending review",
  },
];

export const revenueControls = [
  { name: "Commission rate", value: "5%", detail: "Charged on first month's rent" },
  { name: "Verified Pro badge", value: "KSh 1,500", detail: "One-time enhanced verification fee" },
  { name: "Lead generation", value: "KSh 500-2,000", detail: "Future matched tenant leads" },
  { name: "Verification target", value: "1-2 days", detail: "Admin approval SLA" },
];
