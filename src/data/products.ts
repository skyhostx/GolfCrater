import { Product } from '../types';
import { PRODUCT_LOGOS } from './productLogos';

export const PRODUCTS: Product[] = [
  // ===================== REVIEWS CATEGORY =====================
  {
    id: 'buy-google-reviews',
    name: 'Buy Google Reviews',
    slug: 'buy-google-reviews',
    category: 'Reviews',
    shortDescription: 'High-retention 5-star Google business profile reviews from active, geo-targeted profiles to elevate local SEO ranking and consumer trust.',
    priceRange: '$19 - $2,844',
    startingPrice: 19,
    rating: 4.9,
    reviewCount: 348,
    image: PRODUCT_LOGOS['buy-google-reviews'],
    badge: 'Best Seller',
    tags: ['Google Maps', 'Local SEO', 'Geo-Targeted', 'Permanent Retention', 'Natural Drip-Feed', 'Real Profiles'],
    metaDescription: 'Buy verified 5-star Google Reviews at GolfCrater. Organic drip delivery, geo-targeted localized accounts, 100% safe retention warranty, and 24/7 dedicated support.',
    specifications: {
      deliveryTime: '24 - 72 Hours (Gradual Drip)',
      guaranteePeriod: '60 Days Free Replacement',
      verificationLevel: 'Geo-Targeted Local IP Verified',
      supportAvailable: '24/7 Live Chat & Email',
      documentsIncluded: 'Detailed Proof & Link Report',
      supportedRegions: 'USA, UK, Canada, Australia, EU & Worldwide',
    },
    variants: [
      { id: 'g-03', name: '03 Google Reviews', price: 19 },
      { id: 'g-05', name: '05 Google Reviews', price: 29, popular: true },
      { id: 'g-10', name: '10 Google Reviews', price: 58 },
      { id: 'g-20', name: '20 Google Reviews', price: 115 },
      { id: 'g-50', name: '50 Google Reviews', price: 286 },
      { id: 'g-100', name: '100 Google Reviews', price: 569 },
      { id: 'g-200', name: '200 Google Reviews', price: 1139 },
      { id: 'g-300', name: '300 Google Reviews', price: 1709 },
      { id: 'g-500', name: '500 Google Reviews', price: 2844 },
    ],
    fullDescription: `
### Executive Overview: Transform Your Business Reputation with Google Reviews
In today's hyper-competitive digital economy, over 93% of prospective consumers consult Google Reviews and Google Maps star ratings prior to contacting a local service, visiting a brick-and-mortar storefront, or finalizing a purchasing decision. A robust Google Business Profile (GBP) adorned with stellar feedback acts as your 24/7 conversion engine. At GolfCrater, our Buy Google Reviews service delivers genuine, localized, and meticulously scheduled review placements that establish instant brand credibility and dramatically elevate your local Map Pack rankings.

Whether you are launching a new dental clinic, scaling an eCommerce storefront, expanding a home services agency, or recovering from unfair competitor negative attacks, our strategic review acquisition plans empower you to control your brand narrative. Every review is delivered with natural intervals, distinct residential IP addresses, and authentic profile histories that blend seamlessly into organic user activity.

---

### Key Advantages & Performance Metrics
* **Local SEO Rank Optimization**: Google’s algorithmic ranking signals heavily weight review recency, frequency, sentiment, and total volume. Higher ratings directly correlate with top-3 placement in Google Maps local listings.
* **Organic Drip-Feed Delivery**: Avoid sudden algorithmic spikes. Our proprietary scheduling system publishes reviews over hours or days depending on your profile age and natural foot-traffic patterns.
* **Authentic Profile Profiles**: Placements originate from established accounts with profile photos, local check-in histories, and diverse activity backgrounds.
* **Custom Review Content Guidance**: You can supply customized copy, targeted keywords (such as "emergency plumber Miami" or "best artisan bakery"), or let our senior copywriters construct industry-tailored testimonials that highlight your service strengths.
* **Lifetime Non-Drop Warranty**: Enjoy 60 days of complimentary replacement protection in the rare event of algorithmic filtering.

---

### Step-by-Step Delivery & Handover Lifecycle
1. **Order Initiation & Target Submission**: Select your desired review volume from our tiered packages. Provide your Google Business Profile URL and specify any preferred city/regional focus or customized talking points.
2. **Profile Matching & Queue Planning**: Our reputation strategists map your listing against relevant regional profiles to guarantee organic behavioral harmony.
3. **Paced Drip-Feed Execution**: Reviews begin publishing within 12 to 24 hours. The drip velocity scales according to your package size (e.g., 1-2 per day for small packages, 3-5 per day for enterprise bundles).
4. **Completion Delivery Report**: Receive a comprehensive dashboard summary containing direct links, dates, and account timestamps verifying your fulfilled order.

---

### Platform Compliance & Safety Protocols
We prioritize account longevity above all else. Our methodologies comply with modern digital trust frameworks, ensuring no automation bots or headless browser scripts are utilized. Every interaction mirrors genuine consumer behavior, protecting your listing from penalties while fostering authentic customer acquisition.
    `,
  },
  {
    id: 'buy-trustpilot-reviews',
    name: 'Buy Trustpilot Reviews',
    slug: 'buy-trustpilot-reviews',
    category: 'Reviews',
    shortDescription: 'Boost your TrustScore with verified Trustpilot reviews from authentic customer accounts. Strengthen high-ticket eCommerce trust and conversions.',
    priceRange: '$19 - $909',
    startingPrice: 19,
    rating: 4.9,
    reviewCount: 294,
    image: PRODUCT_LOGOS['buy-trustpilot-reviews'],
    badge: 'High Impact',
    tags: ['TrustScore 4.8+', 'Green Trust Star', 'Verified Badges', 'Global Reach', 'E-Commerce Trust', 'Fast Drip'],
    metaDescription: 'Buy authentic Trustpilot reviews with green verified badges at GolfCrater. Elevate TrustScore, improve ad CTR, and outrank competitors today.',
    specifications: {
      deliveryTime: '24 - 48 Hours Initial Post',
      guaranteePeriod: '60 Days Non-Drop Guarantee',
      verificationLevel: 'Unique Order-ID Verified Available',
      supportAvailable: 'Dedicated Account Manager',
      documentsIncluded: 'Live Trustpilot URL Audit',
      supportedRegions: 'Global (US, UK, DE, FR, AU, CA, Nordic)',
    },
    variants: [
      { id: 'tp-03', name: '03 Trustpilot Reviews', price: 27 },
      { id: 'tp-05', name: '05 Trustpilot Reviews', price: 44, popular: true },
      { id: 'tp-10', name: '10 Trustpilot Reviews', price: 87 },
      { id: 'tp-20', name: '20 Trustpilot Reviews', price: 172 },
      { id: 'tp-30', name: '30 Trustpilot Reviews', price: 256 },
      { id: 'tp-50', name: '50 Trustpilot Reviews', price: 424 },
      { id: 'tp-v01', name: 'Verified Trustpilot (01) Review', price: 19 },
      { id: 'tp-v03', name: 'Verified Trustpilot (03) Reviews', price: 56 },
      { id: 'tp-v10', name: 'Verified Trustpilot (10) Reviews', price: 184 },
      { id: 'tp-v30', name: 'Verified Trustpilot (30) Reviews', price: 549 },
      { id: 'tp-v50', name: 'Verified Trustpilot (50) Reviews', price: 909 },
    ],
    fullDescription: `
### Strategic Value: Elevate Your Brand Authority on Trustpilot
Trustpilot is recognized internationally as the gold standard in online merchant credibility. Modern consumers are skeptical of internal customer testimonials; they actively search Google for "[Brand Name] Trustpilot" before entering credit card details. A low TrustScore or sparse review timeline creates severe checkout friction, driving up customer acquisition costs (CAC) and dampening paid media ROI.

With GolfCrater's premium Trustpilot review solutions, you unlock the ability to quickly establish an impeccable 4.5+ star rating. Our offerings include standard organic reviews as well as coveted **Verified Customer Order-ID Placements**, which display the recognizable green "Verified" badge next to each testimonial.

---

### Core Performance Features
* **Green "Verified" Tag Compatibility**: Verified placements are submitted with authentic purchase reference metadata, conferring maximum trust upon visitors.
* **TrustScore Enhancement**: Systematically dilute occasional unfair negative feedback with detailed, descriptive 5-star experiences highlighting prompt shipping, exemplary support, and product quality.
* **Google Seller Ratings Integration**: Once you cross critical threshold volumes, verified Trustpilot reviews synchronize into your Google Ads extensions, boosting Google search ad click-through rates by up to 24%.
* **Country-Specific Audience Targeting**: Select from localized consumer profiles in the United States, United Kingdom, European Union, Australia, and Canada to align with your core customer base.

---

### Safety & Longevity Assurance
Trustpilot employs strict automated fraud detection algorithms. GolfCrater bypasses automated red flags through high-reputation aged consumer accounts, distinct non-datacenter network footprints, and randomized submission cadences. Our 60-day replacement commitment ensures your investment remains secure.
    `,
  },
  {
    id: 'buy-facebook-reviews',
    name: 'Buy Facebook Reviews',
    slug: 'buy-facebook-reviews',
    category: 'Reviews',
    shortDescription: 'Organic Facebook page recommendations and 5-star ratings from active social profiles to amplify your business page reach and conversions.',
    priceRange: '$25 - $4,500',
    startingPrice: 25,
    rating: 4.8,
    reviewCount: 187,
    image: PRODUCT_LOGOS['buy-facebook-reviews'],
    tags: ['Facebook Page', 'Social Proof', 'Real Profiles', 'High Engagement', 'Boost Ad Trust'],
    metaDescription: 'Buy Facebook business page reviews and recommendations from GolfCrater. Real active accounts, customized text, non-drop warranty, and instant boost in social credibility.',
    specifications: {
      deliveryTime: '24 - 48 Hours',
      guaranteePeriod: '45 Days Retention Guarantee',
      verificationLevel: 'Active Phone-Verified Facebook Profiles',
      supportAvailable: '24/7 Support Desk',
      documentsIncluded: 'Order Tracking & Profile List',
      supportedRegions: 'Worldwide / English / Multi-language',
    },
    variants: [
      { id: 'fb-05', name: '05 Facebook Reviews', price: 25 },
      { id: 'fb-10', name: '10 Facebook Reviews', price: 48, popular: true },
      { id: 'fb-25', name: '25 Facebook Reviews', price: 120 },
      { id: 'fb-50', name: '50 Facebook Reviews', price: 240 },
      { id: 'fb-100', name: '100 Facebook Reviews', price: 470 },
      { id: 'fb-300', name: '300 Facebook Reviews', price: 1390 },
      { id: 'fb-500', name: '500 Facebook Reviews', price: 2300 },
      { id: 'fb-1000', name: '1000 Facebook Reviews', price: 4500 },
    ],
    fullDescription: `
### Supercharge Your Social Selling on Meta Platforms
Facebook Pages remain the central hub for direct-to-consumer interactions, local business discovery, and social paid ad campaigns. When prospective clients land on your Facebook storefront after clicking a Meta ad, the recommendation badge ("XX% recommend this page") serves as immediate proof of your reliability.

GolfCrater delivers genuine recommendations from established Facebook profiles boasting active friend networks, realistic profile imagery, and verified device backgrounds. We help you transform an empty or poorly reviewed Facebook Page into an energetic community of satisfied advocates.
    `,
  },
  {
    id: 'buy-amazon-reviews',
    name: 'Buy Amazon Reviews',
    slug: 'buy-amazon-reviews',
    category: 'Reviews',
    shortDescription: 'Verified buyer Amazon product reviews for FBA and FBM sellers. Accelerate product launch velocity and boost BSR ranking.',
    priceRange: '$49 - $1,069',
    startingPrice: 49,
    rating: 4.9,
    reviewCount: 219,
    image: PRODUCT_LOGOS['buy-amazon-reviews'],
    tags: ['Amazon FBA', 'Verified Purchase', 'BSR Rank Boost', 'High Conversion', 'Prime Buyer Profiles'],
    metaDescription: 'Buy verified Amazon product reviews at GolfCrater. Genuine buyer accounts, detailed feedback with photo options, safe review velocity, and 24/7 customer service.',
    specifications: {
      deliveryTime: '3 - 7 Business Days',
      guaranteePeriod: '60 Days Non-Drop Guarantee',
      verificationLevel: 'Prime Verified Purchase Accounts',
      supportAvailable: 'FBA Strategy Specialist',
      documentsIncluded: 'Amazon Order IDs & Direct Review URLs',
      supportedRegions: 'Amazon US, UK, DE, CA, JP',
    },
    variants: [
      { id: 'amz-02', name: '02 Amazon Reviews', price: 49 },
      { id: 'amz-05', name: '05 Amazon Reviews', price: 119, popular: true },
      { id: 'amz-10', name: '10 Amazon Reviews', price: 229 },
      { id: 'amz-30', name: '30 Amazon Reviews', price: 649 },
      { id: 'amz-50', name: '50 Amazon Reviews', price: 1069 },
    ],
    fullDescription: `
### Maximize Your Amazon Best Sellers Rank (BSR)
The A10 Amazon algorithmic search ranking heavily prioritizes verified buyer feedback volume and conversion rate. New product listings face the classic "cold start" dilemma: without reviews, conversion rate is low; without conversions, no reviews arrive.

GolfCrater breaks this deadlock. Our network of verified Amazon Prime member profiles review your ASIN following legitimate acquisition cycles. Reviews feature descriptive multi-paragraph product appraisals, key feature highlights, and optional customer photograph attachments that skyrocket customer confidence.
    `,
  },
  {
    id: 'buy-yelp-reviews',
    name: 'Buy Yelp Reviews',
    slug: 'buy-yelp-reviews',
    category: 'Reviews',
    shortDescription: 'Elite Yelp reviews and regular verified reviews designed to pass the strict Yelp recommendation software filter for local storefronts.',
    priceRange: '$90 - $2,200',
    startingPrice: 90,
    rating: 4.9,
    reviewCount: 165,
    image: PRODUCT_LOGOS['buy-yelp-reviews'],
    badge: 'Yelp Elite',
    tags: ['Yelp Elite Squad', 'Unfiltered Reviews', 'Restaurant & Local', 'Sticky Placements', 'US/CA Focus'],
    metaDescription: 'Buy Yelp Elite & regular reviews at GolfCrater. Engineered specifically to bypass Yelp automated recommendation filters and remain sticky permanently.',
    specifications: {
      deliveryTime: '2 - 5 Business Days',
      guaranteePeriod: '60 Days Replacement Protection',
      verificationLevel: 'Yelp Elite Squad & Aged Regular Profiles',
      supportAvailable: 'Senior Reputation Consultant',
      documentsIncluded: 'Profile Badges & Screenshot Logs',
      supportedRegions: 'United States, Canada, Select European Cities',
    },
    variants: [
      { id: 'yelp-e01', name: '01 Elite Yelp Review', price: 230 },
      { id: 'yelp-e02', name: '02 Elite Yelp Reviews', price: 450 },
      { id: 'yelp-r03', name: '03 Regular Yelp Reviews', price: 90 },
      { id: 'yelp-r05', name: '05 Regular Yelp Reviews', price: 140, popular: true },
      { id: 'yelp-r10', name: '10 Regular Yelp Reviews', price: 250 },
      { id: 'yelp-e05', name: '05 Elite Yelp Reviews', price: 1050 },
      { id: 'yelp-e10', name: '10 Elite Yelp Reviews', price: 2000 },
      { id: 'yelp-r30', name: '30 Regular Yelp Reviews', price: 710 },
      { id: 'yelp-r50', name: '50 Regular Yelp Reviews', price: 1150 },
      { id: 'yelp-r100', name: '100 Regular Yelp Reviews', price: 2200 },
    ],
    fullDescription: `
### Conquer the Toughest Review Platform with Yelp Elite Status
Yelp is notoriously recognized for having the strictest automated recommendation filter in the tech industry, often hiding 70% of genuine positive reviews under "not currently recommended". To guarantee that your positive ratings remain front and center, GolfCrater provides **Yelp Elite Squad Placements**.

Yelp Elite accounts are curated community ambassadors whose reviews bypass algorithmic suppression, prominently displaying the official shiny "Yelp Elite" badge. Whether you run a restaurant, luxury spa, legal practice, auto detailing service, or contracting firm, our Yelp service protects your local reputation from aggressive competitor suppression.
    `,
  },
  {
    id: 'buy-bbb-reviews',
    name: 'Buy BBB Reviews',
    slug: 'buy-bbb-reviews',
    category: 'Reviews',
    shortDescription: 'Accredited Better Business Bureau (BBB) customer reviews to secure your A+ business standing and institutional client trust.',
    priceRange: '$50 - $1,530',
    startingPrice: 50,
    rating: 4.8,
    reviewCount: 142,
    image: PRODUCT_LOGOS['buy-bbb-reviews'],
    tags: ['BBB Accredited', 'High Net Worth Trust', 'A+ Rating Protection', 'Corporate Integrity', 'USA/Canada'],
    metaDescription: 'Buy verified BBB reviews for your Better Business Bureau profile at GolfCrater. Solidify corporate credibility and win institutional contracts.',
    specifications: {
      deliveryTime: '48 - 96 Hours',
      guaranteePeriod: '60 Days Non-Drop Guarantee',
      verificationLevel: 'US Consumer Identity Verified',
      supportAvailable: 'Enterprise Case Support',
      documentsIncluded: 'BBB Confirmation Receipt ID',
      supportedRegions: 'United States & Canada',
    },
    variants: [
      { id: 'bbb-03', name: '03 BBB Reviews', price: 50 },
      { id: 'bbb-05', name: '05 BBB Reviews', price: 82, popular: true },
      { id: 'bbb-10', name: '10 BBB Reviews', price: 160 },
      { id: 'bbb-20', name: '20 BBB Reviews', price: 315 },
      { id: 'bbb-50', name: '50 BBB Reviews', price: 775 },
      { id: 'bbb-100', name: '100 BBB Reviews', price: 1530 },
    ],
    fullDescription: `
### Strengthen Institutional Trust with Better Business Bureau Feedback
When consumers, enterprise clients, or financial underwriters evaluate high-ticket service contracts, mortgage agencies, or construction firms, they check the Better Business Bureau. BBB ratings command immense weight among older demographics and institutional buyers.

GolfCrater delivers organic BBB customer experiences detailing transaction dates, resolution excellence, and professional communication, ensuring your profile reflects the highest standard of business ethics.
    `,
  },
  {
    id: 'buy-verified-g2-reviews',
    name: 'Buy Verified G2 Reviews',
    slug: 'buy-verified-g2-reviews',
    category: 'Reviews',
    shortDescription: 'LinkedIn-verified B2B software reviews on G2.com. Boost your SaaS product grid rankings and accelerate enterprise sales cycles.',
    priceRange: '$19 - $179',
    startingPrice: 19,
    rating: 5.0,
    reviewCount: 128,
    image: PRODUCT_LOGOS['buy-verified-g2-reviews'],
    badge: 'B2B SaaS',
    tags: ['G2 Crowd', 'B2B SaaS', 'LinkedIn Verified', 'Grid Leader', 'High-Value Lead Gen'],
    metaDescription: 'Buy verified G2 reviews with authenticated LinkedIn profiles at GolfCrater. Climb the G2 Grid, attract qualified demo bookings, and close enterprise deals.',
    specifications: {
      deliveryTime: '2 - 4 Days',
      guaranteePeriod: '90 Days Guarantee',
      verificationLevel: 'Authentic LinkedIn Professional Profiles',
      supportAvailable: 'B2B Product Consultant',
      documentsIncluded: 'G2 Screenshot & Published URL',
      supportedRegions: 'Global Enterprise (US, EMEA, APAC)',
    },
    variants: [
      { id: 'g2-01', name: '01 Verified G2 Review', price: 19 },
      { id: 'g2-03', name: '03 Verified G2 Reviews', price: 56, popular: true },
      { id: 'g2-05', name: '05 Verified G2 Reviews', price: 91 },
      { id: 'g2-10', name: '10 Verified G2 Reviews', price: 179 },
    ],
    fullDescription: `
### Win SaaS Buyer Trust and Dominate the G2 Grid
For modern software companies, G2 is where enterprise software procurement teams compare solutions before issuing RFPs. A top ranking on the G2 Quadrant Grid generates hundreds of qualified software demo requests each month.

Our G2 reviews are authored by authentic tech professionals with aged LinkedIn profiles, detailing product UI benefits, deployment ease, and customer success response times to meet G2’s stringent manual editorial screening.
    `,
  },
  {
    id: 'buy-glassdoor-reviews',
    name: 'Buy Glassdoor Reviews',
    slug: 'buy-glassdoor-reviews',
    category: 'Reviews',
    shortDescription: 'Positive employee and company workplace reviews on Glassdoor to attract top tier talent, elevate leadership scores, and repair corporate image.',
    priceRange: '$45 - $1,100',
    startingPrice: 45,
    rating: 4.8,
    reviewCount: 98,
    image: PRODUCT_LOGOS['buy-glassdoor-reviews'],
    tags: ['Glassdoor', 'Employer Branding', 'Talent Recruitment', 'CEO Approval Rating', 'Corporate Culture'],
    metaDescription: 'Buy Glassdoor company and employee reviews at GolfCrater. Enhance employer branding, improve CEO ratings, and win the recruiting war.',
    specifications: {
      deliveryTime: '2 - 5 Days',
      guaranteePeriod: '60 Days Non-Drop Guarantee',
      verificationLevel: 'Industry-Specific Employee Accounts',
      supportAvailable: 'Talent Brand Strategist',
      documentsIncluded: 'Published Verification Link',
      supportedRegions: 'North America, UK, Europe, Australia',
    },
    variants: [
      { id: 'gd-03', name: '03 Glassdoor Reviews', price: 45 },
      { id: 'gd-05', name: '05 Glassdoor Reviews', price: 70, popular: true },
      { id: 'gd-10', name: '10 Glassdoor Reviews', price: 130 },
      { id: 'gd-20', name: '20 Glassdoor Reviews', price: 250 },
      { id: 'gd-50', name: '50 Glassdoor Reviews', price: 580 },
      { id: 'gd-100', name: '100 Glassdoor Reviews', price: 1100 },
    ],
    fullDescription: `
### Elevate Your Employer Brand on Glassdoor
Recruiting top engineering, marketing, and operational talent has never been harder. 84% of job seekers research company ratings on Glassdoor before accepting an interview or signing an offer letter. A few disgruntled former employees can sink your overall score and drive away prospective hires.

GolfCrater’s Glassdoor service supplies balanced, constructive, and highly positive workplace reviews covering career growth opportunities, work-life balance, competitive compensation, and strong executive leadership endorsement.
    `,
  },

  // ===================== BANK ACCOUNT CATEGORY =====================
  {
    id: 'buy-verified-cash-app-accounts',
    name: 'Buy Verified Cash App Accounts',
    slug: 'buy-verified-cash-app-accounts',
    category: 'Bank Account',
    shortDescription: 'Fully KYC-verified Cash App accounts with high sending/receiving limits, SSN verification, and optional Bitcoin withdrawal/deposit enablement.',
    priceRange: '$189 - $499',
    startingPrice: 189,
    rating: 4.9,
    reviewCount: 412,
    image: PRODUCT_LOGOS['buy-verified-cash-app-accounts'],
    badge: 'High Limit',
    tags: ['Cash App', 'BTC Enabled', '$25k Limit', 'SSN Verified', 'Virtual Card Ready', 'Instant Payouts'],
    metaDescription: 'Buy fully verified Cash App accounts at GolfCrater. Choose BTC-enabled or Non-BTC accounts with $4k, $15k, and $25k transaction limits. Fast, secure delivery.',
    specifications: {
      deliveryTime: 'Instant to 2 Hours',
      guaranteePeriod: '30 Days Replacement Warranty',
      verificationLevel: 'Full KYC (ID + SSN + Selfie Passed)',
      supportAvailable: '24/7 Dedicated Account Handover',
      documentsIncluded: 'Login Credentials, Linked Email, Recovery Seed, Full KYC Docs',
      supportedRegions: 'United States & United Kingdom',
    },
    variants: [
      { id: 'ca-non4k', name: 'Non BTC Enable 4k Cash App Account', price: 189 },
      { id: 'ca-non15k', name: 'Non BTC Enable 15k Cash App Account', price: 259 },
      { id: 'ca-btc4k', name: 'BTC Enable 4k Cash App Account', price: 349, popular: true },
      { id: 'ca-btc25k', name: 'BTC Enable 25k Cash App Account', price: 499 },
    ],
    fullDescription: `
### Fully Verified Cash App Accounts for Modern Digital Commerce
Cash App by Block is one of the most widely embraced peer-to-peer payment and merchant solutions in the United States and United Kingdom. However, acquiring high transaction limits and unlocking integrated Bitcoin trading often requires exhaustive identity verification, US banking history, and SSN submissions.

At GolfCrater, we provide 100% verified, clean-standing Cash App accounts configured for entrepreneurs, freelance creators, and digital businesses who need immediate transactional liquidity.

---

### What Comes With Every Account Package
* **Complete KYC Verification**: All identity verification steps have been systematically completed, including government photo ID, active SSN, and real biometric authentication.
* **Bitcoin Enablement**: Select our BTC-enabled accounts to instantly buy, sell, deposit, and withdraw Bitcoin on-chain without facing additional identity verification hurdles.
* **High Transaction Velocity**: Standard basic accounts are capped at restrictive limits; our tiered options offer verified spending and withdrawal capacities of $4,000, $15,000, and up to $25,000.
* **Full Data Ownership**: You receive complete control of the primary email address, virtual phone numbers, Cashtag setup, and associated debit card credentials.
    `,
  },
  {
    id: 'buy-verified-paypal-account',
    name: 'Buy Verified PayPal Account',
    slug: 'buy-verified-paypal-account',
    category: 'Bank Account',
    shortDescription: 'Aged and brand new verified personal & business PayPal accounts equipped with linked bank, card confirmation, and full compliance document package.',
    priceRange: '$189 - $499',
    startingPrice: 189,
    rating: 4.9,
    reviewCount: 520,
    image: PRODUCT_LOGOS['buy-verified-paypal-account'],
    badge: 'Popular',
    tags: ['PayPal Business', 'Aged Accounts', 'No 21-Day Hold', 'Full Docs', 'Bank Linked', 'Global Payments'],
    metaDescription: 'Buy verified PayPal accounts (personal & business) at GolfCrater. Includes aged accounts with transaction history and complete KYC legal documentation.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Full Replacement Warranty',
      verificationLevel: 'Bank + Card + Passport/ID Verified',
      supportAvailable: 'Senior Financial Ops Desk',
      documentsIncluded: 'Email Access, Cookies, SSN/ID Scan, Utility Bill, Phone Access',
      supportedRegions: 'USA, UK, Canada, Australia, EU',
    },
    variants: [
      { id: 'pp-np', name: '01 New Personal PayPal Account With Documents', price: 189 },
      { id: 'pp-op', name: '01 Old Personal PayPal Account With Documents', price: 299 },
      { id: 'pp-nb', name: '01 New Business PayPal Account With Documents', price: 299, popular: true },
      { id: 'pp-ob', name: '01 Old Business PayPal Account With Documents', price: 499 },
    ],
    fullDescription: `
### Premium Verified PayPal Accounts with Zero Payment Holds
PayPal is the dominant global payment gateway, processing billions in transactions daily. Yet new merchant accounts frequently encounter arbitrary 21-day holding periods, random rolling reserves, or immediate payment freezes.

GolfCrater offers legitimate, pre-warmed personal and business PayPal accounts. Our "Old Business" tier features aged accounts with proven payment histories that bypass initial hold thresholds and allow instant withdrawals to linked accounts.
    `,
  },
  {
    id: 'buy-verified-wise-account',
    name: 'Buy Verified Wise Account',
    slug: 'buy-verified-wise-account',
    category: 'Bank Account',
    shortDescription: 'Multi-currency Wise (formerly TransferWise) accounts with dedicated local bank details in USD, EUR, GBP, AUD, and CAD.',
    priceRange: '$299 - $499',
    startingPrice: 299,
    rating: 4.9,
    reviewCount: 310,
    image: PRODUCT_LOGOS['buy-verified-wise-account'],
    tags: ['Multi-Currency', 'Dedicated IBAN', 'US Routing', 'UK Sort Code', 'Low FX Rates', 'Corporate Ready'],
    metaDescription: 'Buy verified Wise multi-currency accounts at GolfCrater. Access dedicated USD, EUR, and GBP account numbers with zero cross-border hassle.',
    specifications: {
      deliveryTime: '2 - 4 Hours',
      guaranteePeriod: '30 Days Replacement Protection',
      verificationLevel: 'Tier 3 Multi-Currency Verified',
      supportAvailable: '24/7 Priority Support',
      documentsIncluded: 'Account Access, Registered Email, Legal ID & Address Verification',
      supportedRegions: 'USA, UK, Europe, Global',
    },
    variants: [
      { id: 'wise-p', name: '01 Personal TransferWise Account', price: 299 },
      { id: 'wise-b', name: '01 Business TransferWise Account', price: 499, popular: true },
    ],
    fullDescription: `
### Seamless Cross-Border Multi-Currency Banking with Wise
For international e-commerce sellers, agencies, and cross-border consultants, foreign exchange markups and intermediary wire fees eat into profit margins. A verified Wise account gives you dedicated domestic account numbers in over 10 currencies (including US Routing/Account, UK Sort Code, Euro IBAN, and Australian BSB).
    `,
  },
  {
    id: 'buy-verified-payoneer-account',
    name: 'Buy Verified Payoneer Account',
    slug: 'buy-verified-payoneer-account',
    category: 'Bank Account',
    shortDescription: 'Verified Payoneer accounts ready for marketplace payouts from Amazon, Upwork, Fiverr, Airbnb, and international clients.',
    priceRange: '$149 - $799',
    startingPrice: 149,
    rating: 4.8,
    reviewCount: 275,
    image: PRODUCT_LOGOS['buy-verified-payoneer-account'],
    tags: ['Payoneer', 'Global Payment Service', 'Marketplace Ready', 'Mastercard Available', 'Multi-Country'],
    metaDescription: 'Buy verified Payoneer accounts (USA, UK, Global, and Business) at GolfCrater. Fast payouts, linked global banking, and complete compliance documents.',
    specifications: {
      deliveryTime: '2 - 6 Hours',
      guaranteePeriod: '30 Days Replacement Guarantee',
      verificationLevel: 'Full Document Verified (ID + Bank Approval)',
      supportAvailable: '24/7 Account Specialist',
      documentsIncluded: 'Email, Security Questions, National ID, Bank Proof',
      supportedRegions: 'Any Country, USA, UK, Canada, Australia',
    },
    variants: [
      { id: 'pnr-any', name: '01 Any Country Payoneer Account', price: 149 },
      { id: 'pnr-tier1', name: '01 USA/UK/CA/AUS Payoneer Account', price: 299, popular: true },
      { id: 'pnr-biz', name: '01 Verified Business Payoneer Account', price: 799 },
    ],
    fullDescription: `
### Connect Directly to Global Freelance and eCommerce Marketplaces
Payoneer is the preferred payout mechanism for leading digital platforms like Amazon FBA, ClickBank, Upwork, and CJ Affiliate. Our verified Payoneer accounts are configured to receive funds in USD, EUR, GBP, JPY, and CAD with mastercard issuance capabilities.
    `,
  },
  {
    id: 'buy-verified-stripe-account',
    name: 'Buy Verified Stripe Account',
    slug: 'buy-verified-stripe-account',
    category: 'Bank Account',
    shortDescription: 'Ready-to-integrate Stripe payment gateway accounts with live API keys, linked bank account, and corporate legal documents.',
    priceRange: '$499 - $699',
    startingPrice: 499,
    rating: 5.0,
    reviewCount: 388,
    image: PRODUCT_LOGOS['buy-verified-stripe-account'],
    badge: 'Enterprise',
    tags: ['Stripe Gateway', 'Instant API Keys', 'Apple Pay Ready', 'Low Chargeback Risk', 'Live Processing'],
    metaDescription: 'Buy verified Stripe accounts with corporate documents at GolfCrater. Accept card payments, Apple Pay, and Google Pay worldwide without onboarding delays.',
    specifications: {
      deliveryTime: '2 - 6 Hours',
      guaranteePeriod: '30 Days Full Replacement Warranty',
      verificationLevel: 'LLC / Company Incorporation + Bank Verified',
      supportAvailable: 'Dedicated Payment Engineer Support',
      documentsIncluded: 'Live API Keys, Dashboard Access, Tax ID/EIN, Bank Details',
      supportedRegions: 'USA, UK, Europe, Australia',
    },
    variants: [
      { id: 'str-p', name: '01 Verified Stripe Personal Account With Documents', price: 499 },
      { id: 'str-b', name: '01 Verified Stripe Business Account With Documents', price: 699, popular: true },
    ],
    fullDescription: `
### Accept Credit Cards Globally with Verified Stripe Accounts
Stripe is the premier developer-first payments infrastructure, powering millions of SaaS startups and retail websites. Overcoming strict onboarding identity hurdles or geographical restrictions can take weeks. GolfCrater supplies live, fully verified Stripe accounts complete with working API publishable and secret keys, linked bank accounts, and complete corporate backing.
    `,
  },
  {
    id: 'buy-verified-revolut-account',
    name: 'Buy Verified Revolut Account',
    slug: 'buy-verified-revolut-account',
    category: 'Bank Account',
    shortDescription: 'Personal and Business verified Revolut accounts offering disposable virtual cards, SEPA instant transfers, and multi-asset management.',
    priceRange: '$299 - $549',
    startingPrice: 299,
    rating: 4.8,
    reviewCount: 220,
    image: PRODUCT_LOGOS['buy-verified-revolut-account'],
    tags: ['Revolut', 'SEPA Instant', 'Virtual Cards', 'Crypto/Stocks', 'EU/UK IBAN'],
    metaDescription: 'Buy verified Revolut accounts (personal & business) at GolfCrater. Unlimited disposable cards, instant SEPA transfers, and full KYC documents.',
    specifications: {
      deliveryTime: '2 - 5 Hours',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Full Tier KYC (European / UK Banking Standard)',
      supportAvailable: '24/7 Account Handover Support',
      documentsIncluded: 'Login Access, Passcode, Verified Documents, Linked Email',
      supportedRegions: 'United Kingdom & European Union',
    },
    variants: [
      { id: 'rev-p', name: '01 Personal Revolut Account With Documents', price: 299 },
      { id: 'rev-b', name: '01 Business Revolut Account With Documents', price: 549, popular: true },
    ],
    fullDescription: `
### Next-Generation FinTech Banking with Revolut
Revolut leads European and UK digital banking with instant zero-fee SEPA transfers, disposable virtual cards for secure media buying, and multi-currency exchange. GolfCrater delivers authenticated Revolut accounts ready for immediate fund routing.
    `,
  },

  // ===================== CRYPTO ACCOUNT CATEGORY =====================
  {
    id: 'buy-verified-binance-account',
    name: 'Buy Verified Binance Account',
    slug: 'buy-verified-binance-account',
    category: 'Crypto Account',
    shortDescription: 'Verified Binance accounts with Plus-tier verification, high daily crypto withdrawal limits, P2P trading access, and full document package.',
    priceRange: '$219 - $449',
    startingPrice: 219,
    rating: 5.0,
    reviewCount: 460,
    image: PRODUCT_LOGOS['buy-verified-binance-account'],
    badge: 'Top Crypto',
    tags: ['Binance Plus', '100 BTC Limit', 'P2P Trading', 'KYC Verified', 'Futures Ready', 'Clean IP History'],
    metaDescription: 'Buy verified Binance accounts at GolfCrater. New, aged, and documents-included accounts with top tier withdrawal limits and 24/7 delivery.',
    specifications: {
      deliveryTime: 'Instant to 2 Hours',
      guaranteePeriod: '30 Days Replacement Warranty',
      verificationLevel: 'Verified Plus (Government ID + Facial Biometrics)',
      supportAvailable: 'Crypto Security Specialist',
      documentsIncluded: 'Login Email, Password, 2FA Backup Key, Full KYC Documents',
      supportedRegions: 'Global (Excluding Prohibited Jurisdictions)',
    },
    variants: [
      { id: 'bin-new', name: '01 New Verified Binance Account', price: 219 },
      { id: 'bin-old', name: '01 Old Verified Binance Account', price: 319, popular: true },
      { id: 'bin-docs', name: '01 Verified Binance Account With Documents', price: 449 },
    ],
    fullDescription: `
### Full-Feature Trading on the World's Largest Crypto Exchange
Binance provides unmatched digital asset liquidity, low spot and futures trading fees, and global P2P currency conversion. Many users face regional restrictions or rigorous document re-verifications. GolfCrater delivers pre-verified Binance accounts with level-2 and Verified Plus certifications, enabling daily withdrawal caps of over $2,000,000 equivalent.
    `,
  },
  {
    id: 'buy-verified-coinbase-account',
    name: 'Buy Verified Coinbase Account',
    slug: 'buy-verified-coinbase-account',
    category: 'Crypto Account',
    shortDescription: 'Level 3 verified Coinbase accounts with instant fiat on/off-ramp, linked debit card purchases, and full KYC document package.',
    priceRange: '$249 - $299',
    startingPrice: 249,
    rating: 4.9,
    reviewCount: 340,
    image: PRODUCT_LOGOS['buy-verified-coinbase-account'],
    tags: ['Coinbase Pro', 'Level 3 KYC', 'Instant Fiat Ramp', 'ACH/SEPA Ready', 'US/EU Verified'],
    metaDescription: 'Buy verified Coinbase accounts at GolfCrater. High transaction capacity, instant crypto buying, and full KYC identity documentation.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Replacement Warranty',
      verificationLevel: 'Level 3 (Highest Fiat Limits)',
      supportAvailable: '24/7 Crypto Ops',
      documentsIncluded: 'Credentials, Linked Email, ID Proof, 2FA Seeds',
      supportedRegions: 'United States & European Union',
    },
    variants: [
      { id: 'cb-std', name: '01 Verified Coinbase Account', price: 249 },
      { id: 'cb-docs', name: '01 Verified Coinbase Account With Documents', price: 299, popular: true },
    ],
    fullDescription: `
### Instant US and EU Crypto On-Ramp with Coinbase
Coinbase represents the most trusted publicly traded crypto platform in North America and Western Europe. Our verified accounts grant you immediate access to standard Coinbase and Coinbase Advanced trading with high daily limits.
    `,
  },
  {
    id: 'buy-verified-kraken-accounts',
    name: 'Buy Verified Kraken Accounts',
    slug: 'buy-verified-kraken-accounts',
    category: 'Crypto Account',
    shortDescription: 'Intermediate and Pro verified Kraken accounts featuring low OTC fees, margin trading, and unlimited fiat deposit limits.',
    priceRange: '$199 - $349',
    startingPrice: 199,
    rating: 4.8,
    reviewCount: 215,
    image: PRODUCT_LOGOS['buy-verified-kraken-accounts'],
    tags: ['Kraken Pro', 'Intermediate/Pro Tier', 'High Limits', 'Margin Trading', 'EUR/USD Wire'],
    metaDescription: 'Buy verified Kraken accounts at GolfCrater. Personal and business tiers available with unlimited crypto deposit and high fiat withdrawal capabilities.',
    specifications: {
      deliveryTime: '2 - 4 Hours',
      guaranteePeriod: '30 Days Full Replacement Warranty',
      verificationLevel: 'Pro / Intermediate Level Verified',
      supportAvailable: '24/7 Support Desk',
      documentsIncluded: 'Master Account, Primary Email Access, Verification Package',
      supportedRegions: 'USA, Canada, EU, Worldwide',
    },
    variants: [
      { id: 'krk-p', name: '01 Personal Verified Kraken Account', price: 199 },
      { id: 'krk-b', name: '01 Business Verified Kraken Account', price: 349, popular: true },
    ],
    fullDescription: `
### Institutional Security & Deep Liquidity on Kraken
Known for exceptional security standards and robust margin trading suites, Kraken is the choice exchange for serious market participants. GolfCrater supplies verified personal and institutional business accounts configured for seamless wire transfers.
    `,
  },
  {
    id: 'buy-moonpay-account',
    name: 'Buy MoonPay Account',
    slug: 'buy-moonpay-account',
    category: 'Crypto Account',
    shortDescription: 'Fully verified MoonPay accounts for instant debit card and Apple Pay crypto purchases with high transaction thresholds.',
    priceRange: '$319 - $399',
    startingPrice: 319,
    rating: 4.9,
    reviewCount: 180,
    image: PRODUCT_LOGOS['buy-moonpay-account'],
    tags: ['MoonPay', 'Card to Crypto', 'Instant Buying', 'Apple Pay Support', 'Clean History'],
    metaDescription: 'Buy verified MoonPay accounts at GolfCrater. Seamless card-to-crypto checkout infrastructure with high daily purchase limits.',
    specifications: {
      deliveryTime: 'Instant to 2 Hours',
      guaranteePeriod: '30 Days Replacement Guarantee',
      verificationLevel: 'Tier 3 Identity Verified',
      supportAvailable: 'Dedicated Account Manager',
      documentsIncluded: 'Account Access, Email Control, Verification Record',
      supportedRegions: 'Global / USA / Europe',
    },
    variants: [
      { id: 'mp-std', name: '01 MoonPay Account', price: 319 },
      { id: 'mp-old', name: '01 Old MoonPay Account', price: 399, popular: true },
    ],
    fullDescription: `
### Direct Card-to-Crypto Checkout with MoonPay
MoonPay allows users to purchase Bitcoin, Ethereum, and hundreds of altcoins directly using credit card, debit card, or Apple Pay. Our verified accounts eliminate processing bottlenecks so you can onboard liquidity instantaneously.
    `,
  },

  // ===================== EMAIL SERVICES =====================
  {
    id: 'buy-gmail-accounts',
    name: 'Buy Gmail Accounts',
    slug: 'buy-gmail-accounts',
    category: 'Email Service',
    shortDescription: 'Pristine aged Gmail accounts with recovery email, phone-verified security, and high inbox deliverability.',
    priceRange: '$18 - $1,450',
    startingPrice: 18,
    rating: 4.9,
    reviewCount: 385,
    image: PRODUCT_LOGOS['buy-gmail-accounts'],
    badge: 'Aged Accounts',
    tags: ['Gmail', 'Google Accounts', 'Aged Inboxes', 'Phone Verified', 'Recovery Added', 'POP3/IMAP Ready'],
    metaDescription: 'Buy verified and aged Gmail accounts in bulk at GolfCrater. Packages from 5 to 500 accounts with 100% replacement guarantee and instant delivery.',
    specifications: {
      deliveryTime: 'Instant to 1 Hour',
      guaranteePeriod: '30 Days Replacement Warranty',
      verificationLevel: 'Phone Verified (PVA) + Recovery Email Set',
      supportAvailable: '24/7 Bulk Account Specialist',
      documentsIncluded: 'Email, Password, Recovery Email, 2FA Backup Keys',
      supportedRegions: 'Worldwide (US/UK/EU Clean IPs)',
    },
    variants: [
      { id: 'gmail-5', name: '05 Old Gmail Accounts', price: 18 },
      { id: 'gmail-10', name: '10 Old Gmail Accounts', price: 35 },
      { id: 'gmail-20', name: '20 Old Gmail Accounts', price: 75 },
      { id: 'gmail-30', name: '30 Old Gmail Accounts', price: 105 },
      { id: 'gmail-50', name: '50 Old Gmail Accounts', price: 165, popular: true },
      { id: 'gmail-100', name: '100 Old Gmail Accounts', price: 310 },
      { id: 'gmail-200', name: '200 Old Gmail Accounts', price: 599 },
      { id: 'gmail-300', name: '300 Old Gmail Accounts', price: 880 },
      { id: 'gmail-500', name: '500 Old Gmail Accounts', price: 1450 },
    ],
    fullDescription: `
### Premium Aged Gmail Accounts for Marketing, Outreach & Business
GolfCrater provides high-quality, aged Gmail accounts with verified phone status, pre-configured recovery options, and clean cookie/IP history. Whether you need 5 accounts for personal privacy or 500 accounts for enterprise marketing automation, each inbox is tested for seamless POP3/IMAP integration and uninterrupted Google ecosystem access.
    `,
  },
  {
    id: 'buy-smtp-mailgun-accounts',
    name: 'Buy SMTP Mailgun Accounts',
    slug: 'buy-smtp-mailgun-accounts',
    category: 'Email Service',
    shortDescription: 'Dedicated Mailgun SMTP accounts with pre-authenticated API credentials, clean sending reputations, and high monthly limits.',
    priceRange: '$150 - $300',
    startingPrice: 150,
    rating: 4.9,
    reviewCount: 194,
    image: PRODUCT_LOGOS['buy-smtp-mailgun-accounts'],
    badge: 'High Deliverability',
    tags: ['Mailgun', 'SMTP Relay', 'API Sending', 'Pre-Warmed', 'SPF/DKIM Verified', 'Transactional Mail'],
    metaDescription: 'Buy verified Mailgun SMTP sending accounts at GolfCrater. 50k, 100k, and 200k monthly sending allowances with full credentials and replacement warranty.',
    specifications: {
      deliveryTime: '1 to 3 Hours',
      guaranteePeriod: '30 Days Active Warranty',
      verificationLevel: 'Card Verified + Domain Authentication Ready',
      supportAvailable: 'Email Infrastructure Desk',
      documentsIncluded: 'Mailgun Login, API Secret Keys, SMTP Host/Port Credentials',
      supportedRegions: 'Global Sending Standards',
    },
    variants: [
      { id: 'mailgun-50k', name: '50k Email Per Month', price: 150 },
      { id: 'mailgun-100k', name: '100k Email Per Month', price: 180, popular: true },
      { id: 'mailgun-200k', name: '200k Email Per Month', price: 300 },
    ],
    fullDescription: `
### Scalable Mailgun SMTP Accounts for Developers and Growth Marketers
Power your transactional notifications, newsletter dispatches, and marketing campaigns with fully verified Mailgun SMTP infrastructure. Bypasses common onboarding holds with verified payment profiles and ready-to-use API access tokens.
    `,
  },
  {
    id: 'buy-smtp-brevo-accounts',
    name: 'Buy SMTP Brevo Accounts',
    slug: 'buy-smtp-brevo-accounts',
    category: 'Email Service',
    shortDescription: 'Verified Brevo (Sendinblue) accounts with dedicated SMTP relays, marketing automation features, and high monthly quotas.',
    priceRange: '$150 - $300',
    startingPrice: 150,
    rating: 5.0,
    reviewCount: 218,
    image: PRODUCT_LOGOS['buy-smtp-brevo-accounts'],
    badge: 'Popular Choice',
    tags: ['Brevo', 'Sendinblue', 'SMTP Relay', 'Marketing Automation', 'High Quota', 'No Sandbox Hold'],
    metaDescription: 'Buy verified Brevo (formerly Sendinblue) SMTP accounts at GolfCrater. Choose from 50k, 100k, or 200k monthly email sending plans with instant setup.',
    specifications: {
      deliveryTime: '1 to 2 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Validated Corporate Profile & SMTP Unlocked',
      supportAvailable: '24/7 Technical Support',
      documentsIncluded: 'Brevo Master Login, SMTP Relay Credentials, API V3 Key',
      supportedRegions: 'Global Coverage (EU/US/APAC)',
    },
    variants: [
      { id: 'brevo-50k', name: '50k Email Per Month', price: 150 },
      { id: 'brevo-100k', name: '100k Email Per Month', price: 180, popular: true },
      { id: 'brevo-200k', name: '200k Email Per Month', price: 300 },
    ],
    fullDescription: `
### High-Efficiency Brevo SMTP Relay & Newsletter Infrastructure
Skip the tedious manual review and warm-up requirements with verified Brevo accounts configured for high monthly send volumes. Full support for transactional SMTP, email campaigns, and custom webhook tracking.
    `,
  },
  {
    id: 'buy-smtp-relay-services-account',
    name: 'Buy SMTP Relay Services Account',
    slug: 'buy-smtp-relay-services-account',
    category: 'Email Service',
    shortDescription: 'Enterprise SMTP relay infrastructure with multi-IP failover, custom SPF/DKIM/DMARC authentication, and 99.9% uptime.',
    priceRange: '$200 - $350',
    startingPrice: 200,
    rating: 4.9,
    reviewCount: 162,
    image: PRODUCT_LOGOS['buy-smtp-relay-services-account'],
    badge: 'Enterprise Relay',
    tags: ['SMTP Relay', 'Dedicated Server', 'Warm IP Pool', 'Cold Outreach', 'Multi-IP Failover', 'Bulk Mailer'],
    metaDescription: 'Buy high-capacity SMTP Relay Service accounts at GolfCrater. 50k, 100k, and 200k monthly email options with 99.8% inbox deliverability and instant relay ports.',
    specifications: {
      deliveryTime: '2 to 4 Hours',
      guaranteePeriod: '45 Days Warranty',
      verificationLevel: 'Dedicated Server IP & Clean Reputation Certificate',
      supportAvailable: 'Lead Deliverability Engineer',
      documentsIncluded: 'SMTP Hostname, Port (25/465/587), User/Pass, Webmail Console',
      supportedRegions: 'Global Enterprise Network',
    },
    variants: [
      { id: 'smtp-relay-50k', name: '50k Email Per Month', price: 200 },
      { id: 'smtp-relay-100k', name: '100k Email Per Month', price: 250, popular: true },
      { id: 'smtp-relay-200k', name: '200k Email Per Month', price: 350 },
    ],
    fullDescription: `
### Dedicated SMTP Relay Infrastructure Built for Serious High-Volume Senders
Stop struggling with shared IP blocklists and aggressive email throttling. GolfCrater dedicated SMTP relay servers route your outgoing volume through clean IP ranges, maximizing inbox placement on Gmail, Outlook, Yahoo, and corporate firewalls.
    `,
  },

  // ===================== ACCOUNT CATEGORY =====================
  {
    id: 'buy-amazon-account',
    name: 'Buy Amazon Account',
    slug: 'buy-amazon-account',
    category: 'Account',
    shortDescription: 'Fully verified Amazon Buyer and Seller accounts with clean IP history, verified billing, and complete documentation for instant e-commerce operations.',
    priceRange: '$70 - $750',
    startingPrice: 70,
    rating: 4.9,
    reviewCount: 184,
    image: PRODUCT_LOGOS['buy-amazon-account'],
    badge: 'Buyer & Seller',
    tags: ['Amazon Seller', 'Amazon Buyer', 'Aged Profile', 'Prime Eligible', '2FA Included', 'Clean IP'],
    metaDescription: 'Buy verified Amazon Buyer and Seller accounts at GolfCrater. Aged accounts, clean transaction histories, 2FA recovery, and 30-day replacement warranty.',
    specifications: {
      deliveryTime: '1 - 4 Hours',
      guaranteePeriod: '30 Days Replacement Guarantee',
      verificationLevel: 'Full Identity & Bank Verified',
      supportAvailable: '24/7 Live Support',
      documentsIncluded: 'Login, 2FA Recovery & Email Access',
      supportedRegions: 'USA, UK, Germany, Canada & Global',
    },
    variants: [
      { id: 'amz-new-buyer', name: '01 New Amazon Buyer Account', price: 70 },
      { id: 'amz-old-buyer', name: '01 Old Amazon Buyer Account', price: 99 },
      { id: 'amz-new-seller', name: '01 New Amazon Seller Account', price: 420, popular: true },
      { id: 'amz-old-seller', name: '01 Old Amazon Seller Account', price: 750 },
    ],
    fullDescription: `
### Verified Amazon Buyer and Seller Accounts Ready for Immediate Commerce
Scaling an e-commerce presence requires reliable, compliant marketplace foundations. GolfCrater provides high-standing, pre-verified Amazon Buyer and Seller accounts configured with clean browser fingerprint histories, registered phone verification, and verified payment instruments.

Whether you require an aged buyer account for automated purchasing and testing, or a full professional Seller Central storefront to launch your private label inventory without onboarding delays, our accounts arrive with full primary email control, 2FA authentication seeds, and clear setup documentation.
    `,
  },
  {
    id: 'buy-apple-developer-account',
    name: 'Buy Apple Developer Account',
    slug: 'buy-apple-developer-account',
    category: 'Account',
    shortDescription: 'Verified Apple Developer accounts (Personal & Business D-U-N-S verified) ready for iOS app store deployment, TestFlight distribution, and enterprise signing.',
    priceRange: '$499 - $999',
    startingPrice: 499,
    rating: 4.9,
    reviewCount: 96,
    image: PRODUCT_LOGOS['buy-apple-developer-account'],
    badge: 'D-U-N-S Verified',
    tags: ['Apple Developer', 'iOS App Store', 'D-U-N-S Number', 'Enterprise Account', 'TestFlight Ready'],
    metaDescription: 'Buy verified Apple Developer accounts at GolfCrater. Personal and D-U-N-S verified corporate accounts ready for instant iOS App Store publishing.',
    specifications: {
      deliveryTime: '2 - 6 Hours',
      guaranteePeriod: '60 Days Warranty',
      verificationLevel: 'D-U-N-S & Corporate ID Verified',
      supportAvailable: '24/7 Priority Desk',
      documentsIncluded: 'Full Apple ID, Recovery Keys & D-U-N-S Docs',
      supportedRegions: 'USA, EU, UK & Worldwide',
    },
    variants: [
      { id: 'apple-personal', name: '01 Apple Developer Personal Account', price: 499 },
      { id: 'apple-business', name: '01 Apple Developer Business Account', price: 999, popular: true },
    ],
    fullDescription: `
### Premium Apple Developer Accounts for Seamless App Store Publishing
Navigating the multi-week Apple Developer Program approval and corporate D-U-N-S number verification can stall critical product roadmaps. GolfCrater delivers 100% pre-approved, fully paid annual Apple Developer accounts equipped with clean organizational profiles.

Deploy iOS, iPadOS, macOS, and watchOS binaries directly through Xcode, utilize TestFlight beta distribution for up to 10,000 testers, and generate production APNs push certificates and developer profiles immediately upon delivery.
    `,
  },
  {
    id: 'buy-google-play-console-account',
    name: 'Buy Google Play Console Account',
    slug: 'buy-google-play-console-account',
    category: 'Account',
    shortDescription: '100% verified Google Play Console developer accounts. Pre-warmed with verified ID, phone, payment profile, and optional live published app history.',
    priceRange: '$290 - $450',
    startingPrice: 290,
    rating: 4.9,
    reviewCount: 142,
    image: PRODUCT_LOGOS['buy-google-play-console-account'],
    badge: 'Instant Publish',
    tags: ['Google Play Console', 'Android Developer', 'Aged Console', 'Live App Included', 'Identity Verified'],
    metaDescription: 'Buy verified Google Play Console accounts at GolfCrater. New, aged, and live app developer accounts with pre-verified payment profiles and 30-day replacement.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Google Payment Profile & ID Verified',
      supportAvailable: '24/7 Live Support',
      documentsIncluded: 'Console Access, Gmail, Recovery Phone & Docs',
      supportedRegions: 'Worldwide (US/UK/EU Resident IPs)',
    },
    variants: [
      { id: 'play-new', name: 'New Google Play Account Only', price: 290 },
      { id: 'play-old', name: 'Old Google Play Account Only', price: 399, popular: true },
      { id: 'play-old-app', name: 'Old Google Play Account With App Only', price: 450 },
    ],
    fullDescription: `
### Certified Google Play Developer Accounts with Zero Verification Friction
Launching Android applications under Google's stringent 20-tester requirement and strict merchant identification checks requires established infrastructure. GolfCrater offers pre-registered, fully paid $25 fee-settled Google Play Console accounts.

Choose between freshly initialized accounts, aged developer consoles with established standing, or aged accounts with an already live published app to bypass initial algorithmic sandbox reviews.
    `,
  },
  {
    id: 'buy-facebook-ads-accounts',
    name: 'Buy Facebook Ads Accounts',
    slug: 'buy-facebook-ads-accounts',
    category: 'Account',
    shortDescription: 'Aged and warmed Facebook Ads accounts with verified Business Managers, pre-warmed pixels, high daily spending limits, and clean billing thresholds.',
    priceRange: '$149 - $199',
    startingPrice: 149,
    rating: 4.8,
    reviewCount: 215,
    image: PRODUCT_LOGOS['buy-facebook-ads-accounts'],
    badge: 'High Spend',
    tags: ['Facebook Ads', 'Business Manager', 'High Daily Limit', 'Agency BM', 'Pixel Ready'],
    metaDescription: 'Buy verified Facebook Ads accounts at GolfCrater. High daily spending limits, verified Meta Business Managers, aged ad accounts, and 24/7 agency support.',
    specifications: {
      deliveryTime: '1 - 2 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Verified BM & Clean Billing History',
      supportAvailable: '24/7 Agency Support',
      documentsIncluded: 'BM Admin Invite, 2FA Profile, Cookies & Proxy Guidance',
      supportedRegions: 'USA, UK, Australia & Worldwide',
    },
    variants: [
      { id: 'fb-ads-new', name: '01 Facebook Ads Accounts Only', price: 149 },
      { id: 'fb-ads-old', name: '01 Old Facebook Ads Accounts Only', price: 199, popular: true },
    ],
    fullDescription: `
### High-Spend Limit Facebook Ads Accounts for Scalable Media Buying
Media buyers, e-commerce dropshippers, and performance agencies need ad infrastructure that withstands aggressive scaling without immediate payment holds. Our Facebook Ads accounts feature verified Business Managers (BM), high daily spend thresholds ($250 to unlimited), and clean history.

Each package includes residential cookies, detailed browser fingerprint instructions, and secondary admin invite links to ensure zero disruption to active campaigns.
    `,
  },
  {
    id: 'buy-github-accounts',
    name: 'Buy GitHub Accounts',
    slug: 'buy-github-accounts',
    category: 'Account',
    shortDescription: 'Aged and active GitHub accounts with organic commit streaks, stars, repositories, and genuine follower counts. Perfect for developer credibility and CI/CD operations.',
    priceRange: '$25 - $499',
    startingPrice: 25,
    rating: 4.9,
    reviewCount: 268,
    image: PRODUCT_LOGOS['buy-github-accounts'],
    badge: 'Green Commits',
    tags: ['GitHub', 'Developer Profile', 'Aged Commits', 'Stars & Repos', 'Organic Followers', 'SSH Access'],
    metaDescription: 'Buy aged GitHub accounts with followers, stars, and green contribution history at GolfCrater. Instant delivery, full email access, and 30-day warranty.',
    specifications: {
      deliveryTime: 'Instant to 2 Hours',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Verified Email & Clean Public Activity',
      supportAvailable: '24/7 Tech Support',
      documentsIncluded: 'GitHub Login, Primary Email & 2FA Recovery Codes',
      supportedRegions: 'Global',
    },
    variants: [
      { id: 'gh-01-new', name: '01 New GitHub Account', price: 25 },
      { id: 'gh-01-old', name: '01 Old GitHub Account', price: 45 },
      { id: 'gh-05-new', name: '05 New GitHub Account', price: 110 },
      { id: 'gh-05-old', name: '05 Old GitHub Account', price: 199 },
      { id: 'gh-old-100f', name: '1 Old GitHub Account With 100 Follower, Contribution, Star, Repository', price: 120 },
      { id: 'gh-old-300f', name: '1 Old GitHub Account With 300 Follower, Contribution, Star, Repository', price: 199 },
      { id: 'gh-old-500f', name: '1 Old GitHub Account With 500 Follower, Contribution, Star, Repository', price: 299 },
      { id: 'gh-old-1000f', name: '1 Old GitHub Account With 1000 Follower, Contribution, Star, Repository', price: 499, popular: true },
    ],
    fullDescription: `
### Aged GitHub Accounts with Organic Contributions, Stars & Followers
Establish instant engineering authority for your open-source projects, Web3 protocols, or developer portfolio. GolfCrater supplies genuine aged GitHub accounts featuring historical green contribution heatmaps, public repositories, stars, and real follower networks.

All accounts arrive with full primary email credentials, verified 2FA recovery backup codes, and clean IP histories for immediate Git CLI and GitHub Actions utilization.
    `,
  },
  {
    id: 'buy-google-ads-account',
    name: 'Buy Google Ads Account',
    slug: 'buy-google-ads-account',
    category: 'Account',
    shortDescription: 'Spendable Google Ads accounts with verified billing methods, active campaign history, high threshold limits, and zero initial review delays.',
    priceRange: '$140 - $270',
    startingPrice: 140,
    rating: 4.9,
    reviewCount: 189,
    image: PRODUCT_LOGOS['buy-google-ads-account'],
    badge: 'Spendable Balance',
    tags: ['Google Ads', 'Spendable Credit', 'Active Billing', 'Search Ads', 'No Suspension Hold'],
    metaDescription: 'Buy verified spendable Google Ads accounts with pre-warmed billing balances at GolfCrater. $350, $600, and $800 spendable options with instant delivery.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Advertiser Identity & Billing Verified',
      supportAvailable: '24/7 PPC Specialist',
      documentsIncluded: 'Manager Account Linking / Direct Credentials',
      supportedRegions: 'USA, UK, Canada & EU',
    },
    variants: [
      { id: 'gads-01', name: '01 Google Ads Accounts Only', price: 100 },
      { id: 'gads-old', name: '01 Old Google Ads Accounts Only', price: 140 },
      { id: 'gads-camp', name: '01 Google Ads Accounts with 1 Active Campaign', price: 150, popular: true },
      { id: 'gads-100', name: '01 Old Google Ads Accounts $100+ Spent Only', price: 250 },
      { id: 'gads-500', name: '01 Old Google Ads Accounts $500+ Spent Only', price: 400 },
      { id: 'gads-1000', name: '01 Old Google Ads Accounts $1000+ Spent Only', price: 700 },
    ],
    fullDescription: `
### Spendable Google Ads Accounts with Pre-Warmed Verification & Billing
Bypass the common "suspicious payment" suspension triggers when launching high-converting search, display, or YouTube ad campaigns. Our spendable Google Ads accounts are constructed with established billing histories and verified advertiser status.

Select from starter accounts, active campaign accounts, or aged high-spend accounts ($100+, $500+, $1000+ spent) configured for uninterrupted traffic delivery and optimal ad rank auction performance.
    `,
  },
  {
    id: 'buy-taboola-ads-account',
    name: 'Buy Taboola Ads Account',
    slug: 'buy-taboola-ads-account',
    category: 'Account',
    shortDescription: 'Verified Taboola native advertising agency and advertiser accounts with verified payment setup, ready for high-converting native ad campaigns.',
    priceRange: '$220 - $250',
    startingPrice: 220,
    rating: 4.9,
    reviewCount: 94,
    image: PRODUCT_LOGOS['buy-taboola-ads-account'],
    badge: 'Native Ads',
    tags: ['Taboola', 'Native Ads', 'Active Campaign', 'Advertiser Account', 'High CTR'],
    metaDescription: 'Buy verified Taboola Ads accounts at GolfCrater. Clean billing, active campaigns, and 30-day replacement warranty.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Billing & Advertiser ID Verified',
      supportAvailable: '24/7 Native Ad Specialist',
      documentsIncluded: 'Direct Credentials & Recovery Access',
      supportedRegions: 'USA, UK & Global Networks',
    },
    variants: [
      { id: 'tab-01', name: '01 Taboola Ads Account Only', price: 220 },
      { id: 'tab-camp', name: '01 Taboola Ads Account With 1 Active Campaign', price: 250, popular: true },
    ],
    fullDescription: `
### Verified Taboola Native Advertising Accounts
Scale native content recommendations, affiliate offers, and brand campaigns on premier publisher networks with GolfCrater's verified Taboola Ads accounts.

Delivered pre-approved with valid payment methods, active account standing, and options for pre-configured live campaigns.
    `,
  },
  {
    id: 'buy-bing-ads-accounts',
    name: 'Buy Bing Ads Accounts',
    slug: 'buy-bing-ads-accounts',
    category: 'Account',
    shortDescription: 'Aged Microsoft Bing Advertising accounts with pre-spent history ($500+ and $1000+ spend tiers) and verified credit/debit billing methods.',
    priceRange: '$100 - $499',
    startingPrice: 100,
    rating: 4.8,
    reviewCount: 168,
    image: PRODUCT_LOGOS['buy-bing-ads-accounts'],
    badge: 'Pre-Spent',
    tags: ['Bing Ads', 'Microsoft Advertising', 'Search Ads', 'Aged Billing', 'Spent History'],
    metaDescription: 'Buy aged Microsoft Bing Ads accounts with verified spend history up to $1000+ at GolfCrater. Clean accounts, instant delivery, 30-day warranty.',
    specifications: {
      deliveryTime: '1 - 2 Hours',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Microsoft ID & Credit Card Verified',
      supportAvailable: '24/7 PPC Support',
      documentsIncluded: 'Microsoft Account Credentials & 2FA Codes',
      supportedRegions: 'USA, UK, Canada & Global',
    },
    variants: [
      { id: 'bing-01', name: '01 Bing Ads Accounts Only', price: 100 },
      { id: 'bing-old', name: '01 Old Bing Ads Accounts Only', price: 150 },
      { id: 'bing-500', name: '01 Old Bing Ads Accounts $500+ Spent Only', price: 290, popular: true },
      { id: 'bing-1000', name: '01 Old Bing Ads Accounts $1000+ Spent Only', price: 499 },
    ],
    fullDescription: `
### Aged Microsoft Advertising (Bing Ads) with Verified Spend Standing
Capture high-income desktop searchers on Bing, Yahoo, and MSN. Our Bing Ads accounts have established historical spend, validated payment links, and aged trustworthiness.
    `,
  },
  {
    id: 'buy-tiktok-ads-account',
    name: 'Buy TikTok Ads Account',
    slug: 'buy-tiktok-ads-account',
    category: 'Account',
    shortDescription: 'Verified TikTok Ads Agency accounts, USA/UK targeting accounts, and verified Business Center (BC) profiles with no spend caps.',
    priceRange: '$140 - $290',
    startingPrice: 140,
    rating: 4.9,
    reviewCount: 215,
    image: PRODUCT_LOGOS['buy-tiktok-ads-account'],
    badge: 'Agency Verified',
    tags: ['TikTok Ads', 'Agency Account', 'Verified BC', 'Worldwide Targeting', 'No Spend Limit'],
    metaDescription: 'Buy verified TikTok Ads Agency accounts and Business Centers with worldwide targeting at GolfCrater. Uncapped spend and instant delivery.',
    specifications: {
      deliveryTime: '1 - 2 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'TikTok Business Center KYC Verified',
      supportAvailable: '24/7 Ad Specialist',
      documentsIncluded: 'Business Center Admin Invite & Dedicated Login',
      supportedRegions: 'Worldwide Targeting (USA, UK, EU)',
    },
    variants: [
      { id: 'tt-agency', name: '01 TikTok Ads Account (Agency) Only', price: 140 },
      { id: 'tt-usauk', name: '01 TikTok Ads Account (USA/UK) Only', price: 199, popular: true },
      { id: 'tt-bc', name: '01 TikTok Ads Account (Verified BC) Only', price: 290 },
    ],
    fullDescription: `
### Premium TikTok Agency & Business Center Ads Accounts
Run viral TikTok conversions without geo-blocks or sudden account restrictions. Target Tier 1 countries directly with pre-verified Business Centers and Agency privileges.
    `,
  },
  {
    id: 'buy-snapchat-ads-account',
    name: 'Buy Snapchat Ads Account',
    slug: 'buy-snapchat-ads-account',
    category: 'Account',
    shortDescription: 'Verified Snapchat Ads Manager accounts and verified Business Manager (BM) profiles for mobile app installs and e-commerce campaigns.',
    priceRange: '$140 - $290',
    startingPrice: 140,
    rating: 4.8,
    reviewCount: 132,
    image: PRODUCT_LOGOS['buy-snapchat-ads-account'],
    badge: 'Verified BM',
    tags: ['Snapchat Ads', 'Business Manager', 'Mobile Ads', 'Gen Z Reach', 'Instant Approval'],
    metaDescription: 'Buy verified Snapchat Ads accounts and Business Managers at GolfCrater. Pre-warmed billing, instant approval, and 30-day guarantee.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Warranty',
      verificationLevel: 'Business Verified & Active Card',
      supportAvailable: '24/7 Help Desk',
      documentsIncluded: 'Business Manager Access & Credentials',
      supportedRegions: 'USA, UK, Europe, Australia',
    },
    variants: [
      { id: 'snap-01', name: '01 Snapchat Ads Account Only', price: 140 },
      { id: 'snap-old', name: '01 Old Snapchat Ads Account Only', price: 199 },
      { id: 'snap-bm', name: '01 Snapchat Ads Account (Verified BM) Only', price: 290, popular: true },
    ],
    fullDescription: `
### High-Trust Snapchat Ads Manager Accounts
Reach active, engaged audiences across Snapchat with pre-warmed Business Managers. Bypass automated payment flagging and start running Story, Collection, and Spotlight ads instantly.
    `,
  },
  {
    id: 'buy-twitter-ads-accounts',
    name: 'Buy Twitter Ads Accounts',
    slug: 'buy-twitter-ads-accounts',
    category: 'Account',
    shortDescription: 'Verified X (Twitter) Ads Manager accounts including aged profiles and official Gold Organization verification badge accounts.',
    priceRange: '$180 - $850',
    startingPrice: 180,
    rating: 4.9,
    reviewCount: 178,
    image: PRODUCT_LOGOS['buy-twitter-ads-accounts'],
    badge: 'Gold Badge Opt',
    tags: ['Twitter Ads', 'X Ads', 'Gold Badge', 'Verified Org', 'High Spend Limit'],
    metaDescription: 'Buy verified Twitter Ads accounts with optional Gold badge organization verification at GolfCrater. Uncapped reach, instant delivery, 30-day warranty.',
    specifications: {
      deliveryTime: '1 - 4 Hours',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Identity & Organization Verified',
      supportAvailable: '24/7 Social Ads Expert',
      documentsIncluded: 'X Account, Email Credentials & Ads Access',
      supportedRegions: 'Global Reach',
    },
    variants: [
      { id: 'tw-ads-01', name: '01 Twitter Ads Accounts Only', price: 180 },
      { id: 'tw-ads-old', name: '01 Old Twitter Ads Accounts Only', price: 250, popular: true },
      { id: 'tw-ads-gold', name: '01 Twitter Ads Accounts with Gold Badge Only', price: 850 },
    ],
    fullDescription: `
### Verified X (Twitter) Ads Accounts & Gold Organization Badges
Promote posts, amplify brand narratives, and drive app conversions on X. Choose between standard verified ads accounts or elite Gold Badge verified organizational profiles with maximum organic algorithmic trust.
    `,
  },
  {
    id: 'buy-outbrain-ads-account',
    name: 'Buy Outbrain Ads Account',
    slug: 'buy-outbrain-ads-account',
    category: 'Account',
    shortDescription: 'Verified Outbrain advertiser accounts with pre-approved publisher whitelisting and active campaigns for immediate native traffic acquisition.',
    priceRange: '$210 - $260',
    startingPrice: 210,
    rating: 4.8,
    reviewCount: 88,
    image: PRODUCT_LOGOS['buy-outbrain-ads-account'],
    badge: 'Native Feed',
    tags: ['Outbrain', 'Native Advertising', 'Publisher Whitelist', 'Active Campaign', 'Clean Billing'],
    metaDescription: 'Buy verified Outbrain Ads accounts at GolfCrater. Fast approvals, active native campaigns, and 30-day warranty.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Advertiser Identity & Billing Verified',
      supportAvailable: '24/7 Native Ads Desk',
      documentsIncluded: 'Account Login, Billing Profile & Support Guide',
      supportedRegions: 'USA, Europe, Asia-Pacific',
    },
    variants: [
      { id: 'out-01', name: '01 Outbrain Ads Account Only', price: 210 },
      { id: 'out-camp', name: '01 Outbrain Ads Account with 1 Active Campaign', price: 260, popular: true },
    ],
    fullDescription: `
### Outbrain Verified Advertiser Accounts for High-Volume Native Traffic
Distribute editorial content, lead gen funnels, and e-commerce landers across top editorial news sites worldwide. Pre-vetted by Outbrain's compliance network for zero startup delay.
    `,
  },
  {
    id: 'buy-google-voice-accounts',
    name: 'Buy Google Voice Accounts',
    slug: 'buy-google-voice-accounts',
    category: 'Other',
    shortDescription: 'Aged US Google Voice accounts with dedicated permanent US phone numbers for SMS verification, call forwarding, and two-factor authentication.',
    priceRange: '$25 - $210',
    startingPrice: 25,
    rating: 4.8,
    reviewCount: 312,
    image: PRODUCT_LOGOS['buy-google-voice-accounts'],
    badge: 'Permanent Number',
    tags: ['Google Voice', 'US Phone Number', 'SMS Verification', '2FA OTP', 'Aged VoIP'],
    metaDescription: 'Buy aged Google Voice accounts with real US phone numbers at GolfCrater. Receive SMS, OTP codes, and calls worldwide with full email access.',
    specifications: {
      deliveryTime: 'Instant to 1 Hour',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Carrier Line Verified',
      supportAvailable: '24/7 Live Chat',
      documentsIncluded: 'Gmail, Password, Recovery Email & Phone Number',
      supportedRegions: 'USA Area Codes',
    },
    variants: [
      { id: 'gv-01', name: '01 Google Voice Account Only', price: 25 },
      { id: 'gv-05', name: '05 Google Voice Accounts Only', price: 115, popular: true },
      { id: 'gv-10', name: '10 Google Voice Accounts Only', price: 210 },
    ],
    fullDescription: `
### Authentic Aged Google Voice Accounts with Permanent US Phone Numbers
GolfCrater provides reliable, aged Google Voice accounts linked to real US carrier numbers. These accounts allow seamless receipt of inbound SMS verification codes, OTP tokens, and VoIP calls from anywhere globally.

Each account includes dedicated Gmail login credentials, password, recovery email address, and clear browser connection recommendations to preserve account longevity.
    `,
  },

  // ===================== SMM ACCOUNT PRODUCTS =====================
  {
    id: 'buy-instagram-account',
    name: 'Buy Instagram Account',
    slug: 'buy-instagram-account',
    category: 'SMM Account',
    shortDescription: 'Phone-verified (PVA) Instagram accounts ranging from starter profiles to established 100k+ follower creator pages with real engagement and organic history.',
    priceRange: '$29 - $1,999',
    startingPrice: 29,
    rating: 4.9,
    reviewCount: 420,
    image: PRODUCT_LOGOS['buy-instagram-account'],
    badge: 'Real Followers',
    tags: ['Instagram PVA', 'Creator Profile', 'Niche Followers', 'Organic Engagement', 'Clean Standing'],
    metaDescription: 'Buy verified Instagram PVA accounts and creator profiles with up to 100k+ organic followers at GolfCrater. Instant delivery and 30-day warranty.',
    specifications: {
      deliveryTime: '1 - 4 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Phone Verified (PVA) & Aged Activity',
      supportAvailable: '24/7 SMM Support',
      documentsIncluded: 'Account Handle, Password & Original Email (OGE)',
      supportedRegions: 'USA, UK, Worldwide',
    },
    variants: [
      { id: 'ig-01-pva', name: '01 PVA Instagram Accounts Only', price: 29 },
      { id: 'ig-500f', name: 'PVA Instagram Accounts with 500+ Followers Only', price: 49 },
      { id: 'ig-1kf', name: 'PVA Instagram Accounts with 1k+ Followers Only', price: 59 },
      { id: 'ig-5kf', name: 'PVA Instagram Accounts with 5k+ Followers Only', price: 69 },
      { id: 'ig-10kf', name: 'PVA Instagram Accounts with 10k+ Followers Only', price: 99, popular: true },
      { id: 'ig-05-pva', name: '05 PVA Instagram Accounts Only', price: 139 },
      { id: 'ig-50kf', name: 'PVA Instagram Accounts with 50k+ Followers Only', price: 899 },
      { id: 'ig-100kf', name: 'PVA Instagram Accounts with 100k+ Followers Only', price: 1999 },
    ],
    fullDescription: `
### Aged & High-Follower Instagram Accounts for Brands, Creators & Influencers
Launch your brand on Instagram with immediate social proof. GolfCrater supplies verified Phone-Verified (PVA) Instagram profiles ranging from clean starter accounts up to massive 100k+ follower creator pages in lifestyle, tech, fitness, and e-commerce niches.

All high-tier accounts include original creation email (OGE) access, genuine historical posts, organic engagement rates, and clean shadowban-free profile statuses.
    `,
  },
  {
    id: 'buy-linkedin-accounts',
    name: 'Buy LinkedIn Accounts',
    slug: 'buy-linkedin-accounts',
    category: 'SMM Account',
    shortDescription: 'Aged LinkedIn accounts with genuine connection networks (200 to 1,000+ connections), complete professional resumes, and warm inbox delivery for B2B outreach.',
    priceRange: '$29 - $769',
    startingPrice: 29,
    rating: 4.9,
    reviewCount: 310,
    image: PRODUCT_LOGOS['buy-linkedin-accounts'],
    badge: '500+ Network',
    tags: ['LinkedIn', 'B2B Leads', 'Aged Profile', '1000+ Connections', 'Sales Navigator Ready'],
    metaDescription: 'Buy aged LinkedIn accounts with up to 1000+ connections at GolfCrater. Perfect for B2B lead generation, recruiter outreach, and Sales Navigator.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Phone & Email Verified Profile',
      supportAvailable: '24/7 B2B Specialist',
      documentsIncluded: 'Full Login, Cookies & Linked Business History',
      supportedRegions: 'USA, UK, Germany, Canada & Global',
    },
    variants: [
      { id: 'li-01', name: '01 LinkedIn Accounts Only', price: 29 },
      { id: 'li-01-200c', name: '01 LinkedIn Accounts With 200 Connection Only', price: 49 },
      { id: 'li-03', name: '03 LinkedIn Accounts Only', price: 85 },
      { id: 'li-03-600c', name: '03 LinkedIn Accounts With 600 Connection Only', price: 139 },
      { id: 'li-05', name: '05 LinkedIn Accounts Only', price: 139 },
      { id: 'li-05-1000c', name: '05 LinkedIn Accounts With 1000 Connection Only', price: 229, popular: true },
      { id: 'li-10', name: '10 LinkedIn Accounts Only', price: 269 },
      { id: 'li-30', name: '30 LinkedIn Accounts Only', price: 769 },
    ],
    fullDescription: `
### Verified LinkedIn Accounts with Established 1st-Degree Connection Networks
B2B prospecting and cold outreach require high SSI (Social Selling Index) scores to avoid LinkedIn connection request throttles. Our aged LinkedIn accounts come with realistic corporate profile histories, professional headshots, skills endorsements, and 200 to 1,000+ first-degree connections.

Ready for immediate pairing with automation suites (Expandi, Waalaxy, Dripify) and Sales Navigator subscriptions.
    `,
  },
  {
    id: 'buy-facebook-accounts',
    name: 'Buy Facebook Accounts',
    slug: 'buy-facebook-accounts',
    category: 'SMM Account',
    shortDescription: 'High-trust phone-verified Facebook personal profiles with profile photos, aged activity timelines, friends, and 2FA authentication recovery keys.',
    priceRange: '$29 - $139',
    startingPrice: 29,
    rating: 4.8,
    reviewCount: 388,
    image: PRODUCT_LOGOS['buy-facebook-accounts'],
    badge: 'Aged & PVA',
    tags: ['Facebook Personal', 'Aged 2015-2022', 'Marketplace Active', '2FA Enabled', 'Real Friends'],
    metaDescription: 'Buy aged Facebook PVA accounts with friends and marketplace access at GolfCrater. 2FA secret key included, clean IP histories, and replacement guarantee.',
    specifications: {
      deliveryTime: 'Instant to 2 Hours',
      guaranteePeriod: '30 Days Warranty',
      verificationLevel: 'SMS & Email Phone Verified',
      supportAvailable: '24/7 Live Chat',
      documentsIncluded: 'Credentials, 2FA Secret Key & Session Cookies',
      supportedRegions: 'USA, UK, Europe & Worldwide',
    },
    variants: [
      { id: 'fb-01-old', name: '01 Old Facebook Accounts Only', price: 29 },
      { id: 'fb-02-new', name: '02 New Facebook Accounts Only', price: 29 },
      { id: 'fb-02-old', name: '02 Old Facebook Accounts Only', price: 54 },
      { id: 'fb-05-new', name: '05 New Facebook Accounts Only', price: 69 },
      { id: 'fb-05-old', name: '05 Old Facebook Accounts Only', price: 139, popular: true },
    ],
    fullDescription: `
### Authentic Aged Facebook Accounts for Social Marketing & Marketplace
Whether managing community groups, launching Facebook Marketplace listings, or setting up agency advertising assets, having verified, aged personal profiles is essential.

GolfCrater supplies accounts with registered creation years (2015-2023), organic timeline interactions, active friends, and integrated 2FA security codes to prevent unexpected checkpoint locks.
    `,
  },
  {
    id: 'buy-ticketmaster-accounts',
    name: 'Buy Ticketmaster Accounts',
    slug: 'buy-ticketmaster-accounts',
    category: 'SMM Account',
    shortDescription: 'Phone-verified, pre-warmed Ticketmaster accounts with clean IP profiles and verified payment history. Ready for high-demand ticket drops and presale queues.',
    priceRange: '$19 - $739',
    startingPrice: 19,
    rating: 4.9,
    reviewCount: 230,
    image: PRODUCT_LOGOS['buy-ticketmaster-accounts'],
    badge: 'Queue Ready',
    tags: ['Ticketmaster', 'Queue Bypassed', 'Concert Drops', 'PVA Verified', 'Clean IP Profile'],
    metaDescription: 'Buy verified Ticketmaster accounts at GolfCrater. Phone verified, queue ready, aged accounts for high-demand concert ticket presales and festivals.',
    specifications: {
      deliveryTime: '1 - 2 Hours',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Phone Verified & Clean Queue Score',
      supportAvailable: '24/7 Drop Assistance',
      documentsIncluded: 'Email Access, Password & Recovery Credentials',
      supportedRegions: 'USA, UK, Canada & Global',
    },
    variants: [
      { id: 'tm-01', name: '01 Ticketmaster Accounts Only', price: 19 },
      { id: 'tm-03', name: '03 Ticketmaster Accounts Only', price: 54 },
      { id: 'tm-05', name: '05 Ticketmaster Accounts Only', price: 89, popular: true },
      { id: 'tm-10', name: '10 Ticketmaster Accounts Only', price: 159 },
      { id: 'tm-20', name: '20 Ticketmaster Accounts Only', price: 299 },
      { id: 'tm-50', name: '50 Ticketmaster Accounts Only', price: 739 },
    ],
    fullDescription: `
### Pre-Verified Ticketmaster Accounts for High-Demand Concert Queues
Avoid phone verification hurdles and automated bot-queue rejections during stadium tour and festival drops. GolfCrater delivers aged Ticketmaster accounts pre-verified with genuine mobile numbers and authentic browser histories.

Ideal for ticketing professionals and music fans seeking rapid queue processing and smooth checkout transitions.
    `,
  },
  {
    id: 'buy-tinder-account',
    name: 'Buy Tinder Account',
    slug: 'buy-tinder-account',
    category: 'SMM Account',
    shortDescription: 'Photo-verified and phone-verified (PVA) Tinder accounts with authentic photo sets, aged registration dates, and blue verification checkmarks.',
    priceRange: '$13 - $110',
    startingPrice: 13,
    rating: 4.8,
    reviewCount: 195,
    image: PRODUCT_LOGOS['buy-tinder-account'],
    badge: 'Blue Check',
    tags: ['Tinder Verified', 'Blue Badge', 'Selfie Photo Verified', 'Aged Profile', 'High Match Rate'],
    metaDescription: 'Buy photo-verified Tinder accounts with blue checkmarks at GolfCrater. New and aged PVA Tinder accounts with clean standings and fast delivery.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '30 Days Warranty',
      verificationLevel: 'Photo & SMS Phone Verified',
      supportAvailable: '24/7 Live Chat',
      documentsIncluded: 'Full Account Details & Recovery Phone Pool',
      supportedRegions: 'USA, UK, EU, Australia & Global',
    },
    variants: [
      { id: 'tinder-01', name: '01 Tinder Accounts Only', price: 13 },
      { id: 'tinder-05', name: '05 Tinder Accounts Only', price: 60 },
      { id: 'tinder-ver-new', name: '01 Verifide New Tinder Accounts Only', price: 65, popular: true },
      { id: 'tinder-ver-old', name: '01 Verifide Old Tinder Accounts Only', price: 110 },
    ],
    fullDescription: `
### Verified Tinder Accounts with Selfie Checkmarks & Aged Standing
Acquire established Tinder accounts verified with real telephone numbers and selfie biometric confirmation (blue checkmark). These accounts avoid new-profile shadowbans and deliver superior profile visibility and match velocity.

Choose between budget multi-packs or premium photo-verified accounts with aged registration records.
    `,
  },
  {
    id: 'buy-twitter-accounts',
    name: 'Buy Twitter Accounts',
    slug: 'buy-twitter-accounts',
    category: 'SMM Account',
    shortDescription: 'Aged Twitter/X accounts with phone verification, real bio setups, established creation years (2012-2023), and clean API access history.',
    priceRange: '$9 - $900',
    startingPrice: 9,
    rating: 4.9,
    reviewCount: 540,
    image: PRODUCT_LOGOS['buy-twitter-accounts'],
    badge: 'Aged 2012+',
    tags: ['Twitter X', 'Aged Handles', 'Crypto Twitter', 'Phone Verified', 'API Whitelisted', 'Organic Followers'],
    metaDescription: 'Buy aged Twitter / X accounts with phone verification at GolfCrater. 2012-2023 aged profiles, crypto community ready, with instant automated delivery.',
    specifications: {
      deliveryTime: 'Instant to 2 Hours',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Phone & Email PVA Verified',
      supportAvailable: '24/7 SMM Desk',
      documentsIncluded: 'Handle, Password, Email Access & 2FA Auth Token',
      supportedRegions: 'Worldwide',
    },
    variants: [
      { id: 'tw-01-new', name: '01 New Twitter Accounts Only', price: 9 },
      { id: 'tw-02-new', name: '02 New Twitter Accounts Only', price: 17 },
      { id: 'tw-01-old', name: '01 Old Twitter Accounts Only', price: 20 },
      { id: 'tw-02-old', name: '02 Old Twitter Accounts Only', price: 38 },
      { id: 'tw-05-new', name: '05 New Twitter Accounts Only', price: 40 },
      { id: 'tw-10-new', name: '10 New Twitter Accounts Only', price: 75 },
      { id: 'tw-05-old', name: '05 Old Twitter Accounts Only', price: 95 },
      { id: 'tw-10-old', name: '10 Old Twitter Accounts Only', price: 180, popular: true },
      { id: 'tw-30-new', name: '30 New Twitter Accounts Only', price: 220 },
      { id: 'tw-30-old', name: '30 Old Twitter Accounts Only', price: 540 },
      { id: 'tw-50-old', name: '50 Old Twitter Accounts Only', price: 900 },
    ],
    fullDescription: `
### High-Trust Aged Twitter / X Accounts for Crypto, Growth & Marketing
Twitter/X's rate limiting and spam filters heavily penalize fresh accounts. GolfCrater provides phone-verified, aged Twitter accounts dating back to 2012–2022 with real follower activity, established profile history, and clean IP records.

Ideal for crypto communities, Web3 airdrops, marketing bot fleets, and brand announcement channels.
    `,
  },

  // ===================== OTHER CATEGORY PRODUCTS =====================
  {
    id: 'buy-ssn-number',
    name: 'Buy SSN Number',
    slug: 'buy-ssn-number',
    category: 'Other',
    shortDescription: 'Legitimate identity verification resources, SSN records, and matching driver license documentation for authorized business compliance and KYC verification.',
    priceRange: '$100 - $450',
    startingPrice: 100,
    rating: 4.9,
    reviewCount: 245,
    image: PRODUCT_LOGOS['buy-ssn-number'],
    badge: 'KYC Document',
    tags: ['SSN Verification', 'Driver License', 'KYC Compliance', 'Same Name Pair', 'Instant Document'],
    metaDescription: 'Buy verified SSN records and matching driver license documents at GolfCrater. High resolution scans, same-name pairings, and instant secure delivery.',
    specifications: {
      deliveryTime: 'Instant to 1 Hour',
      guaranteePeriod: 'Full Validity Replacement',
      verificationLevel: 'State Record Verified',
      supportAvailable: '24/7 Verification Desk',
      documentsIncluded: 'SSN Record, High-Res Front/Back DL Scans',
      supportedRegions: 'All 50 US States',
    },
    variants: [
      { id: 'ssn-01', name: '01 Verified SSN Number Only', price: 100 },
      { id: 'ssn-03', name: '03 Verified SSN Number Only', price: 280, popular: true },
      { id: 'ssn-05', name: '05 Verified SSN Number Only', price: 450 },
    ],
    fullDescription: `
### Verified Identity Records and Supporting Documentation for Compliance
Satisfy identity onboarding, merchant risk assessments, and compliance verification checks with GolfCrater's verified US SSN records and matching driver license documentation.

Our packs include clean state-formatted files, high-resolution front and back documentation, and optional paired same-name credentials guaranteed to match verification databases.
    `,
  },
  {
    id: 'buy-textnow-accounts',
    name: 'Buy TextNow Accounts',
    slug: 'buy-textnow-accounts',
    category: 'Other',
    shortDescription: 'Aged TextNow accounts with pre-allocated US/Canada virtual phone numbers for instant SMS OTP verification, inbound calling, and anonymous communications.',
    priceRange: '$15 - $130',
    startingPrice: 15,
    rating: 4.8,
    reviewCount: 176,
    image: PRODUCT_LOGOS['buy-textnow-accounts'],
    badge: 'Instant SMS',
    tags: ['TextNow', 'Virtual VoIP', 'SMS Inbound', 'US Phone Number', 'Instant Activation'],
    metaDescription: 'Buy aged TextNow accounts with permanent US phone numbers at GolfCrater. Instant SMS reception, call forwarding, and 30-day replacement warranty.',
    specifications: {
      deliveryTime: 'Instant (15 - 30 Mins)',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Verified Email & Active SIM Pool',
      supportAvailable: '24/7 Live Support',
      documentsIncluded: 'Account Username, Password & Phone Number',
      supportedRegions: 'USA & Canada',
    },
    variants: [
      { id: 'tn-01', name: '01 TextNow Accounts Only', price: 15 },
      { id: 'tn-05', name: '05 TextNow Accounts Only', price: 70, popular: true },
      { id: 'tn-10', name: '10 TextNow Accounts Only', price: 130 },
    ],
    fullDescription: `
### Pre-Warmed TextNow Accounts for Inbound OTPs & Anonymous Calling
TextNow accounts offer immediate access to active US and Canadian phone numbers. Receive SMS verification codes, manage customer support callbacks, or run communication workflows without purchasing dedicated physical SIM cards.

All accounts arrive with confirmed email logins, active phone allocations, and instructions for retaining number ownership indefinitely.
    `,
  },
  {
    id: 'buy-driving-license',
    name: 'Buy Driving License',
    slug: 'buy-driving-license',
    category: 'Other',
    shortDescription: 'High-resolution authentic driving license documentation (US, UK, EU) with front and back scans, barcode data, and clean KYC validity.',
    priceRange: '$120 - $140',
    startingPrice: 120,
    rating: 4.9,
    reviewCount: 142,
    image: PRODUCT_LOGOS['buy-driving-license'],
    badge: 'High-Res Scans',
    tags: ['Driving License', 'DL Front Back', 'KYC Documentation', 'USA DL', 'UK EU License'],
    metaDescription: 'Buy high-resolution US and UK/EU Driving License documentation at GolfCrater. Perfect for identity verification and compliance audits.',
    specifications: {
      deliveryTime: 'Instant to 1 Hour',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Verified Identity Format',
      supportAvailable: '24/7 Live Support',
      documentsIncluded: 'High-Res 300 DPI Front & Back Scans + Selfie Holder',
      supportedRegions: 'USA (All States), UK, EU Member States',
    },
    variants: [
      { id: 'dl-us', name: '01 US Driving License Front & Back Only', price: 120, popular: true },
      { id: 'dl-ukeu', name: '01 UK/EU Driving License Only', price: 140 },
    ],
    fullDescription: `
### Official Driving License Documentation for Identity Verification
Pass automated biometric and document verification checks with ease. GolfCrater supplies verified, clean, high-resolution (300 DPI) front and back driving license scans matching official state and national formats.
    `,
  },
  {
    id: 'buy-old-gmail-accounts',
    name: 'Buy Old Gmail Accounts',
    slug: 'buy-old-gmail-accounts',
    category: 'Other',
    shortDescription: 'Aged PVA Gmail accounts registered between 2014 and 2018 with authentic historical activity, recovery emails, and zero spam flags.',
    priceRange: '$20 - $170',
    startingPrice: 20,
    rating: 4.9,
    reviewCount: 264,
    image: PRODUCT_LOGOS['buy-old-gmail-accounts'],
    badge: 'Aged 2014-2018',
    tags: ['Old Gmail', 'Aged PVA', '2014-2018', 'Warm Inbox', 'High Trust Score'],
    metaDescription: 'Buy aged Gmail accounts (2014-2018) with phone verification and clean standing at GolfCrater. Instant delivery and 30-day warranty.',
    specifications: {
      deliveryTime: 'Instant (15 Mins)',
      guaranteePeriod: '30 Days Replacement',
      verificationLevel: 'Phone Verified & Clean IP History',
      supportAvailable: '24/7 Email Specialist',
      documentsIncluded: 'Email, Password, Recovery Email & Creation Year',
      supportedRegions: 'Worldwide (US/UK IPs)',
    },
    variants: [
      { id: 'ogm-01', name: '01 Old Gmail Account (2014-2018) Only', price: 20 },
      { id: 'ogm-05', name: '05 Old Gmail Accounts Only', price: 90, popular: true },
      { id: 'ogm-10', name: '10 Old Gmail Accounts Only', price: 170 },
    ],
    fullDescription: `
### Aged Google Accounts (2014-2018) with Natural Trust Scores
Avoid new-account limitations, immediate CAPTCHA challenges, and aggressive security checkpoints. Our aged Gmail accounts were registered between 2014 and 2018, pre-warmed, and maintained with clean activity profiles.
    `,
  },

  // ===================== CRYPTO ACCOUNT ADDITIONS =====================
  {
    id: 'buy-verified-airbnb-accounts',
    name: 'Buy Verified Airbnb Accounts',
    slug: 'buy-verified-airbnb-accounts',
    category: 'Crypto Account',
    shortDescription: 'Fully ID-verified Airbnb personal and host accounts with verified government ID, clean review history, and instant booking capabilities.',
    priceRange: '$130 - $250',
    startingPrice: 130,
    rating: 4.9,
    reviewCount: 118,
    image: PRODUCT_LOGOS['buy-verified-airbnb-accounts'],
    badge: 'ID Verified',
    tags: ['Airbnb Host', 'Airbnb Guest', 'Government ID Verified', 'Instant Book', 'Superhost Eligible'],
    metaDescription: 'Buy verified Airbnb accounts (Personal & Host) at GolfCrater. Government ID verified, clean review standing, and instant booking enabled.',
    specifications: {
      deliveryTime: '1 - 4 Hours',
      guaranteePeriod: '30 Days Guarantee',
      verificationLevel: 'Government Passport & Phone Verified',
      supportAvailable: '24/7 Dedicated Support',
      documentsIncluded: 'Airbnb Account Credentials, Email & ID Documents',
      supportedRegions: 'USA, UK, Europe, Canada',
    },
    variants: [
      { id: 'abnb-personal', name: '01 Personal Airbnb Accounts Only', price: 130 },
      { id: 'abnb-host', name: '01 Airbnb Host Accounts Only', price: 250, popular: true },
    ],
    fullDescription: `
### Verified Airbnb Host & Personal Accounts Ready for Instant Reservations
Avoid lengthy identity verification queues and instant booking denials on Airbnb. GolfCrater supplies verified personal traveler accounts and host accounts with confirmed government IDs, phone numbers, and clean historical profiles.

Ready for listing creation, co-hosting setups, and friction-free worldwide travel bookings.
    `,
  },
  {
    id: 'buy-verified-bybit-accounts',
    name: 'Buy Verified ByBiT Accounts',
    slug: 'buy-verified-bybit-accounts',
    category: 'Crypto Account',
    shortDescription: 'KYC Level 1 & Level 2 verified Bybit cryptocurrency exchange accounts with high withdrawal limits, full document sets, and 2FA security credentials.',
    priceRange: '$229 - $449',
    startingPrice: 229,
    rating: 4.9,
    reviewCount: 165,
    image: PRODUCT_LOGOS['buy-verified-bybit-accounts'],
    badge: 'Level 2 KYC',
    tags: ['Bybit Verified', 'Crypto Derivatives', 'High Withdrawal Limit', 'P2P Trading', 'Full DM Docs'],
    metaDescription: 'Buy Level 2 verified Bybit accounts at GolfCrater. High crypto withdrawal limits, P2P access, full documents (DM), and 60-day warranty.',
    specifications: {
      deliveryTime: '1 - 3 Hours',
      guaranteePeriod: '60 Days Warranty',
      verificationLevel: 'KYC Level 2 Advanced & Selfie Verified',
      supportAvailable: '24/7 Crypto Specialist',
      documentsIncluded: 'Bybit Login, Email, 2FA Secret Key & Verification Document Pack',
      supportedRegions: 'Worldwide Compliant Jurisdictions',
    },
    variants: [
      { id: 'bybit-new', name: '01 New Verified ByBit Accounts Only', price: 229 },
      { id: 'bybit-old', name: '01 Old Verified ByBit Accounts Only', price: 349, popular: true },
      { id: 'bybit-dm', name: '01 Verified ByBit Accounts With Full DM Only', price: 449 },
    ],
    fullDescription: `
### Level 2 Verified Bybit Accounts with High Daily Withdrawal Allowances
Trade derivatives, access Bybit P2P fiat ramps, and execute copy-trading without geographic restriction friction. Our Bybit accounts come with complete KYC Level 2 verification, proof of address, selfie confirmation, and full document (DM) archives.

Delivered with dedicated proton/gmail email access, 2FA backup codes, and high daily withdrawal capacity (up to $2,000,000 equivalent in USDT/BTC).
    `,
  },
];

export const CATEGORIES = [
  {
    id: 'Bank Account',
    name: 'Bank Account',
    icon: 'Landmark',
    description: 'Legitimate business and financial accounts where legally permitted, with full documentation.',
    color: 'emerald',
  },
  {
    id: 'Crypto Account',
    name: 'Crypto Account',
    icon: 'Coins',
    description: 'Crypto exchange and financial resources complying with applicable laws and security standards.',
    color: 'blue',
  },
  {
    id: 'Reviews Service',
    name: 'Reviews Service',
    icon: 'Star',
    description: 'Reputation management services, feedback monitoring, and authentic customer feedback systems.',
    color: 'amber',
  },
  {
    id: 'SMM Account',
    name: 'SMM Account',
    icon: 'Smartphone',
    description: 'Social-media marketing tools, aged creator accounts, and authentic promotion services.',
    color: 'indigo',
  },
  {
    id: 'Email Service',
    name: 'Email Service',
    icon: 'Mail',
    description: 'Business email management, Google Workspace, and high-deliverability SMTP infrastructure.',
    color: 'teal',
  },
  {
    id: 'Account',
    name: 'Account',
    icon: 'ShieldCheck',
    description: 'Verified developer, advertising, and e-commerce marketplace accounts including Apple Developer, Google Play, Amazon, and GitHub.',
    color: 'emerald',
  },
  {
    id: 'Other',
    name: 'Other',
    icon: 'Layers',
    description: 'Specialized identity verification assets, SSN numbers, driving license records, and virtual VoIP accounts.',
    color: 'amber',
  },
  {
    id: 'Digital Tools',
    name: 'Digital Tools',
    icon: 'Wrench',
    description: 'Enterprise software, automation templates, marketing tools, and downloadable licenses.',
    color: 'violet',
  },
];

export const CUSTOMER_REVIEWS = [
  {
    id: 'rev-1',
    name: 'Marcus Vance',
    country: 'United States',
    rating: 5,
    date: '3 days ago',
    productName: 'Buy Google Reviews',
    comment: 'GolfCrater delivered our 50 Google reviews in a natural, gradual drip over two weeks. Our local Map Pack ranking moved from position 14 to position 2 in downtown Miami! Support was in touch on Telegram within 10 minutes.',
    verified: true,
  },
  {
    id: 'rev-2',
    name: 'Elena Rostova',
    country: 'United Kingdom',
    rating: 5,
    date: '1 week ago',
    productName: 'Buy Verified Stripe Account',
    comment: 'The Stripe business account came complete with clean documents and company credentials. We hooked up our Shopify store within 30 minutes and have processed $14,000 without a single hold. Exceptional reliability.',
    verified: true,
  },
  {
    id: 'rev-3',
    name: 'Julian Becker',
    country: 'Germany',
    rating: 5,
    date: '2 weeks ago',
    productName: 'Buy Verified Binance Account',
    comment: 'Verified Plus Binance account was delivered in under an hour. 2FA backup key and full passport verification documents matched. Paid via USDT and received an instant order confirmation invoice.',
    verified: true,
  },
  {
    id: 'rev-4',
    name: 'Sophia Patel',
    country: 'Canada',
    rating: 5,
    date: '2 weeks ago',
    productName: 'Buy Trustpilot Reviews',
    comment: 'TrustScore moved from 3.2 to 4.7 with green Verified badges. Direct customer conversion rate jumped immediately. GolfCrater is the real deal.',
    verified: true,
  },
];

export const FAQS = [
  {
    question: 'What products does GolfCrater sell?',
    answer: 'GolfCrater provides premium digital products and online business services across several core categories: online reputation management (Google, Trustpilot, Yelp, Facebook, G2), verified financial and merchant services (Cash App, PayPal, Wise, Stripe, Payoneer), verified crypto trading resources (Binance, Coinbase, Kraken, MoonPay), social media marketing tools, and enterprise email infrastructure.',
  },
  {
    question: 'How do I receive my order?',
    answer: 'Delivery depends on the specific product. For verified digital accounts and tools, credentials, security recovery keys, and verification documents are delivered securely to your designated buyer email and viewable instantly in your GolfCrater Order Lookup dashboard within 1 to 4 hours. For review services, fulfillment begins within 12 to 24 hours following a gradual drip schedule to ensure natural organic retention.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept 3 official payment gateways: 1st: Crypto Gateways (BSC, TRX, ETH, SOL, BTC, LTC, DOGE) with original high-resolution QR codes; 2nd: Skrill E-Wallet (direct to onlinespay247@gmail.com); and 3rd: Bank Transfer (USD International SWIFT & USA ACH/Wire, EUR SEPA, and GBP UK Faster Payments). All transactions are SSL encrypted.',
  },
  {
    question: 'Are digital products refundable?',
    answer: 'Yes. GolfCrater stands behind every listing with our 30-Day Money Back and 60-Day Non-Drop Replacement Guarantee. If an account experiences verification issues within the warranty window, or if review retention drops, our 24/7 technical desk provides an immediate free replacement or full refund if we fail to resolve the issue.',
  },
  {
    question: 'How can I contact support?',
    answer: 'Our dedicated support team is active 24/7. You can use our built-in Live Chat widget, submit an inquiry through the Contact page, or contact us directly on Telegram (@GolfCraterSupport) and email at support@golfcrater.com. Typical response time is under 15 minutes.',
  },
  {
    question: 'Are your services compliant with applicable laws and platform rules?',
    answer: 'GolfCrater strictly emphasizes legitimate, authorized, and compliant business assistance. We facilitate legitimate reputation management, enterprise infrastructure onboarding, and lawful cross-border business setup. We do not support fraud, unauthorized access, or illegal financial activities.',
  },
];
